import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import  * as actions from '../../Actions/homeAction';
import './Home.less';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.homeReducer}</h2>
        <Button onClick={() => {
          this.props.homeActionAdd()
        }}>add</Button>
        <Button onClick={() => {
          this.props.homeActionDelete()
        }}>delete</Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(state => ({
  homeReducer: state.homeReducer,
}), mapDispatchToProps)(Home);