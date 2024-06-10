import React from 'react';
import './styles.css';
import Button from '../../Button';
import iphone from '../../../assets/iphone.png';
import gradient from '../../../assets/gradient.png';

const MainComponent = () => {
  return (
    <div className='flex-info'>
      <div className='left-component'>
        <h1 className='track-crypto'>Track Crypto</h1>
        <h1 className='real-time'>Real Time.</h1>
        <p className='info-text'>
          Track crypto through a public API in real time. Visit the dashboard to do so!
        </p>
        <div className='btn-flex'>
          <Button text="Dashboard" onClick={() => console.log('Dashboard clicked')} />
          <Button text="Share" outlined={true} onClick={() => console.log('Share clicked')} />
        </div>
      </div>
      <div className='phone-container'>
        <img src={iphone} alt="iPhone" className='iphone' />
        <img src={gradient} alt="Gradient" className='gradient' />
      </div>
    </div>
  );
};

export default MainComponent;
