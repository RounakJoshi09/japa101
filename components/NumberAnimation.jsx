import React, { useEffect, useState } from 'react';
import styles from '@/styles/RecordCountBox.module.css';
import {numberToWords,changeDurationColor} from '@/helpers/utils';

const NumberAnimation = ({ targetNumber, animationDuration , duration}) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let animationInterval;
    const increment = targetNumber / (animationDuration / 16);

    const updateNumber = () => {
      setCurrentNumber((prevNumber) => {
        const newNumber = prevNumber + increment;
        return newNumber >= targetNumber ? targetNumber : newNumber;
      });
    };

    animationInterval = setInterval(updateNumber, 16);

    return () => {
      clearInterval(animationInterval);
    };
  }, [targetNumber, animationDuration]);

  return (
    <div className="number-container">
      <div style={{color:changeDurationColor(targetNumber,duration)}} className={`${styles.roundCountText}`}>{Math.round(currentNumber)}+</div>
    </div>
  );
};

export default NumberAnimation;
