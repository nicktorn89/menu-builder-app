import React, { Component } from 'react';

import './index.css';

export default class Day extends Component {
    render() {
        return(
            <div className="day">
                <h2 className="day__heading">
                    {this.props.dayHeading}
                </h2>

                <div className="day__main-container">
                    <span 
                    className="day__main-dish-span"
                    onClick={this.props.onClick}
                    >{this.props.mainDish}</span>
                </div>

                <div className="day__sub-container">
                    <span className="day__sub-dish-span">{this.props.subDish}</span>
                </div>
            </div>
        );
    }
}