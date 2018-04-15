import React, { Component } from 'react';
import { Route, 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import './RouterContent.less';
import Home from '../Home/Home';

export default class RouterContent extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    )
  }
}