import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={CakeConstructor} />
        </Switch>
      </div>
    )
  }
}

export default App;