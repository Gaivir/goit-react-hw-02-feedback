import React from "react";
// import Buttons from './components/Buttons'
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';




class App extends React.Component {
  state = {
    good: 0,
    bad: 0,
    neutral:0,
  }

  handleClickIncrement = (e) => {
    const { name } = e.currentTarget;
    this.setState((prevState) => ({
     [name]: prevState[name] + 1,
    }));
  }

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

  

  render() {
    return (
    <>
    <Section title="Please leave feedback">
      <FeedbackOptions options={this.state} onLeaveFeedback={this.handleClickIncrement}/>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalIncrement()}
            positivePercentage={this.positiveFeedback()}/>
        
        </Section>
        
        
    </>
  
  )
    
}
}

export default App;
