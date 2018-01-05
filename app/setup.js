'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../app/store'; //import the store
import Main from '../app/index' //Import the component file

function setup() {
  class Root extends Component {
    render () {
      return (
        <Provider store={store}>
          <Main />
        </Provider>
      );
    }
  }
  return Root;
}

module.exports = setup;
