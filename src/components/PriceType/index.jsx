import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './styles.css';

export default function PriceType({ priceType, handlePriceTypeChange }) {
  return (
    <div className='toggle-prices'>
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={(event, newType) => handlePriceTypeChange(event, newType)}
        sx={{
          "&.Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--blue)!important",
            borderColor: "unset",
            color: "var(--blue) !important ",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue) !important",
          },
        }}
      >
        <ToggleButton value="prices">Price</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>
        <ToggleButton value="total_volume">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
