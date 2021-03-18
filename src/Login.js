import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';

import Profile from './Profile';
// import './Login.css';
import './App.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    console.log("login constructor")
  }
 
  loginOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  render() {
    return (
        <form onSubmit={(e) => this.props.login(e, this.state)}>
          <ul className="wrapper">
            <li className="form-row">
              <label for="username">UserName</label>
              <input
                name='username'
                type='text'
                value={this.state.username}
                onChange={this.loginOnChange}
                id='username'
              />
          </li>
          <li className="form-row">
            <label for="password">Password</label>
            <input
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.loginOnChange}
              id='password'
            />
          </li>
          <li className="form-row">
            <input type='submit' value='Login' />
          </li>
        </ul>
        </form>
        // {allPlaces}
    );
  }
}

// export default Login;
export default (Login)
