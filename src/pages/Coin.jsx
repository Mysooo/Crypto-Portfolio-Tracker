import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { CoinObject } from '../functions/convertObjects'; // Ensure the correct path
import List from "../components/Dashboard/List";
import CoinInfo from '../components/Coin/CoinInfo'; // Correct import
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LineChart';
import SelectDays from '../components/Coin/SelectDays';
import PriceType from '../components/PriceType';
import { settingChartData } from '../functions/settingChartData'; // Import the function

function CoinPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coin, setCoin] = useState(null); // Define state for coin data
    const [days, setDays] = useState(30); // Add state for days
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [priceType, setPriceType] = useState('prices');

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id, days, priceType]); // Depend on id, days, and priceType to re-fetch data when any changes

    async function getData() {
        try {
            setIsLoading(true); // Show loader during fetching
            const data = await getCoinData(id);
            if (data) {
                CoinObject(setCoin, data);
                const prices = await getCoinPrices(id, days, priceType);
                if (prices.length > 0) {
                    
                    settingChartData(setChartData, prices); // Use the imported function here
                }
                
                setIsLoading(false); // Hide loader after fetching
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false); // Hide loader on error
        }
    }
   

    // Handler function for changing the days
    const handleDaysChange = (e) => {
        setDays(e.target.value);
    };

    // Handler function for changing the price type
    const handlePriceTypeChange = (event, newType) => {
        setPriceType(newType); // Update the price type
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
                        <SelectDays days={days} handleDaysChange={handleDaysChange} />
                        <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
                        <LineChart chartData={chartData} height={600} width={800} />
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
//"Smoke, relax, and look good doing it."