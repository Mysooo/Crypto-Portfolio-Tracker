import React, { useEffect, useState } from 'react';
import './styles.css';
import { get100Coin } from '../../../functions/get100Coins';
import { Select, MenuItem } from '@mui/material';

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);
  const styles = {
    height: "2.5rem",
    width: "7.3rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const myCoins = await get100Coin();
        setAllCoins(myCoins || []); // Ensure it defaults to an empty array
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className='coins'>
      <p>Crypto 1</p>
      <Select
        value={crypto1}
        onChange={(event) => handleCoinChange(event, false)}
        sx={styles}
      >
        {allCoins
        .filter((item) =>item.id !=crypto2)
        .map((coin) => (
          <MenuItem key={coin.id} value={coin.id}>{coin.name}</MenuItem>
        ))}
      </Select>
      <p>Crypto 2</p>
      <Select
        value={crypto2}
        onChange={(event) => handleCoinChange(event, true)}
        sx={styles}
      >
        {allCoins
          .filter((item) =>item.id !=crypto1)
          .map((coin) => (
          <MenuItem key={coin.id} value={coin.id}>{coin.name}</MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectCoins;
