import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import Tick from './Tick';
import '../assets/scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="time"></div>
        </header>
      </div>
    );
  }
}

export default App;
