import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import PageContainer from '../components/PageContainer';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      	<Header />

        <PageContainer>
          <AboutHeading>
            About Menu-builder-app
          </AboutHeading>

          <AboutParagraph>
            This program should help you with solve problems with menu!
          </AboutParagraph>
        </PageContainer>
      </React.Fragment>
    );
  }
};

const AboutHeading = styled.h2`
  font-size: 2.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const AboutParagraph = styled.p`
  width: 90%;
  margin: 0 auto;
  font-size: 1.3rem;
  color: red;
`;