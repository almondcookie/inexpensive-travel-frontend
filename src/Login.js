import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';

import Profile from './Profile'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
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
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.loginOnChange}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.loginOnChange}
          />
          <input type='submit' value='Login' />
        </form>
        // {allPlaces}
    );
  }
}

// export default Login;
export default Login;
