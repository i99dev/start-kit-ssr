import React from 'react';
import {renderRoutes} from 'react-router-config';
import Header from './components/Header/index';

function App({route}) {
  return (
    <div>
      <Header/>
      {renderRoutes(route.routes)}
    </div>

  );
}

function loadData(store) {
  // return store.dispatch(AuthUser());
}

export default {
  component: App,
  loadData,
};
