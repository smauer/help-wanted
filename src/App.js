import React, { Component } from 'react';
import './App.css';

import IssueList from './issue-list.js';

class App extends Component {
  render() {
    return (
      <div className="App container text-left">
        {/* <h1 className="nav justify-content-center custom-nav">Techlahoma Help Wanted</h1> */}
        <div className="Help-header">
          <div className="Help-logo">
            <img
              className="img-fluid mx-auto my-5 w-50 logo"
              src="./help-wanted.png"
              alt="Techlahoma Help Wanted Logo"
            />
          </div>
          <div className="Help-link">
            <a href="https://github.com/techlahoma/help-wanted/issues/new" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Create New Issue</a>
          </div>
        </div>
        <div className="row">
          <IssueList />
        </div>
      </div>
    );
  }
}

export default App;
