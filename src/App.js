import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Login from './Login'
import Signin from './Signin'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      password: '',
      apiDataLoaded: false
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Cheap Travel (non-tourist)</h1>
        <Link to="/login">Login</Link>
        <Route path="/login" render={() => (
            <Login />
          )} />
        <Link to="/signin">Signin</Link>
        <Route path="/signin" render={() => (
            <Signin />
        )} />
      </div>
    );
  }
}

export default App;
