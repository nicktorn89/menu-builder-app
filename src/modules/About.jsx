import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      	<Header />
            
        <div>
          Hello!
        </div>
      </React.Fragment>
    );
  }
}