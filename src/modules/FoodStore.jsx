import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class FoodStore extends Component {
  render() {
    return (
      <React.Fragment>
      	<Header />
            
        <div>
          How many products we have?
        </div>
      </React.Fragment>
    );
  }
}