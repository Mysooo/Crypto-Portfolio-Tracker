import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabcomponent'
function DashboardPage() {
    const [coins,setCoins] = useState([]);

    useEffect(() => {
        // Get 100 Coins
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
          )
          .then((response) => {
            console.log("RESPONSE>>>", response.data);
            setCoins(response.data);

          })
          .catch((error) => {
            console.log("ERROR>>>", error.message);
          });
      }, []);
    
      
  return (
    <div>
      <Header></Header>
      <TabsComponent coins={coins}></TabsComponent>

    </div>
  )
}

export default DashboardPage
