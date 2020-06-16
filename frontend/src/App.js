import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import First from './layouts/First/First';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';

function App() {
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
      <Switch>
        <Route path="/" component={First} />
      </Switch>
    </div>
  );
}

export default App;
