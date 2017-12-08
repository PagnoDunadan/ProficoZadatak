import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="left" className="column">
            <div className="top-left">
              <img src={logo} alt="logo" id="logo" />
              <span id="title">ReactApp</span>
            </div>
            <div id="navigation" className="bottom-left bottom">
              <a href="/">Home</a>
              <a href="#">News</a>
              <a href="#">Contact</a>
              <a href="#">About</a>
            </div>
        </div>
        <div id="right" className="column">
            <div className="top-right"></div>
            <div className="bottom-right bottom">
              {/* Search component */}
              {/* Content component */}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
