import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './modules/Home/Home.jsx';
import Stats from './modules/Stats.jsx';
import BuildMenu from './modules/BuildMenu/BuildMenu.jsx';
import AddDish from './modules/AddDish/AddDish.jsx';
import AddSubDish from './modules/AddSubDish/AddSubDish.jsx';
import FoodStore from './modules/FoodStore/FoodStore.jsx';
import BudgetSettings from './modules/BudgetSettings.jsx';

class Routes extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/build-menu" component={BuildMenu} />
          <Route path="/add-dish" component={AddDish} />
          <Route path="/add-sub-dish" component={AddSubDish} />
          <Route path="/food-store" component={FoodStore} />
          <Route path="/budget-settings" component={BudgetSettings} />
          <Route path="/stats" component={Stats} />
        </div>
      </Router>
    );
  }
}

export default Routes;