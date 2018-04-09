import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './assets/styles/main.less';
import Header from './Component/Header/Header.js';
import SideMenu from './Component/SideMenu/SideMenu';
import RouterContent from './Component/RouterContent/RouterContent.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Content">
          <SideMenu />
          <RouterContent />
        </div>
      </div>
    )
  }
}