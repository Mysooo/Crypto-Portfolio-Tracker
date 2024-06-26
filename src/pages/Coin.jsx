import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';
import { CoinObject } from '../functions/convertObjects'; // Ensure the correct path
import List from "../components/Dashboard/List";
import CoinInfo from '../components/Coin/CoinInfo'; // Correct import

function CoinPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coin, setCoin] = useState(null); // Define state for coin data

    useEffect(() => {
        if (id) {
            axios
                .get(`https://api.coingecko.com/api/v3/coins/${id}`)
                .then((response) => {
                    console.log("RESPONSE>>>", response.data);
                    CoinObject(setCoin, response.data); 
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log("ERROR>>>", error.message);
                    setIsLoading(false); 
                });
        }
    }, [id]); 

    return (
        <div>
            <Header />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className='grey-wrapper'>
                        <List coin={coin}></List>   
                    </div>
                    <CoinInfo heading={coin.name} desc={coin.desc} /> {/* Correct component usage */}
                </>
            )}
        </div>
    );
}

export default CoinPage;
