import { createStore, applyMiddleware } from 'redux';
import think from 'redux-thunk';

import reducers from '../app/reducers/index'; // import the reducer

// Connect our store to the combineReducers
export default createStore(reducers, applyMiddleware(thunk));
