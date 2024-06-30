import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { CoinObject } from '../functions/convertObjects'; // Ensure the correct path
import List from "../components/Dashboard/List";
import CoinInfo from '../components/Coin/CoinInfo'; // Correct import
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LineChart';
import SelectDays from '../components/Coin/SelectDays';

function CoinPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coin, setCoin] = useState(null);
    const [days, setDays] = useState(30);
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id, days]);

    async function getData() {
        try {
            const data = await getCoinData(id);
            if (data) {
                CoinObject(setCoin, data);
                const prices = await getCoinPrices(id, days);
                if (prices.length > 0) {
                    setChartData({
                        labels: prices.map(price => new Date(price[0]).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
                        datasets: [
                            {
                                data: prices.map(price => price[1]),
                                borderColor: "#3a80e9",
                                backgroundColor: "rgba(58,128,233,0.1)",
                                borderWidth: 1,
                                fill: true,
                                tension: 0.25,
                                pointRadius: 0,
                            }
                        ]
                    });
                }
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    }

    const handleDaysChange = (e) => {
        setDays(e.target.value);
    };

    return (
        <div>
            <Header />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className='grey-wrapper'>
                        <List coin={coin} />
                    </div>
                    <div className='grey-wrapper'>
                        <div className="chart-container">
                            <SelectDays days={days} handleDaysChange={handleDaysChange} />
                            <LineChart chartData={chartData} height={600} width={800} />
                        </div>
                    </div>
                    {coin && (
                        <CoinInfo heading={coin.name} desc={coin.desc} />
                    )}
                </>
            )}
        </div>
    );
}

export default CoinPage;
