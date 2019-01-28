import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class BudgetSettings extends Component {
  render() {
    return (
      <React.Fragment>
      	<Header />
            
        <div>
          How many money do we have?
        </div>
      </React.Fragment>
    );
  }
}