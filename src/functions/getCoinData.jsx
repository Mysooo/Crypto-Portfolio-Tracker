import axios from "axios";

export const getCoinData = (id) => {
    const myData = axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
           
            throw error; // Propagate the error to handle it in the calling function
        });
    
    return myData;
};
