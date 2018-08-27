import React, { Component, Fragment } from 'react';
import FetchData from './FetchData.js';
import IssueItem from './issue-item.js';

export default class IssueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  GetApiData() {
    FetchData().then(response => {
      let newRez = response.filter(data => data.assignee == null);
      const data = newRez.reduce(
        (acc, issue) => {
          const label =
            issue.labels.length > 0 ? issue.labels[0].name : 'Unlabeled';

          if (!acc.hasOwnProperty(label)) {
            acc[label] = [];
          }

          acc[label].push(issue);
          return acc;
        },
        { Unlabeled: [] }
      );
      this.setState({
        data
      });
    });
  }

  renderIssuesList = () => {
    const { data } = this.state;

    const labels = Object.keys(data);

    return labels.map(label => {
      if (data[label].length <= 0) {
        return null;
      }

      const labelURL =
        label === 'Unlabeled'
          ? 'https://github.com/techlahoma/help-wanted/issues?q=is%3Aopen+is%3Aissue+no%3Alabel'
          : `https://github.com/techlahoma/help-wanted/labels/${label}`;

      return (
        <Fragment key={label}>
          <ul className="list-group mb-4">
            <li className="list-group-item list-group-item-info">
              <span className="h5 mt-3">
                <a href={labelURL} target="_blank">
                  {label}
                </a>
              </span>
            </li>
            {data[label].map(issue => (
              <IssueItem issue={issue} key={issue.id} />
            ))}
          </ul>
        </Fragment>
      );
    });
  };

  componentWillMount() {
    this.GetApiData();
  }

  render() {
    return (
      <div className="col-md-12">
        {Object.keys(this.state.data).filter(label => label !== 'Unlabeled')
          .length > 0
          ? this.renderIssuesList()
          : 'Looks like we are good for right now, but please check back soon!'}
      </div>
    );
  }
}
