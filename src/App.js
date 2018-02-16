import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import IssueItem from './issue-item.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A simple board for usergroups to connect with volunteers</h1>

        <IssueItem />
      </div>
    );
  }
}

export default App;
