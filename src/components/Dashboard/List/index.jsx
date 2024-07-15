import React from 'react';
import './styles.css';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumber';
import { Link } from 'react-router-dom';

function List({ coin }) {
  const priceChange = coin.price_change_percentage_24h ?? 0; // Default to 0 if undefined
  const currentPrice = coin.current_price ?? 0; // Default to 0 if undefined
  const totalVolume = coin.total_volume ?? 0; // Default to 0 if undefined
  const marketCap = coin.market_cap ?? 0; // Default to 0 if undefined

  return (
    <Link to={`/coin/${coin.id}`}>
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
        <td className='chip-flex'>
          <Tooltip title='Percentage Change' placement='bottom-end'>
            <div className={`price-chip ${priceChange > 0 ? '' : 'chip-red'}`}>
              {priceChange.toFixed(2)}%
            </div>
          </Tooltip>
          <div className='icon-chip td-icon'>
            {priceChange > 0 ? <TrendingUpRoundedIcon /> : <TrendingDownRoundedIcon />}
          </div>
        </td>
        <td>
          <Tooltip title='Price' placement='bottom-start'>
            <h3 className='coin-price td-center-align' style={{ color: priceChange < 0 ? "var(--red)" : "var(--green)" }}>
              ${currentPrice.toLocaleString()}
            </h3>
          </Tooltip>
        </td>
        <td>
          <Tooltip title='Total Volume' placement='bottom-start'>
            <p className='total_volume td-right-align td-totalvolume'>{totalVolume.toLocaleString()}</p>
          </Tooltip>
        </td>
        <td className='desktop'>
          <Tooltip title='Market Cap' placement='bottom-start'>
            <p className='total_volume td-right-align'>{marketCap.toLocaleString()}</p>
          </Tooltip>
        </td>
        <td className='mobile-td-mkt'>
          <Tooltip title='Market Cap' placement='bottom-start'>
            <p className='total_volume td-right-align'>${convertNumber(marketCap)}</p>
          </Tooltip>
        </td>
      </tr>
    </Link>
  );
}

export default List;
