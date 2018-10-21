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
                <div className="col pl-0">
                    <p id={ "issue-title-" + this.props.issue.id }className="h4 pl-0 pt-2 d-block text-left">{ this.props.issue.title }</p>                    
                    <small className="text-muted">OPENED BY:</small>
                    <a id={ "issue-user-link-" + this.props.issue.id } target="_blank" className="btn btn-link pl-2 py-0" href={this.props.issue.user.html_url }>{ this.props.issue.user.login }</a>
                </div>                
                <div className="col text-right">
                    { this.props.issue.body_html.length ? (
                        <button className="btn btn-secondary mr-3" onClick={ this.ToggleDetails.bind(this) }>
                            { this.state.toggle ? 'Close details' : 'Show details' }
                        </button>
                        ) : ( null )
                    }                    
                    <a id={ "issue-link-" + this.props.issue.id } target="_blank" className="btn btn-primary" href={ this.props.issue.html_url }>View on Github</a>
                </div>
                { this.state.toggle ? <div id={"issue-body-" + this.props.issue.id } className="p-2 pt-4 border-top border-light w-100 d-block"><p dangerouslySetInnerHTML={ { __html: this.props.issue.body_html } }></p></div> : null }
            </li>
        )
    }
}