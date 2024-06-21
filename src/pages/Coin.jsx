import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported
import Header from '../components/Common/Header';
import Loader from '../components/Common/Loader';

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
                    setCoin(response.data); // Update state with coin data
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.log("ERROR>>>", error.message);
                });
        }
    }, [id]); // Use parentheses and correct dependency array

    return (
        <div>
            <Header />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <h1>{coin.name}</h1>
                    {coin.image && coin.image.large ? (
                        <img src={coin.image.large} alt={coin.name} />
                    ) : (
                        <p>Image not available</p>
                    )}
                </>
            )}
        </div>
    );
}

export default CoinPage;
