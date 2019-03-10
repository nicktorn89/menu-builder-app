import React, { Component } from 'react';
import { ListContainer, DishItem, DishDate, DishName, DishRemove } from './styled';

export default class List extends Component {
  render() {
    const showDishes = this.props.data && this.props.data.map((key, index) => (
      <DishItem key={key._id ? key._id : index}>
        <DishName>№{index+1} {key.name}</DishName>
        <DishRemove onClick={this.props.removeDish} id={index}>X</DishRemove>
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

    return(
      <ListContainer>
        {showDishes}
      </ListContainer>
    );
  }
};