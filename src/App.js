import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import SignInSignUp from '../src/pages/signin-signup/singin-signup'
import Header from '../src/components/header/header'
import {auth, createUserProfileDocument} from '../src/firebase/firebase.utils'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  unsubscibeFromAuth = null;

  componentDidMount() {
    this.unsubscibeFromAuth = auth.onIdTokenChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser: snapShot.id,
            ...snapShot.data()
          })
        })
      }else {
        this.setState({currentUser:userAuth})
      }
      
    })
  }

  componentWillUnmount() {
    this.unsubscibeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
    
  }

export default App;
