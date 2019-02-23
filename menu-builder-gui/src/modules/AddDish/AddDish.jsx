import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import Message from '../../components/Message';
import Button from '../../components/Button';

import { getMainDishes } from '../BuildMenu/fetch';
import { addDish, removeDish } from './fetch';

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
    getMainDishes()
      .then((data) => {
        this.setState({
          dishes: data.dishes,
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
      addDish(dishName)
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
    const dishId = this.state.dishes[position]._id; // This id is id from mongo

    const accept = global.confirm('Удалить блюдо?');

    if(accept) { // TODO: Add modal window for confirm removing dish
      removeDish(dishId)
        .then(() => {
          this.getDishes();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const showDishes = this.state.dishes.map((key, index) => (
      <DishItem key={key._id ? key._id : index}>
        <DishName>№{index+1} {key.name}</DishName>
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

          <AddBlock>
            <InputForDishes
            placeholder="Введите название блюда"
            onChange={this.handleDishName}></InputForDishes>
            <Button onClick={this.addDish}>Добавить блюдо</Button>
          </AddBlock>

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

const sandBrown = '#f2aa7a'

const DishesBlock = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
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
    color: ${sandBrown};
  }
`;

const DishDate = styled.span`
  font-size: 1.2rem;
`;

const InputForDishes = styled.input`
  width: 30%;
`;

const AddBlock = styled.div`
  display: grid;
  grid-gap: 1rem;
  width: 70%;
  margin: 1rem auto 0 auto;
  justify-items: center;
  align-items: center;
`;