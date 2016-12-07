import React, {Component} from 'react';
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import ImageMemoriaIcon from "../../../public/MemoriaLogo.png";

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
                title={<img src={ImageMemoriaIcon} style={{width: 165.9375, height: 60}} />}
                onTitleTouchTap={this.props.onTitleTouchTap}
                iconElementRight={ ( this.props.iconElementRight && (<FlatButton label={this.props.iconElementRight} onClick={this.props.onClick}/>)) }
            />
        )
        // return (
        //     <AppBar
        //         showMenuIconButton={false}
        //         title={<span style={styles.title}>Memoria</span>}
        //         onTitleTouchTap={this.props.onTitleTouchTap}
        //         iconElementRight={ ( this.props.iconElementRight && (<FlatButton label={this.props.iconElementRight} onClick={this.props.onClick}/>)) }
        //     />
        // )
    }
}

export default NavigationBar;

