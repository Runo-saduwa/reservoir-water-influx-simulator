import React from 'react';
import axios from 'axios';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';


import MainScreen from './Pages/MainScreen/MainScreen';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import WellDataScreen from './Pages/WellDataScreen/WellDataScreen';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

const App = () => {

  axios.get('http://localhost:2020/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  return (
    <div className="App">
      <header className="App-header">
      
      <HashRouter>
      <Link to='/'>home</Link>
       <Link to='/main'>main</Link>
       <Link to='/welldata'>WellDataScreen</Link>
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/main" component={MainScreen}/>
        <Route exact path="/welldata" component={WellDataScreen}/>
      </Switch>
      </HashRouter>
      </header>
    </div>
  );
 }

export default App;
