import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/indexAction';
import axios from '../../util/axios';
import './Login.less';

const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'login',
    }
  }
  // 注册事件
  handleRegister(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const params = {
          username: values.username2,
          password: values.password2,
        }
        axios.post('/users/register', params).then((data) => {
          message.success('创建成功');
          this.setState({
            status: 'login',
          });
        }).catch((err) => {
          message.error(err.response.data.message);
        });
      } else {
        message.error(err);
      }
    })
  }
  // 登录事件
  handleLogin(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post('/users/login', values).then((data) => {
          if (data.data.result === true) {
            this.props.indexActionSetUserId(data.data.id);
            this.props.indexActionLogin();
          }
        }).catch((err) => {
          console.log(err);
          message.error(err.response.data.message);
        });
      } else {
        message.error(err);
      }
    })
  }
  // 注册页面 密码验证
  checkPassword(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password2')) {
      callback('两次输入不一致');
    } else {
      callback();
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Login">
        {this.state.status === 'login' ? 
        <div>
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
            <a
              href='#'
              onClick={() => {
                this.setState({
                  status: 'register',
                })
              }}              
            >注册</a>
          </div>
        </div> : 
        <div>
          <h2>Register</h2>
          <Form onSubmit={this.handleRegister.bind(this)}>
            <FormItem>
              {getFieldDecorator('username2', {
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
              {getFieldDecorator('password2', {
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
            <FormItem>
              {getFieldDecorator('checkpassword', {
                rules: [{
                  required: true,
                  message: '确认密码是必须的',
                }, {
                  validator: this.checkPassword.bind(this),
                }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder={'再次输入密码'}
                />
              )}
            </FormItem>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form>
          <div className="sign">
            <a
              href='#'
              onClick={() => {
                this.setState({
                  status: 'login',
                })
              }}              
            >登录</a>
          </div>
        </div>}
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