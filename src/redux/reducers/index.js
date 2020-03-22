import {combineReducers} from 'redux';
import commentReducer from './commentReducer';
import AuthReducer from './AuthReducer';


export default combineReducers({
  comment: commentReducer,
  auth: AuthReducer,

});
