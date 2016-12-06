import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';


const style = {
    margin: 12,
};


class TimesPicker extends Component {

    state = {
        times: []
    };


    onAddTimePress() {
        this.setState(
            {times: [...this.state.times, 1]}
        )
    }

    render() {
        const format = 'HH:mm';

        const times = this.state.times.map( (time) => {
            return <TimePicker
                hintText="Enter time"
            />
        });

        return <div style={this.props.style}>
            {times}
            <RaisedButton label="Add time +" primary={true} style={style} onClick={this.onAddTimePress.bind(this)}/>
        </div>
    }
}

export default TimesPicker;
