import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import {createTaskServiceShared} from '../../core/Services/CreateTaskService';
import {connect} from "react-redux";

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

    onChange = (index, unusedValue, date) => {
        this.props.dispatch(createTaskServiceShared.dateChangedAIndex(date, index));
    };

    render() {
        const times = this.state.times.map((value, index) => {
            return <TimePicker
                hintText="Enter time"
                onChange={this.onChange.bind(this, index)}
                key={index}
            />
        });

        return <div style={this.props.style}>
            {times}
            <RaisedButton label="Add time +" primary={true} style={style} onClick={this.onAddTimePress.bind(this)}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(TimesPicker);
