import React, {Component} from 'react';
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

class NavigationBar extends Component {

    render() {
        const styles = {
            title: {
                cursor: 'pointer',
            },
        };
        return (
            <AppBar
                showMenuIconButton={false}
                title={<span style={styles.title}>Memoria</span>}
                onTitleTouchTap={this.props.onTitleTouchTap}
                iconElementRight={ ( this.props.iconElementRight && (<FlatButton label={this.props.iconElementRight} onClick={this.props.onClick}/>)) }
            />
        )
    }
}

export default NavigationBar;

