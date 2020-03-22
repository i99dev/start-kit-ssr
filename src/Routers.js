import App from './App';
import Home from './Page/home';
import Contact from './Page/Contact';

// export default (props)=> {
//     return (
//         <div>
//             <Route exact path='/' component={App}/>
//             <Route  path='/home' component={Home}/>
//             <Route  path='/contact' component={Contact}/>
//         </div>
//     );
// }

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...Contact,
        path: '/Contact',
      },
    ],
  },
];
