import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom'


const HatsPage = () =>{
  return (
    <div className="hats">
      <h1>HATS PAGE</h1>
    </div>
  )
  }
  
  function App() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }

export default App;