import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';

export default class AddDish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
    };
  }
  componentDidMount() {
    fetch('/dishes', {
		  method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((responseDishes) => {
        this.setState({
          dishes: responseDishes.dishes,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const showDishes = this.state.dishes.map((key) => (
      <div key={key}>
        <span>Имя - {key.name}</span>
        <span>Дата создания - {key.date}</span>
      </div>
    ));

    return (
      <React.Fragment>
      	<Header />

        <PageContainer>
          <div>
            {showDishes}
          </div>
        </PageContainer>
      </React.Fragment>
    );
  }
};