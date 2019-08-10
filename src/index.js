import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/**
 * Example Session Fetching
 * Remember to have the aid cookie for local development!
 */
fetch('/api/user/session').then(response => {
  if (response.status === 200) {
    response.json().then(session => console.log(session))
  } else {
    console.log('There is no session')
  }
})
