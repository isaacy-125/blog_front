import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './Store';

render(
   <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('app')
);