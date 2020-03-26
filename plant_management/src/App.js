import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main'
import PlantDetails from './views/PlantDetails';
import NewPlant from './views/NewPlant';
import Reg from "./views/Reg"
import Login from "./views/Login"
import Home from "./views/Home"
import Test from "./views/test"

function App() {
  return (
    <div className="App">
      <Router>
          <Main path="/"/>
          <PlantDetails path="/details/:id"/>
          <NewPlant path="/new"/>
          <Reg path ="/register"/>
          <Home path = "/home"/>
          <Login path="/login"/>
          <Test path="/test"/>
      </Router>
      

    </div>
  );
}

export default App;
