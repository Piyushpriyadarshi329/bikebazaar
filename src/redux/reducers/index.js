import {combineReducers} from 'redux';
import userSession from './userSession';
import userObj from './userObj'

export const persistWhitelist = ['userSession','userObj'];

export default combineReducers({
  userSession,
  userObj,
});
