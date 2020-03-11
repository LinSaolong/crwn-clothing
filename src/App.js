import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { conncet, connect } from 'react-redux';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {

  unsubscriberFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscriberFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      setCurrentUser({ userAuth });
    })
  }

  componentWillUnmount(){
    this.unsubscriberFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
      </div>
    );
  }
}

const mapDisPatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDisPatchToProps)(App);
