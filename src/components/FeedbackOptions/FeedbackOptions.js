import React from 'react';  
import PropTypes from "prop-types";
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.div}>
    {/* Звернути УВАГУ!!!!! Мепаєм ключі обєкту */}
           {Object.keys(options).map(value => (
               <button
                   type='button'
                   key={value}
                   name={value}
               onClick={onLeaveFeedback}
             className={styles.button}>
                   {value}
               </button>
           ))}
      </div>
)

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;