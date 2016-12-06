import React, {Component} from "react";
import "../../App.css";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import NavigationBar from '../views/NavigationBar';
import {logout, startAuthListener} from "../../core/actions/AuthActions";
injectTapEventPlugin();



class App extends Component {

    componentWillMount() {
        this.props.dispatch(startAuthListener());
    }

    handleLoginPress = () => {
        const path = '/login';
        browserHistory.push(path);
    };

    handleLogoutPress = () => {
        this.props.dispatch(logout());
    };

    handleTitleTouch = () => {
        const path = '/dashboard';
        browserHistory.push(path);
    };


    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    {this.props.loggedIn ? (
                        <NavigationBar onTitleTouchTap={this.handleTitleTouch} iconElementRight="Logout" onClick={this.handleLogoutPress} />
                    ) : (
                    <NavigationBar onTitleTouchTap={this.handleTitleTouch} onClick={this.handleLoginPress} />
                    )}
                    {this.props.children || <p>You are {!this.props.loggedIn && 'not'} logged in.</p>}
                </div>
            </MuiThemeProvider>
        )
    }
}
;

function mapStateToProps(state) {
    return {loggedIn: state.authReducer.isLoggedIn};
}

export default connect(mapStateToProps)(App)

