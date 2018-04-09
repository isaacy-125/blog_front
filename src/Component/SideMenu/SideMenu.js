import React, { Component } from 'react';
import './SideMenu.less';

export default class SideMenu extends Component {
  render() {
    return (
      <div
        className="SideMenu"
        style={{
          height: parseInt(document.body.offsetHeight, 10) - 50,
        }}
      />
    )
  }
}