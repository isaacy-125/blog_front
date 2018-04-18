import React, { Component } from 'react';
import { Route, 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import './RouterContent.less';
import Home from '../Home/Home';
import Docs from '../Docs/Docs';
import homeImg from '../../assets/images/home.jpg';

export default class RouterContent extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <div
        style={{
          backgroundImage: `url(${homeImg})`,
          height: 'calc(100vh - 50px)',
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/docs' component={Docs} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}