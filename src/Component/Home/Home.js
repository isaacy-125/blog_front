import React, { Component } from 'react';
import { Button } from 'antd';
import homeImg from '../../assets/images/home.jpg';
import './Home.less';

export default class Home extends Component {
  render() {
    return (
      <div
        className="HomeContainer"
        style={{
          backgroundImage: `url(${homeImg})`,
          height: 'calc(100vh - 50px)',
        }}
      />
    )
  }
}