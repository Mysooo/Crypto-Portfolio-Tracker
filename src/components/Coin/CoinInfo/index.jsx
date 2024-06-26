import React from 'react';
import "./styles.css";

function CoinInfo({ heading, desc }) {
  return (
    <div className='grey-wrapper'>
      <h2 className='coin-heading'>{heading}</h2>
      <p className='coin-desc'>{desc}</p>
    </div>
  );
}

export default CoinInfo;
