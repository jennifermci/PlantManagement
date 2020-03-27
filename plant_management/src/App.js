import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main'
import PlantDetails from './views/PlantDetails';
import NewPlant from './views/NewPlant';
import Reg from "./views/Reg"
import Login from "./views/Login"
import Home from "./views/Home"
import Add from "./views/add"
import { Nav } from 'react-bootstrap';
import Wrapper from "./components/wrapper"


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Router>
            <Main path="/main"/>
            <PlantDetails path="/details/:_id"/>
            <NewPlant path="/new/:id"/>
            <Reg path ="/register"/>
            <Home path = "/home"/>
            <Login path="/login"/>
            <Add path="/add"/>
        </Router>
      </Wrapper>

    </div>
  );
}

export default App;
