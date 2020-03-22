import 'babel-polyfill'
import express from 'express';
import React from 'react'
import {renderToString} from 'react-dom/server'
import {renderRoutes} from "react-router-config";
import {StaticRouter} from 'react-router-dom';
import Routers from '../src/Routers';


const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {

    const Content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <div>
                {renderRoutes(Routers)}
            </div>
        </StaticRouter>
    );
    const html = `
    <html>
    <head>
    <title>
    My App1
</title>
</head>
<body>
<div id="root">${Content}</div>
        <script src="bundle.js"></script>
</body>
</html>
    `;
    res.send(html)
});


app.listen(3001, () => {
    console.log('server on port 3001')
});
