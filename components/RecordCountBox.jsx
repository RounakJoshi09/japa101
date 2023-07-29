import styles from '@/styles/RecordCountBox.module.css';
import {numberToWords,changeDurationColor} from '@/helpers/utils';
import NumberAnimation from './NumberAnimation';
const RecordCountBox = ({ rounds, durationText ,duration}) => {
  let namesOfLord = parseInt(rounds) !== NaN ? parseInt(rounds) : 0;
  namesOfLord = namesOfLord * 1728;
  return (
    <>
      <div className={`${styles.boxWrapper}`}>
        <NumberAnimation targetNumber={rounds} duration={duration} animationDuration={1500}  />
        <div className={`${styles.roundText}`}>Rounds</div>
        <div className={`${styles.durationTextStyle}`}>{durationText}</div>
        
        {namesOfLord !== 0 ? (    
            <div style={{color:changeDurationColor(rounds,duration)}}  className={`${styles.nameCountText}`}>
            {namesOfLord.toLocaleString('en')} names have been taken 
            </div>
         
         ): null}
      </div>
    </>
  );
};

export default RecordCountBox;
