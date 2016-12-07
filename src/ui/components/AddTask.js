
import DayPicker from '../views/DayPicker';
import TimesPicker from '../views/TimesPicker';
import TaskPicker from './TaskPicker';
import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {connect} from "react-redux";
import {createTaskServiceShared} from "../../core/Services/CreateTaskService";

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class AddTask extends React.Component {

    handleNext = () => {
        const {stepIndex} = this.props;
        this.props.dispatch(createTaskServiceShared.createTaskStep(stepIndex + 1));
        // this.setState({
        //     stepIndex: stepIndex + 1,
        //     finished: stepIndex >= 2,
        // });
    };

    handlePrev = () => {
        const {stepIndex} = this.props;
        if (stepIndex > 0) {
            //this.setState({stepIndex: stepIndex - 1});
            this.props.dispatch(createTaskServiceShared.createTaskStep(stepIndex - 1));
        }
    };

    getStepTitle(stepIndex) {
        switch (stepIndex) {
            case 0:
                return 'Pick a task type';
            case 1:
                return 'Which days should it repeat?';
            case 2:
                return 'On what time should it notify?';
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <TaskPicker/>;
            case 1:
                return <DayPicker />;
            case 2:
                return <TimesPicker />;
            default:
                return <div />
        }
    }

    render() {
        const {finished, stepIndex} = this.props;
        const contentStyle = {margin: '0 16px'};

        return (
            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Select task type</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Select days</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Select times</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ? (
                        <p>
                            <a
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.props.dispatch(createTaskServiceShared.createTaskStep(0));
                                    //this.setState({stepIndex: 0, finished: false});
                                }}
                            >
                                Click here
                            </a> to reset the example.
                        </p>
                    ) : (
                        <div>
                            <p>{this.getStepTitle(stepIndex)}</p>
                            <div>{this.getStepContent(stepIndex)}</div>
                            <div style={{marginTop: 12}}>
                                <FlatButton
                                    label="Back"
                                    disabled={stepIndex === 0}
                                    onTouchTap={this.handlePrev}
                                    style={{marginRight: 12}}
                                />
                                <RaisedButton
                                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                                    primary={true}
                                    onTouchTap={this.handleNext}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stepIndex: state.createTaskReducer.stepIndex,
        finished: state.createTaskReducer.finished
    }
}

export default connect(mapStateToProps)(AddTask);
