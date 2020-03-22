import {AUTH_USER} from '../actions';

export default (state= null, actions)=>{
  switch (actions.type) {
    case AUTH_USER:
      return actions.payload.data || false;
    default:
      return state;
  }
};
