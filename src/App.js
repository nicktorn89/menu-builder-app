import React, { Component } from 'react';
import Day from './Day';
import Button from './components/Button';

import mainData from "./data/main.json";
import subData from "./data/sub.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daysArray: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье',],
      mainDishes: [],
      subDishes: [],
    }

    this.showDays = this.showDays.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.initDishes = this.initDishes.bind(this);
    this.changeOneDish = this.changeOneDish.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  shuffleArray (array) {
    return array.sort(function () {
      return 0.5 - Math.random();
    });
  }

  initDishes( main, sub ) { // Main function that shuffle array and change view
    this.shuffleArray(main);
    this.shuffleArray(sub);

    this.setState({
      mainDishes: main,
      subDishes: sub,
    });
  }

  changeOneDish( target ) {
    if(target.className === 'refresh') {
      console.log(target.previousSibling);
    } else {
      console.log(target.parentNode.previousSibling);
    }
  }

  componentDidMount() {
    this.initDishes( mainData, subData );
  }

  handleClick(event) {
    const eventClass = event.target.className;

    if (eventClass === 'button__span' || eventClass === 'button') {
      this.initDishes( mainData, subData);
    } else {
      // If clicked on refresh element
      if (event.target.classList[2] === 'refresh__icon' || eventClass === 'refresh') {
        this.changeOneDish(event.target);
      }
      console.log(eventClass);
      return;
    }
  }

  showDays( array, mainDishes, subDishes ) {
    return array.map( (dayName, index) => {
      return <Day 
      dayHeading={dayName}
      mainDish={mainDishes[index]}
      subDish={subDishes[index]}
      key={index}
      onClick={this.handleClick}
      />
    });
  }

  render() {
    return (
      <div className="App">
        {this.showDays(this.state.daysArray, this.state.mainDishes, this.state.subDishes)}
        <Button onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;