import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Circle } from 'react-preloaders';

const Home = lazy(() => import('./modules/Home/Home.jsx'));
const Stats = lazy(() => import('./modules/Stats.jsx'));
const BuildMenu = lazy(() => import('./modules/BuildMenu/BuildMenu.jsx'));
const AddDish = lazy(() => import('./modules/AddDish/AddDish.jsx'));
const AddSubDish = lazy(() => import('./modules/AddSubDish/AddSubDish.jsx'));
const FoodStore = lazy(() => import('./modules/FoodStore/FoodStore.jsx'));
const BudgetSettings = lazy(() => import('./modules/BudgetSettings.jsx'));

class Routes extends Component {
  render() {
    return(
      <Router>
        <Suspense fallback={<Circle />}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/build-menu" component={BuildMenu} />
            <Route path="/add-dish" component={AddDish} />
            <Route path="/add-sub-dish" component={AddSubDish} />
            <Route path="/food-store" component={FoodStore} />
            <Route path="/budget-settings" component={BudgetSettings} />
            <Route path="/stats" component={Stats} />
          </div>
        </Suspense>
      </Router>
    );
  }
}

export default Routes;