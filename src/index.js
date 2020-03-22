import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Routers from "./Routers";
import {renderRoutes} from "react-router-config";

ReactDOM.hydrate(
    <BrowserRouter>
        <div>
            {renderRoutes(Routers)}
        </div>
    </BrowserRouter>
    ,
    document.querySelector('#root')
);
