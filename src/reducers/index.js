import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import ui from './ui';
import users from './users';

export default combineReducers({
  routing,
  ui,
  users,
});
