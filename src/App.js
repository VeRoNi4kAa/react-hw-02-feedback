import {Component} from 'react'
import FeedbackOptions from './components/FeedbackOptions'
import Statistics from './components/Statistics'
import Section from './components/Section'


export default class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    handleIncrement = option=> {
        this.setState(prevState => ({
            [option]: prevState[option] + 1    
        }));
    }

    countTotalFeedback = ({good, neutral, bad}) => {
       return good + neutral + bad
    }

    countPositiveFeedbackPercentage = ({neutral, bad}) => {
        const difference =  this.countTotalFeedback(this.state) - (neutral + bad)
        return (Math.round(difference*100/this.countTotalFeedback(this.state)))
    }

    createArrayKeysState = () => Object.keys(this.state);


    render() {
        const { good, neutral, bad } = this.state;

        return <>
            <Section title={'Please leave feedback'}>
                <FeedbackOptions
                    options={this.createArrayKeysState()}
                    onLeaveFeedback={this.handleIncrement}
                ></FeedbackOptions>
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback(this.state)}
                    positivePercentage={this.countPositiveFeedbackPercentage(this.state)} >
                </Statistics>
            </Section>
        </>    
    }
}
        
