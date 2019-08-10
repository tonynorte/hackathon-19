import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/global.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>title</h1>
        <p>
          Team Delta
        </p>
        <a
          className="App-link"
          href="https://www.hckthnfy19.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hackathon 2019
        </a>
      </header>
    </div>
  );
}

export default App;
