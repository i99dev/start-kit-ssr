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
    path: '/',
    component: App,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/Contact',
    component: Contact,
  },
];
