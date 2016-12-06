import React, {Component} from 'react';
import DayPicker from '../views/DayPicker';
import TimePicker from '../views/TimePicker';

class AddTask extends Component {
    render() {
        return (
            <div>
                <div style={{width: 300}}>
                    <DayPicker />
                </div>
                <div style={{width: 300}} >
                    <TimePicker />
                </div>
            </div>
        )
    }
}

export default AddTask;