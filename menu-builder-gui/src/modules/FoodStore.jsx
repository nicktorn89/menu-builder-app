import React, { Component } from 'react';

import Header from '../components/Header';
import PageContainer from '../components/PageContainer';

export default class FoodStore extends Component {
  render() {
    return (
      <React.Fragment>
      	<Header />

        <PageContainer>
          <div>
            How many products we have?
          </div>
        </PageContainer>
      </React.Fragment>
    );
  }
}