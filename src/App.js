import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import SignInSignUp from '../src/pages/signin-signup/singin-signup'
import Header from '../src/components/header/header'
import {auth, createUserProfileDocument} from '../src/firebase/firebase.utils'

import {connect} from 'react-redux'

import {setCurrentUser} from './redux/user/user.actions'


class App extends React.Component {
  

  unsubscibeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscibeFromAuth = auth.onIdTokenChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.props.setCurrentUser({
            currentUser: snapShot.id,
            ...snapShot.data()
          })
        })
      }
        setCurrentUser({userAuth})
      
      
    })
  }

  componentWillUnmount() {
    this.unsubscibeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
    
  }

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })

export default connect(null, mapDispatchToProps)(App);
