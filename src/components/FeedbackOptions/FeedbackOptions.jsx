import PropTypes from 'prop-types';
import { ButtonItem, } from './FeedbackOptions.styled'


function FeedbackOptions({ options, onLeaveFeedback }) {
        return (<div>

                {options.map(option => {
                    return (
                    <ButtonItem
                        key={option}
                        onClick={() => {
                        onLeaveFeedback(option);
                        }}
                        >
                            {option}
                    </ButtonItem>
                    );
                })}
        </div>  
        )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}