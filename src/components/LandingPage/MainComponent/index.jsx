import React from 'react';
import './styles.css';
import Button from '../../Button';
import iphone from '../../../assets/iphone.png';
import gradient from '../../../assets/gradient.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const MainComponent = () => {
  return (
    <div className='flex-info'>
      <div className='left-component'>
        <motion.h1 className='track-crypto' 
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.5}}>Track Crypto</motion.h1>
        <motion.h1 className='real-time'
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.5,delay:0.5}}>Real Time.</motion.h1>
        <motion.p className='info-text'
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.5,delay:1}}>
          Track crypto through a public API in real time. Visit the dashboard to do so!
        </motion.p>
        <motion.div className='btn-flex'
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.5,delay:1.5}}>
          <Link to='/dashboard'>
          <Button text={'Dashboard'} outlined={false} />
        </Link>
          <Button text="Share" outlined={true} onClick={() => console.log('Share clicked')} />
        </motion.div>
      </div>
      <div className='phone-container'>
        <motion.img src={iphone} alt="iPhone" className='iphone'
        initial= {{y:-10}}
        animate={{y:10}}
        transition={{type: "smooth",
        repeatType: "mirror",
        duration: 2,
        repeat:Infinity}} />
        <motion.img src={gradient} alt="Gradient" className='gradient' />
      </div>
    </div>
  );
};

export default MainComponent;
