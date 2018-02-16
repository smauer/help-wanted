import React, { Component } from 'react';

export default class IssueItem extends Component {
    render() {
        if(!this.props.issue) {
            return null;
        }
        return (
            <li><a href={ this.props.issue.html_url }>{ this.props.issue.title }</a> | { this.props.issue.user.login }</li>
        )
    }
}