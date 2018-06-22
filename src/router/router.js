/* eslint-disable */

import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Bundle from './Bundle';
import '../style/global.common.scss';
import Home from 'bundle-loader?lazy&name=home!../containers/Home/Home';
import Album from 'bundle-loader?lazy&name=album!~/containers/Album/Album';
import AlbumList from 'bundle-loader?lazy&name=albumlist!~/containers/AlbumList/AlbumList';
import Page from '../containers/Page/Page';
import Counter from 'bundle-loader?lazy&name=counter!~/containers/Counter/Counter';

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      Component => <Component {...props} />
    }
  </Bundle>
);

const RouterMap = () => (
  <Router>
    <div>
      {/* <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul> */}
      <Switch>
        <Route exact path="/" component={createComponent(Home)} />
        <Route exact path="/album" component={createComponent(Album)} />
        <Route exact path="/albumlist" component={createComponent(AlbumList)} />
        <Route path="/counter" component={createComponent(Counter)} />
      </Switch>
    </div>
  </Router>
);

// class RouterMap extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Route path="/" component={Home} />
//           <Route path="/counter" component={Counter} />
//         </div>
//       </Router>
//     )
//   }
// }

export default RouterMap;
