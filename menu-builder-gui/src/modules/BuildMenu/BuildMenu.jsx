import React, { Component } from 'react';

import Header from '../../components/Header';
import Day from '../../components/Day/Day';

import mainData from '../../data/main.json';
import subData from '../../data/sub.json';

import { getMainDishes, getSubDishes } from './fetch';

import { BuildMenuContainer, BuildMenuButton } from './styles';

export default class BuildMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      daysArray: ['Понедельник', 'Вторник', 
    'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      mainDishes: [],
      subDishes: [],
      allDishes: mainData,
      allSubDishes: subData,
    }

    this.shuffleArray = this.shuffleArray.bind(this);
    this.changeAllDishes = this.changeAllDishes.bind(this);
    this.changeOneDish = this.changeOneDish.bind(this);
  }

  shuffleArray(array) {
    return array.sort(function () {
      return 0.5 - Math.random();
    });
  }

  changeAllDishes() { // For setting new menu from scratch
    const { allDishes, allSubDishes } = this.state;

    let newMainDishes, newSubDishes;

    newMainDishes = this.shuffleArray(allDishes).slice(0, 7);
    newSubDishes = this.shuffleArray(allSubDishes).slice(0, 7);

    this.setState({
      mainDishes: newMainDishes,
      subDishes: newSubDishes,
    });
  }

  changeOneDish(event) {
    const { target } = event;
    const { allDishes, allSubDishes } = this.state;

    if (target.tagName === 'svg') {
      const { classList } = target.parentNode;
      const classIndex = classList[0][classList[0].length-1]; // Getting index of dish to refresh

      const setNewDishes = (array, data, stateName) => {
        let newDishes = array.slice();
        const shuffledDishes = this.shuffleArray(data);
        newDishes[classIndex] = shuffledDishes[0];
        this.setState({
          [stateName]: newDishes,
        });
      };

      // All svg targets have html class with 'main' or 'sub'
      if( classList[0].search(/main-/i) >= 0) {
        setNewDishes(this.state.mainDishes, allDishes, 'mainDishes');
      } else {
        setNewDishes(this.state.subDishes, allSubDishes, 'subDishes');
      }
    }
  }

  componentDidMount() {
    getMainDishes()
      .then((data) => {
        this.setState({
          allDishes: data.dishes,
        });
      })
      .then(() => {
        this.changeAllDishes();
      });

    getSubDishes()
      .then((data) => {
        this.setState({
          allSubDishes: data.dishes,
        });
      })
      .then(() => {
        this.changeAllDishes();
      });
  }

  render() {
    const { daysArray, mainDishes, subDishes } = this.state;

    const showDays = daysArray.map((key, index) => (
      <Day key={index}
      dayHeading={key}
      mainDish={mainDishes[index] && mainDishes[index].name}
      subDish={subDishes[index] && subDishes[index].name}
      onClick={this.changeOneDish}
      index={index}
      haveSub={index % 2 !== 0} // If have sub then day will show sub dish
      />
    ));

    return (
      <React.Fragment>
      	<Header />

        <BuildMenuContainer>
          {showDays}
          <BuildMenuButton onClick={this.changeAllDishes.bind(this)} text="Построить меню"/>
        </BuildMenuContainer>
      </React.Fragment>
    );
  }
};
