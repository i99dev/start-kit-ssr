import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Reducers from '../../src/redux/reducers';




export default (req)=>{
  const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers:{cookie: req.get('cookie') || '' }
  });
  const Store = createStore(Reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
  return Store;
};
