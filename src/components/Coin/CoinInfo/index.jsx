import React, { useState } from 'react';
import "./styles.css";

function CoinInfo({ heading, desc }) {
  // Constants for short and long descriptions
  const shortDesc = desc.slice(0, 350);
  const longDesc = desc;

  // State for toggle
  const [flag, setFlag] = useState(false);

  // Function to toggle flag state
  const toggleDescription = () => {
    setFlag(!flag);
  };

  return (
    <div className='grey-wrapper'>
      <h2 className='coin-heading'>{heading}</h2>
      <p className='coin-desc'>
        {flag ? longDesc : shortDesc}
        <span className='read-more' onClick={toggleDescription}>
          {flag ? ' Read Less...' : ' Read More...'}
        </span>
      </p>
    </div>
  );
}

export default CoinInfo;
