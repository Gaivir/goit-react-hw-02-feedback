import React from 'react';
import style from './Buttons.module.css';

class Buttons extends React.Component {
    state = {
        good: 0,
        bad: 0,
        nautral:0,
    }

    handleIncrement = () => {
        this.setState({
            good: this.state.good+1,
        });
        
    }

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
                <span className={style.text}>Total: 0</span>
                <span className={style.text}>Positive feedback: 0</span>
            </div>
        </div>
            
        )
        
    }
}
export default Buttons;