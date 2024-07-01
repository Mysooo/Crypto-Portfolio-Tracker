import React, { useState } from 'react';
import "./styles.css";

function CoinInfo({ heading, desc }) {
  // Function to strip HTML tags
  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  // Constants for short and long descriptions
  const shortDesc = stripHtmlTags(desc).slice(0, 350);
  const longDesc = stripHtmlTags(desc);

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
