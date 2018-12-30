import React, { Component } from 'react';

import '../index.css';

export default class Refresh extends Component {
    render() {
        return(
            <div 
            className="refresh"
            onClick={this.props.onClick}
            >
                <i className="fas fa-sync-alt refresh__icon"></i>
            </div>
        );
    }
}