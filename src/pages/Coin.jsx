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

function CoinPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coin, setCoin] = useState(null); // Define state for coin data
    const [days, setDays] = useState(30);

    useEffect(() => {
        if (id) {
            getData();
        }
    }, [id]);

    async function getData() {
        try {
            const data = await getCoinData(id);
            if (data) {
                CoinObject(setCoin, data);
                const prices = await getCoinPrices(id, days);
                if (prices.length > 0) {
                    console.log("Prices fetched successfully");
                }
                setIsLoading(false); 
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false); 
           
        }
    }

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
                    <CoinInfo heading={coin.name} desc={coin.desc} /> {/* Correct component usage */}
                </>
            )}
        </div>
    );
}

export default CoinPage;
