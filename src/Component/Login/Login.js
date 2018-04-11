import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/indexAction';
import axios from '../../util/axios';
import './Login.less';

const FormItem = Form.Item;

class Login extends Component {
  handleLogin(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post('/users/login', values).then((data) => {
          if (data.data.result === true) {
            this.props.indexActionLogin();
          }
        }).catch((err) => {
          message.error('登录失败');
          console.log(err);
        });
      } else {
        message.error(err);
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Login">
        <h2>Login</h2>
        <Form onSubmit={this.handleLogin.bind(this)}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{
                required: true,
                message: '用户名是必须的',
              }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={'用户名'}
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{
                required: true,
                message: '密码是必须的',
              }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder={'密码'}
              />
            )}
          </FormItem>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form>
        <div className="sign">
          <a href='#' >注册</a>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default Form.create()(connect(state => ({
  indexReducer: state.indexReducer,
}), mapDispatchToProps)(Login));