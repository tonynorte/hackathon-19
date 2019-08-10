import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import Notfound from "./notfound";
import product from "./js/components/product";
import {getRestaurants} from './helpers/endpoints.js';

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

const routing = (
  <Router>
    <div>
      {/* <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <hr /> */}
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} /> */}
        <Route path="/product/:id" component={product}/>
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));


//setting aid cookie, for local development
document.cookie = 'aid=wWtmY7oLilRQxeMaLbCcaJK3jsT3BpId0.2p8eux10uj2;';

fetch('/api/user/session').then(response => {
  if (response.status === 200) {
    response.json().then(session => {
    	console.log('session:-------');
    	console.log(session)
    });
  } else {
    console.log('There is no session')
  }
});

fetch('api/cafe/nearby/restaurants').then(response => {
  if (response.status === 200) {
    response.json().then(session => {
    	console.log('rest:-------');
    	console.log(session)
    });
  } else {
    console.log('There is no session')
  }
});

fetch('api/cafe/nearby/restaurants/1/promotions').then(response => {
  if (response.status === 200) {
    response.json().then(session => {
    	console.log('promotions:--------------');
    	console.log(session);

    })
  } else {
    console.log('There is no session')
  }
});