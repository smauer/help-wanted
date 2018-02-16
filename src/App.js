import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import IssueList from './issue-list.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A simple board for usergroups to connect with volunteers</h1>

        <IssueList />
      </div>
    );
  }
}

export default App;
