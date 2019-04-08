import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CakeConstructor from './containers/CakeConstructor/CakeConstructor';
import CakeCustomizerForm from './containers/CakeCustomizerForm/CakeCustomizerForm';
import CakesContainer from './containers/CakesContainer/CakesContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/pastry-particulars" component={CakeCustomizerForm} />
          <Route exact path="/" component={CakeConstructor} />
          <Route exact path="/cakes" component={CakesContainer} />
        </Switch>
      </div>
    )
  }
}

export default App;