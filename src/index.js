import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {getRestaruants} from './helpers/endpoints.js';

ReactDOM.render(<App />, document.getElementById('root'));

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