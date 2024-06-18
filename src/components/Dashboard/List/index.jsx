import React from 'react';
import './styles.css';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumber';

function List({ coin }) {
  return (
    <tr className='list-row'>
      <td className='td-image'>
        <img src={coin.image} className='coin-logo' alt={`${coin.name} logo`} />
      </td>
      <td>
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </td>
      {coin.price_change_percentage_24h > 0 ? (
        <td className='chip-flex'>
          <Tooltip title='Percentage Change' placement='bottom-end'>
            <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          </Tooltip>
          <div className='icon-chip td-icon'><TrendingUpRoundedIcon /></div>
        </td>
      ) : (
        <td className='chip-flex'>
          <Tooltip title='Percentage Change' placement='bottom-start'>
            <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          </Tooltip>
          <div className='icon-chip chip-red td-icon'><TrendingDownRoundedIcon /></div>
        </td>
      )}
      <td>
        <Tooltip title='Price' placement='bottom-start'>
          <h3 className='coin-price td-center-align' style={{ color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)" }}>
            ${coin.current_price.toLocaleString()}
          </h3>
        </Tooltip>
      </td>
      <td>
        <Tooltip title='Total Volume' placement='bottom-start'>
          <p className='total_volume td-right-align td-totalvolume'>{coin.total_volume.toLocaleString()}</p>
        </Tooltip>
      </td>
      <td className='desktop'>
        <Tooltip title='Market Cap' placement='bottom-start'>
          <p className='total_volume td-right-align'>{coin.market_cap.toLocaleString()}</p>
        </Tooltip>
        </td>
        <td className='mobile-td-mkt'>
        <Tooltip title='Market Cap' placement='bottom-start'>
          <p className='total_volume td-right-align'>${convertNumber(coin.market_cap)}</p>
        </Tooltip>
      </td>
    </tr>
  );
}

export default List;
