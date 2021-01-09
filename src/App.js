import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from '../src/components/header/header'



  function App() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }

export default App;
