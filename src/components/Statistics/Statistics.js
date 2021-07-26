import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import Notification from '../Notification/Notification'


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => 
(
  
    <div className={styles.statistics}>
      {total > 0 ?
      <><span className={styles.text}>Good: {good}</span>
                <span className={styles.text}>Neutral: {neutral}</span>
                <span className={styles.text}>Bad: {bad}</span>
                    <span className={styles.text}>Total: {total}</span>
                    <span className={styles.text}>Positive feedback: {positivePercentage}%</span></>: <Notification message="No feedback given" />}
                    
    </div>
  )


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;