import './App.css';
import React from 'react'
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shop/shop.component';
import Header from './components/header/Header.jsx'
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/sign-in-and-sign-up.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.action'


class  App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
         this.props.setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
           }
         );
         console.log(this.state)
        });
        
      }
     setCurrentUser({ userAuth});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
      <Route path='/signin' component={SignInAndSignUpPage}></Route>
      </Switch>
       
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
