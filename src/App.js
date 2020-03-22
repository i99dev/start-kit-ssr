import React from 'react';
import {renderRoutes} from 'react-router-config';

function App({route}) {
  return (
    <div>
      <h1>This Header</h1>
      {renderRoutes(route.routes)}
    </div>

  );
}

export default {
  component: App,
};
