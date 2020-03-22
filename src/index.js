import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routers from './Routers';
import {renderRoutes} from 'react-router-config';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Reducers from './redux/reducers';
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: '/api',
});

const Store = createStore(Reducers, window.INITAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));


ReactDOM.render(
    <Provider store={Store}>
      <BrowserRouter>
        <div>{renderRoutes(Routers)}</div>
      </BrowserRouter>
    </Provider>
    ,
    document.querySelector('#root'),
);
