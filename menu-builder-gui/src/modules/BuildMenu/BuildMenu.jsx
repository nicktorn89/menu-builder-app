import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import Button from '../../components/Button';
import Day from '../../components/Day';

import mainData from '../../data/main.json';
import subData from '../../data/sub.json';

import images from '../../images/images';

import { getMainDishes } from './fetch';

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

      if( classList[0].search(/main-/i) >= 0) { // All svg targets have html class with 'main' or 'sub'
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
          allDishes: data.dishes
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
      subDish={subDishes[index]}
      onClick={this.changeOneDish}
      index={index}
      haveSub={index % 2 !== 0}
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
}

// TODO: Create one file for all styles
const sandBrownTransparent = '#f2aa7a80';

const BuildMenuContainer = styled(PageContainer)`
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  align-content: flex-start;
  background: url(${images()[0]});
  background-size: cover;
`;

const BuildMenuButton = styled(Button)`
  width: 10em;
  padding: 1em 0;
  align-self: center;
  justify-self: center;
  background-color: ${sandBrownTransparent};
`;