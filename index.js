// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('LopeNative', () => App);

// Update index.ios.js and index.android.js
import { AppRegistry } from 'react-native';
import setup from './app/setup';

AppRegistry.registerComponent('ReactReduxBoilerPlate', () => setup());
