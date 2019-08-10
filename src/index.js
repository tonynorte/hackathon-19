import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

//setting aid cookie, for local development
document.cookie = 'aid=wWtmY7oLilRQxeMaLbCcaJK3jsT3BpId0.2p8eux10uj2;';

fetch('/api/user/session').then(response => {
  if (response.status === 200) {
    response.json().then(session => console.log(session))
  } else {
    console.log('There is no session')
  }
})
