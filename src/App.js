import React, { Component } from 'react';
import './App.css';

import IssueList from './issue-list.js';

class App extends Component {
  render() {
    return (
      <div className="App container text-left">
        {/* <h1 className="nav justify-content-center custom-nav">Techlahoma Help Wanted</h1> */}
        <img
          className="img-fluid mx-auto my-5 w-50"
          src="./help-wanted.png"
          alt="Techlahoma Help Wanted Logo"
        />

        <div className="row">
          <IssueList />
        </div>
      </div>
    );
  }
}

export default App;
