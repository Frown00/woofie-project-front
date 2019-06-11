import { combineReducers } from 'redux';
import { reducer } from 'react-redux-oauth2'

export default combineReducers({
  oauth: reducer,
});