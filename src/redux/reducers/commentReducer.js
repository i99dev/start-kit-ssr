import {FATCH_COMMENT} from '../actions';

export default (state=[], actions)=>{
  switch (actions.type) {
    case FATCH_COMMENT:
      return actions.payload.data;
    default:
      return state;
  }
};
