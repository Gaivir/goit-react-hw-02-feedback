import React from 'react';
import style from './Buttons.module.css';

class Buttons extends React.Component {
    state = {
        good: 0,
        bad: 0,
        neutral: 0,
    };

    handleIncrement = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1
        }));
        
    };

    totalIncrement = () => {
        // деструктиризуємо елементи обєкту 
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
        // return this.state.good + this.state.bad + this.state.nautral;
    };

    positiveFeedback = () => {
        const { good, neutral, bad } = this.state;
        // Процентове співвідношення елементів
        return Math.floor((good * 100) / (good + bad + neutral))
    };

    render()
    
    {
        return (
        <div className={style.general}>
            <div>
                <h1>Please leave feedback</h1>
                <button type="button" className={style.button} onClick={this.handleIncrement}>good</button>
                    <button type="button" className={style.button} onClick={this.handleIncrement}>neutral</button>
                    <button type="button" className={style.button} onClick={this.handleIncrement}>bad</button>
            </div>
            <div className={style.statistics}>
                <h1>Statistics</h1>
                    <span className={style.text}>Good: {this.state.good}</span>
                <span className={style.text}>Neutral: {this.state.neutral}</span>
                <span className={style.text}>Bad: {this.state.bad}</span>
                    <span className={style.text}>Total: {this.totalIncrement}</span>
                    <span className={style.text}>Positive feedback: {this.positiveFeedback}%</span>
            </div>
        </div>
            
        )
        
    };
}
export default Buttons;