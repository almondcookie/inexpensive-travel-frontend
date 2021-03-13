import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import {Route, Link, withRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Login from './Login';
import Signin from './Signin';
import Profile from './Profile';

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

  login = async (e, user) => {
    e.preventDefault();
    const data = {
      username: user.username,
      password: user.password,
    };
    console.log(data)
    const response = await axios.post('http://localhost:3001/users/login', data);
    this.props.history.push('/Profile');
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Cheap Travel (non-tourist)</h1>
        <Link to="/login">Login</Link>
        <Route path="/login" render={() => (
            <Login login={this.login} />
          )} />
        <Link to="/signin">Signin</Link>
        <Route path="/signin" render={() => (
            <Signin />
        )} />
        <Route path="/Profile" render={() => (
          <Profile />
        )} />
      </div>
    );
  }
}

export default withRouter(App);
