import React, { Component } from 'react';

import Header from '../components/Header';
import PageContainer from '../components/PageContainer';

export default class BudgetSettings extends Component {
  render() {
    return (
      <React.Fragment>
      	<Header />

        <PageContainer>
          <div>
            How many money do we have?
          </div>
        </PageContainer>
      </React.Fragment>
    );
  }
}