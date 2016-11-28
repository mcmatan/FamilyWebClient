import React, {Component} from "react";
import "../../App.css";
import {Link} from "react-router";
import {connect} from "react-redux";


class App extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        {this.props.loggedIn ? (
                            <Link to="/logout">Log out</Link>
                        ) : (
                            <Link to="/login">Sign in</Link>
                        )}
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
                </ul>
                {this.props.children || <p>You are {!this.props.loggedIn && 'not'} logged in.</p>}
            </div>
        )
    }
}
;

function mapStateToProps(state) {
    return {loggedIn: state.authReducer.isLoggedIn};
}

export default connect(mapStateToProps)(App)

