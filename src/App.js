import './App.css';
import React from 'react'
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shop/shop.component';
import Header from './components/header/Header.jsx'
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/sign-in-and-sign-up.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class  App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
         this.setState({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         });
         console.log(this.state)
        });
        
      }
      this.setState({ currentUser: userAuth});
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

export default App;
