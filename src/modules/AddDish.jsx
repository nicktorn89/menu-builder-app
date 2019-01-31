import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import PageContainer from '../components/PageContainer';

export default class AddDish extends Component {
  render() {
    return (
      <React.Fragment>
      	<Header />

        <PageContainer>
          <div>
            Add your dish please!
          </div>
        </PageContainer>
      </React.Fragment>
    );
  }
};