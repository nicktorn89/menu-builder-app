import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import Button from '../components/Button';
import Day from '../components/Day';

import mainData from '../data/main.json';
import subData from '../data/sub.json';

import images from '../images/images';

export default class BuildMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      daysArray: ['Monday', 'Tuesday', 
    'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      mainDishes: mainData,
      subDishes: subData,
    }

    this.shuffleArray = this.shuffleArray.bind(this);
    this.changeAllDishes = this.changeAllDishes.bind(this);
  }

  shuffleArray(array) {
    return array.sort(function () {
      return 0.5 - Math.random();
    });
  }

  changeAllDishes() {
    let newMainDishes = this.state.mainDishes.slice();
    let newSubDishes = this.state.subDishes.slice();

    newMainDishes = this.shuffleArray(newMainDishes);
    newSubDishes = this.shuffleArray(newSubDishes);

    this.setState({
      mainDishes: newMainDishes,
      subDishes: newSubDishes,
    });
  }

  handleBuildMenu() {
    this.changeAllDishes();
  }

  componentDidMount() {
    this.changeAllDishes();
  }

  render() {
    const { daysArray, mainDishes, subDishes } = this.state;

    const showDays = daysArray.map((key, index) => (
      <Day key={index} 
      dayHeading={key}
      mainDish={mainDishes[index]}
      subDish={subDishes[index]}/>
    ));

    return (
      <React.Fragment>
      	<Header />

        <BuildMenuContainer>
          {showDays}
          <BuildMenuButton onClick={this.handleBuildMenu.bind(this)} text="Build menu"/>
        </BuildMenuContainer>
      </React.Fragment>
    );
  }
}

const BuildMenuContainer = styled(PageContainer)`
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
`;