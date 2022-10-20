import PropTypes from 'prop-types'
import { Title, StatisticItem } from './Statistic.styled'
import Notification from '../Notification'

export default function Statistic({good, neutral, bad, total, positivePercentage}) {
    return (<div>
        <Title>Statistic</Title>
            {
            total
                ?
                <ul>
                    <StatisticItem>good: {good}</StatisticItem>
                    <StatisticItem>neutral: {neutral}</StatisticItem>
                    <StatisticItem>bad: {bad}</StatisticItem>
                    <StatisticItem>total: {total}</StatisticItem>
                    <StatisticItem>positivePercentage: {positivePercentage}%</StatisticItem>
                </ul>
                :         
                    <Notification
                    message="There is no feedback">
                    </Notification>
        }
    </div>
        
    )
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}