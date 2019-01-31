import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './modules/Home.jsx';
import About from './modules/About.jsx';
import BuildMenu from './modules/BuildMenu.jsx';
import AddDish from './modules/AddDish.jsx';
import FoodStore from './modules/FoodStore.jsx';
import BudgetSettings from './modules/BudgetSettings.jsx';

class Routes extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/build-menu" component={BuildMenu} />
          <Route path="/add-dish" component={AddDish} />
          <Route path="/food-store" component={FoodStore} />
          <Route path="/budget-settings" component={BudgetSettings} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default Routes;