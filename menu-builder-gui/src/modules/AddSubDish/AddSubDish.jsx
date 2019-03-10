import React, { Component } from 'react';

import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import Message from '../../components/Message';
import Button from '../../components/Button';
import List from '../../components/List/List';

import { DishesBlock, InputForDishes, AddBlock } from '../AddDish/styled';

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
    const { dishes } = this.state;

    return (
      <React.Fragment>
      	<Header />

        <PageContainer>
          <DishesBlock>
            <List data={dishes} removeDish={this.removeDish} />
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