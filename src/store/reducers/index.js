import { combineReducers, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'remote-redux-devtools';
import { thunk } from 'redux-thunk';
import { favoriteReducer } from "./favoriteReducer"
export default combineReducers({
    favoriteReducer, 
});