import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Popover } from 'antd';
import { getIn } from 'immutable';
import axios from '../../util/axios';
import * as actions from '../../Actions/indexAction';
import './Header.less';

class Header extends Component {
  componentWillMount() {
    const id = this.props.indexReducer.getIn(['user', 'id']);
    axios.get(`/users/getUser?id=${id}`).then((data) => {
      this.props.indexActionSetUserName(data.data.message.username);
    }).catch((err) => {
      console.log(err);
    });
  }
  render() {
    const content = (
      <div>
        <Button
          type="primary"
          onClick={() => {
            this.props.indexActionNotLogin();
          }}
        >
          登出
        </Button>
      </div>
    );
    return (
      <div className="header">
        <h1>BLOG</h1>
        <Popover trigger="click" content={content} title={`Hi! ${this.props.indexReducer.getIn(['user', 'username'])}`}>
          <div className="header-user">
            <p>{this.props.indexReducer.getIn(['user', 'username']).substring(0, 1).toUpperCase()}</p>
          </div>
        </Popover>
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