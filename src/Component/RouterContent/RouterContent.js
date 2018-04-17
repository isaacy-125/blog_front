import React, { Component } from 'react';
import { Route, 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import './RouterContent.less';
import Home from '../Home/Home';
import Docs from '../Docs/Docs';

export default class RouterContent extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/docs' component={Docs} />
        </Switch>
    )
  }
}