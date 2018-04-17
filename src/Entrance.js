import React, { Component } from 'react';
import { Route, 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import App from './App';
import Home from './Component/Home/Home';

export default class Entrance extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    )
  }
}