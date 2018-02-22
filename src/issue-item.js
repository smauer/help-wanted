import React, { Component } from 'react';

export default class IssueItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }

    ToggleDetails() {
        this.setState(function(previousState) {
            return { toggle: !previousState.toggle }
        });
    }

    render() {
        if(!this.props.issue) {
            return null;
        }
        return (
            <li className="list-group-item custom-list">
                <span className="col-md-4"><a href={ this.props.issue.html_url }>{ this.props.issue.title }</a></span>
                <span className="col-md-4" onClick={ this.ToggleDetails.bind(this) }><button className="btn btn-info">Show details</button></span>
                <span className="col-md-4">{ this.props.issue.user.login }</span>
                { this.state.toggle ? <p>{ this.props.issue.body }</p> : null }
            </li>
        )
    }
}