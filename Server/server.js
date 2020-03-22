import 'babel-polyfill';
import express from 'express';
import Rendring from './Helper/Rendring';
import CreateStore from './Helper/CreateStore';


const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
  const Store = CreateStore();
  res.send(Rendring(req, Store));
});


app.listen(3001, () => {
  console.log('server on port 3001');
});
