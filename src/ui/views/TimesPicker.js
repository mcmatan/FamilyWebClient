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

    onChange = (value) => {
      debugger;
    };

    render() {
        const times = this.state.times.map(() => {
            return <TimePicker
                hintText="Enter time"
                onChange={this.onChange}
            />
        });

        return <div style={this.props.style}>
            {times}
            <RaisedButton label="Add time +" primary={true} style={style} onClick={this.onAddTimePress.bind(this)}/>
        </div>
    }
}

export default TimesPicker;
