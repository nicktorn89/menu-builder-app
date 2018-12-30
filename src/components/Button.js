import React, { Component } from 'react';

import '../index.css';

export default class Button extends Component {
    render() {
        return(
            <div 
            className="button"
            onClick={this.props.onClick}
            >
                <span className="button__span">Создать меню</span>
            </div>
        );
    }
}