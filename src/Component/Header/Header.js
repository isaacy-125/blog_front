import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import * as actions from '../../Actions/indexAction';
import './Header.less';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Button
          type="primary"
          onClick={() => {
            this.props.indexActionNotLogin();
          }}
        >
          登出
        </Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(state => ({
  indexReducer: state.indexReducer,
}), mapDispatchToProps)(Header);