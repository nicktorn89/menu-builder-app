import React, { Component } from 'react';
import Refresh from './Refresh';

import './index.css';

export default class Day extends Component {
    render() {
        return(
            <div className="day">
                <h2 className="day__heading">
                    {this.props.dayHeading}
                </h2>

                <div className="day__main-container">
                    <span className="day__main-dish-span">{this.props.mainDish}</span>
                    <Refresh onClick={this.props.onClick}/>
                </div>

                <div className="day__sub-container">
                    <span className="day__sub-dish-span">{this.props.subDish}</span>
                    <Refresh onClick={this.props.onClick}/>
                </div>
            </div>
        );
    }
}