import React, { Component } from 'react';
import { Menu, Icon, message } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../../Actions/indexAction';
import axios from '../../util/axios';
import './SideMenu.less';

const SubMenu = Menu.SubMenu;

class SideMenu extends Component {
  componentWillMount() {
    axios.get('/menus/getMenus').then((data) => {
      this.props.indexActionSetMenus(data.data.message);
    }).catch((err) => {
      message.error(err);
      console.log(err);
    });
  }
  // 渲染子菜单
  renderMenuItem() {
    const data = this.props.indexReducer.get('menus');
    const renders = [];
    data.map(x => {
      renders.push(
        <Menu.Item key={x.redirect}>
          <Icon type={x.icon} />
          <span>{x.name}</span>
        </Menu.Item>
      )      
    })
    return renders;
  }
  handleClick(e) {
    console.log(e.key);
  }
  render() {
    return (
      <div
        className="SideMenu"
        style={{
          height: parseInt(document.body.offsetHeight, 10) - 50,
        }}
      >
        <Menu
          style={{ height: '100%' }} mode="inline" theme="dark"
          onClick={this.handleClick.bind(this)}
        >
          {
            this.props.indexReducer.get('menus').size > 0 ? this.renderMenuItem() : ''
          }
        </Menu>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

// 这里跳转路由 没有withRouter包住 因为该组件和RouterContent为兄弟组件
// 没在Routern内部
export default connect(state => ({
  indexReducer: state.indexReducer,
}), mapDispatchToProps)(SideMenu);