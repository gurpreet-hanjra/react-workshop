import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JSX from './JSX';

import Search from './Search';
import List from './List';

class App extends Component {

  handleSearchUpdate = (results) => {
    console.log('handleSearchUpdate', results);
    this.setState({
      results: results
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <JSX />
        <Search updateSearch={this.handleSearchUpdate} />
        <List results={this.state} />
      </div>
    );
  }
}

export default App;
