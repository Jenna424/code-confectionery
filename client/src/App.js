import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/shared/Navbar/Navbar';
import PastryPlanningPointers from './components/PastryPlanningPointers/PastryPlanningPointers';
import CakeConstructor from './containers/CakeConstructor/CakeConstructor';
import CakeCustomizerForm from './containers/CakeCustomizerForm/CakeCustomizerForm';
import CakesMenu from './containers/CakesMenu/CakesMenu';
import FlavorForm from './containers/FlavorForm/FlavorForm';
import SearchDessertsForm from './containers/SearchDessertsForm/SearchDessertsForm';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/pastry-particulars" component={CakeCustomizerForm} />
          <Route exact path="/pastry-planning-pointers" component={PastryPlanningPointers} />
          <Route exact path="/" component={CakeConstructor} />
          <Route exact path="/cakes" component={CakesMenu} />
          <Route exact path="/layers/new" component={FlavorForm} />
          <Route path="/search" component={SearchDessertsForm} />
        </Switch>
      </div>
    )
  }
}

export default App;