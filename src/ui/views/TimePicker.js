import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};


class TimePicker extends Component {
    render() {
        return <div style={this.props.style}>
            <RaisedButton label="Add time +" primary={true} style={style}/>
        </div>
    }
}

export default TimePicker;
