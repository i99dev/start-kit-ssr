import 'babel-polyfill';
import express from 'express';
import Rendring from './Helper/Rendring';
import CreateStore from './Helper/CreateStore';
import {matchRoutes} from 'react-router-config';
import Routers from '../src/Routers';
import proxy from 'express-http-proxy';


const app = express();
// TODO:add APi Server to our App

app.use('/api', proxy('https://jsonplaceholder.typicode.com/'));
app.use(express.static('public'));
app.get('*', (req, res) => {
  const Store = CreateStore(req);
  const promises = matchRoutes(Routers, req.path).map(({route}) => {
    return route.loadData ? route.loadData(Store) : null;
  });

  Promise.all(promises)
      .then(() => {
        res.send(Rendring(req, Store));
      })
      .catch((e)=>console.log(e));
});


app.listen(3001, () => {
  console.log('server on port 3001');
});
