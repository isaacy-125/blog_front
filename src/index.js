import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Entrance from './Entrance';
import store from './Store';

render(
   <Provider store={store}>
    <Entrance />
   </Provider>,
  document.getElementById('app')
);