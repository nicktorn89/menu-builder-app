import React, { Component } from 'react';

import { DishesBlock, DishItem, DishName, 
  DishRemove, DishDate, InputForDishes, AddBlock } from '../AddDish/styles.js';

import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import Message from '../../components/Message';
import Button from '../../components/Button';

import { getSubDishes } from '../BuildMenu/fetch';
import { addSubDish, removeSubDish } from './fetch';

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
    getSubDishes()
      .then((data) => {
        this.setState({
          dishes: data.dishes,
          connect: true,
        });
      })
      .catch((err) => {
        console.error(err);

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
      addSubDish(dishName)
        .then((data) => {
          this.getDishes();
          this.setState({
            dishName: '',
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  
  removeDish(e) {
    const position = e.target.id;
    const dishId = this.state.dishes[position]._id; // This id is id from mongo

    const accept = global.confirm('Удалить блюдо?');

    if(accept) { // TODO: Add modal window for confirm removing dish
      removeSubDish(dishId) 
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