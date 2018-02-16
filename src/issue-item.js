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
            <li className="custom-list"><a href={ this.props.issue.html_url }>{ this.props.issue.title }</a>  | <span onClick={ this.ToggleDetails.bind(this) }>details</span> | { this.props.issue.user.login }
                { this.state.toggle ? <p>{ this.props.issue.body }</p> : null }
            </li>
        )
    }
}