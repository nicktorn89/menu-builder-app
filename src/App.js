import React, { Component } from 'react';
import Day from './Day';

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
    this.initDishes = this.initDishes.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  initDishes( main, sub ) {
    this.setState({
      mainDishes: main,
      subDishes: sub,
    });
  }

  componentDidMount() {
    this.initDishes( mainData, subData );
  }

  handleClick(event) {
    console.log(event);
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
        {console.log(this.state)}
      </div>
    );
  }
}

export default App;