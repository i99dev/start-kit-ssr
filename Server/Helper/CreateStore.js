import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../../src/redux/reducers';

export default ()=>{
  const Store = createStore(Reducers, {}, applyMiddleware(thunk));
  return Store;
};
