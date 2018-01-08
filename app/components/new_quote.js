'use strict'

import React, {Component} from 'react';
var {StyleSheet, View, PixelRatio, Platform, Dimensions, Text, LayoutAnimation, Keyboard, TextInput, TouchableOpacity} = require('react-native');

import {connect} from 'react-redux';
import {addQuote, updateQuote} from '../actions'
import { Actions } from 'react-native-router-flux';

var TEXT_SIZE = (PixelRatio.get() <= 2) ? 17 : 19;
var NAVBAR_HEIGHT = (Platform.OS === 'ios') ? 64 : 54;

var {width: windowWidth, height: windowHeight} = Dimensions.get('window');
var HEIGHT = windowHeight - NAVBAR_HEIGHT;

class NewQuote extends Component {

  constructor(props) {
    super(props);

    this.state = {
      author: (props.edit) ? props.quote.author : '',
      quote: (props.edit) ? props.quote.quote : ''
    };
  }

  componentWillMount() {
    Keyboard.addListener('keyboardWillShow', (e) => this._keyboardWillShow(e));
    Keyboard.addListener('keyboardWillHide', (e) => this._keyboardWillHide(e));
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardWillShow', (e) => )
  }
}
