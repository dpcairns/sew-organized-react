import React, { Component } from 'react'
import { 
  Route, 
  Switch, 
  Redirect,
  BrowserRouter as Router, } from 'react-router-dom';
import './App.css';
import About from './About.js';
import Stash from './Stash.js';
import Splash from './Splash.js';
import SignUp from './SignUp.js';
import LogIn from './LogIn.js';
import Colors from './Colors.js';
import Palettes from './Palettes.js';
import SavedPalettes from './SavedPalettes.js';
import Detail from './Detail.js';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        
          <Switch>
          // if splash had been renamed login, this could have used the PrivateRoute component from my favorites-back-end repo. As it is, it looks like users can access other routes without being logged in
            <Route exact path='/' render={() => 
              isLoggedIn()
                ? <Redirect to='/user/stash' />
                : <Redirect to='/splash' />
            } />
            <Route path='/splash' component={Splash} />
            <Route path='/about' component={About} />
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={LogIn} />
            <Route path='/colors' component={Colors} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route path='/user/stash' component={Stash} />
            <Route path='/user/palettes' component={SavedPalettes} />
            <Route path='/palettes' component={Palettes} />
          </Switch>
        </Router>
      </div>
    )
  }
}
