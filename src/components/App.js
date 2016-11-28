import React, { Component } from 'react';
import './App.css';
import TabBarComponent from './TabBarComponent/TabBarComponent';
import LogInComponent from './logIn/LogInComponent'

class App extends Component {
  render() {
    return (
      <div>
      <LogInComponent />
      </div>
    );
  }
}

export default App;
