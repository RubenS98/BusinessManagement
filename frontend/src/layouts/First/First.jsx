import React, {useEffect, useState} from 'react';
import logo from '../../logo.svg';
import './App.css';

function First() {
  const [test, setTest]=useState("");

  useEffect(() => {
    
    fetch("/api/test")
        .then(res =>
            res.json())
        .then(
            result => {
              setTest(result[0]);
            },
            error => {
                console.log(error.message);
            }
        );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {test}
        </p>
      </header>
    </div>
  );
}

export default First;