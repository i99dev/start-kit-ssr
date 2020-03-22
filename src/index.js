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

const Store = createStore(Reducers, {}, applyMiddleware(thunk));


ReactDOM.hydrate(
    <Provider store={Store}>
      <BrowserRouter>
        <div>{renderRoutes(Routers)}</div>
      </BrowserRouter>
    </Provider>
    ,
    document.querySelector('#root'),
);
