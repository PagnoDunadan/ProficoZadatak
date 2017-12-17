import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Errors from './components/Errors'
import Inventory from './components/Inventory'

class App extends Component {
  render() {
    return (
      <div id="appWrapper">
        
        <Errors />

        <div id="left" className="column">
          <div className="top-left">
            <img src={logo} alt="logo" id="logo" />
            <span id="title">ReactApp</span>
          </div>
          <div id="navigation" className="bottom-left bottom">
            <a href="/">Home</a>
            <a href="/" className="selected">Inventory</a>
            <a href="/">News</a>
            <a href="/">Contact</a>
            <a href="/">About</a>
          </div>
        </div>
        <div id="right" className="column">
          <div className="top-right">
            {/* top-right container */}
          </div>
          <div className="bottom-right bottom">
            
            <Inventory />
            
          </div>
        </div>
      </div>
    )
  }
}

export default App
