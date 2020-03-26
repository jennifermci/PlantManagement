import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main'
import PlantDetails from './views/PlantDetails';
import NewPlant from './views/NewPlant';
import { Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Router>
          <Main path="/home"/>
          <PlantDetails path="/details/:id"/>
          <NewPlant path="/new"/>
      </Router>
      

    </div>
  );
}

export default App;
