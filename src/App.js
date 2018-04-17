import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './Actions/indexAction';
import 'antd/dist/antd.css';
import './assets/styles/main.less';
import Header from './Component/Header/Header.js';
import SideMenu from './Component/SideMenu/SideMenu';
import RouterContent from './Component/RouterContent/RouterContent.js';
import Login from './Component/Login/Login';

class App extends Component {

  render() {
    return (
      <div>
        {
          !this.props.indexReducer.get('isAuth') ? <Login /> :
          <div>
            <Header />
            <div className="Content">
              <SideMenu />
              <RouterContent />
            </div>
          </div>
        }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(state => ({
  indexReducer: state.indexReducer,
}), mapDispatchToProps)(App);