import React, { Component } from 'react';
import { Route, 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import './RouterContent.less';
import Home from '../Home/Home';
import Docs from '../Docs/DocsIndex/Docs';
import newDocs from '../Docs/DocsNew/DocsNew';

export default class RouterContent extends Component {
  render() {
    return (
      <div
        style={{
          height: 'calc(100vh - 50px)',
          width: '100%',
          overflowX: 'hidden',
          overflowY: 'auto',
          padding: '0 2rem',
        }}
      >
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/docs' component={Docs} />
          <Route path='/newDocs' component={newDocs} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}