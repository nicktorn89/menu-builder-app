import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import Message from '../../components/Message';
import Button from '../../components/Button';

export default class AddDish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
      dishName: '',
      connect: false,
      showMessage: false,
    };

    this.addDish = this.addDish.bind(this);
    this.removeDish = this.removeDish.bind(this);
    this.handleDishName = this.handleDishName.bind(this);
    this.getDishes = this.getDishes.bind(this);
  }
  componentDidMount() {
    this.getDishes();
  }

  getDishes() {
    fetch('/dishes', {
		  method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((responseDishes) => {
        this.setState({
          dishes: responseDishes.dishes,
          connect: true,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          connect: false,
          showMessage: true,
        });
      });
  }

  handleDishName(e) {
    this.setState({
      dishName: e.target.value,
    });
  }

  addDish() {
    const { dishName } = this.state;

    if (dishName.length > 0) {
      fetch('/dishes/addDish', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: dishName,
        }),
      })
        .then((data) => {
          this.getDishes();
          this.setState({
            dishName: '',
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  
  removeDish(e) {
    const position = e.target.id;
    const dishId = this.state.dishes[position]._id;
    
    fetch('/dishes/removeDish', {
      method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: dishId,
        }),
    })
      .then(() => {
        this.getDishes();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const showDishes = this.state.dishes.map((key, index) => (
      <DishItem key={index}>
        <DishName>{key.name}</DishName>
        <DishRemove onClick={this.removeDish} id={index}>X</DishRemove>
        <DishDate>Дата создания - {(() => {
          const date = new Date(key.date);
          let month;

          if (date.getMonth() < 10) {
            month = `0${date.getMonth()}`;
          } else {
            month = date.getMonth();
          }

          return `${date.getDate()}.${month}.${date.getFullYear()}`;
        })() }</DishDate>
      </DishItem>
    ));

    return (
      <React.Fragment>
      	<Header />

        <PageContainer>
          <DishesBlock>
            {showDishes}
          </DishesBlock>

          <InputForDishes onChange={this.handleDishName}></InputForDishes>
          <Button onClick={this.addDish}>Добавить блюдо</Button>

          {
            this.state.showMessage && <Message onClick={() => {
              this.setState({ showMessage: false });
            }}>Соединение потеряно</Message>
          }
        </PageContainer>
      </React.Fragment>
    );
  }
};

const DishesBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const DishItem = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
`;

const DishName = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;

const DishRemove = styled.span`
  font-size: 1.3rem;
  
  &:hover {
    cursor: pointer;
  }
`;

const DishDate = styled.span`
  font-size: 1.2rem;
`;

const InputForDishes = styled.input`
  width: 30%;
`;