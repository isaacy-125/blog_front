import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import  * as actions from '../../Actions/homeAction';
import './Home.less';

class Home extends Component {
  render() {
    return (
      <div />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(state => ({
  homeReducer: state.homeReducer,
}), mapDispatchToProps)(Home);