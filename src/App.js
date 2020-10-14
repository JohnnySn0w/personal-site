import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MainAttraction from './components/Card';
import { Gallery } from './components/Gallery';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/" children={<MainAttraction />} />
            <Route path="/gallery" children={<Gallery />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
