import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class AddDish extends Component {
  render() {
    return (
      <React.Fragment>
      	<Header />
            
        <div>
          Add your dish please!
        </div>
      </React.Fragment>
    );
  }
}