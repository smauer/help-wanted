import React, { Component } from 'react';
import FetchData from './FetchData.js';
import IssueItem from './issue-item.js';
import logo from './logo.svg';

export default class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    GetApiData() {
        FetchData().then((response) => {
            let newRez = response.filter(data => data.assignee == null);
            this.setState({
                'data': newRez
            });
        });
    }

    componentWillMount() {
        this.GetApiData();
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <ul>
                    { this.state.data.map( issue => <IssueItem issue={ issue } key={ issue.id } />  )}
                </ul>
            </div>
        )
    }
}