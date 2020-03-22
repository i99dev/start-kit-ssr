import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import Routers from '../../src/Routers'
import {Provider} from "react-redux";
import {renderRoutes} from "react-router-config";


export default (req,Store)=>{
    const Content = renderToString(

        // <Provider store={Store}>
        //     <StaticRouter location={req.path} context={{}}>
        //         <Routers/>
        //     </StaticRouter>
        // </Provider>
        <Provider store={Store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {renderRoutes(Routers)}
                </div>
            </StaticRouter>
        </Provider>


    );

    return(
        `
        <html>
        <head>
            <title>
                My App
            </title>
        </head>
        <body>
        <div id="root">${Content}</div>
        <script src="bundle.js"></script>
        </body>
        </html>`
    )
}
