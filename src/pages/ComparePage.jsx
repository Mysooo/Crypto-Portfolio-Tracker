import React, { useEffect, useState } from 'react';
import Header from '../components/Common/Header';
import SelectCoins from '../components/Compare/SelectCoins';
import SelectDays from '../components/Coin/SelectDays';
import List from '../components/Dashboard/List';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import Loader from '../components/Common/Loader';
import { CoinObject } from '../functions/convertObjects';
import CoinInfo from '../components/Coin/CoinInfo';
import LineChart from '../components/Coin/LineChart'; // Import LineChart
import { settingChartData } from '../functions/settingChartData'; // Import the chart data setting function

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [data1, data2] = await Promise.all([
        getCoinData(crypto1),
        getCoinData(crypto2),
      ]);

      CoinObject(setCrypto1Data, data1);
      CoinObject(setCrypto2Data, data2);

      const [prices1, prices2] = await Promise.all([
        getCoinPrices(crypto1, days, priceType),
        getCoinPrices(crypto2, days, priceType),
      ]);

      // Set chart data using the prices
      settingChartData(setChartData, prices1, prices2);

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [crypto1, crypto2, days, priceType]);

  const handleCoinChange = (event, isCoin2) => {
    const crypto = event.target.value;
    if (isCoin2) {
      setCrypto2(crypto);
    } else {
      setCrypto1(crypto);
    }
  };

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className='coins-days-flex'>
        <SelectCoins 
          crypto1={crypto1} 
          crypto2={crypto2} 
          handleCoinChange={handleCoinChange} 
        />
        <SelectDays 
          days={days} 
          handleDaysChange={handleDaysChange} 
          noPTag={true} 
        />
      </div>
      {isLoading ? <Loader /> : (
        <>
          <div className='grey-wrapper'>
            <List coin={crypto1Data} />
          </div>
          <div className='grey-wrapper'>
            <List coin={crypto2Data} />
          </div>
          <div className='grey-wrapper'>
            <LineChart chartData={chartData} height={400} width={800} />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
          
        </>
      )}
    </div>
  );
};

export default ComparePage;
