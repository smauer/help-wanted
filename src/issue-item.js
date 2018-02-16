import React, { Component } from 'react';
import FetchData from './FetchData.js';
import logo from './logo.svg';

export default class IssueItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    GetApiData() {
        FetchData().then((response) => {
            this.setState({
                'data': response
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
                    { this.state.data.map( issue => <li key={ issue.id }>{ issue.title }</li> )}
                </ul>
            </div>
        )
    }
}