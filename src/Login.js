import React, { Component } from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
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

  login = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data)
    const response = await axios.post('http://localhost:3001/users/login', data);
    this.props.history.push('/Profile');
  }

  render() {
    return (
        <form onSubmit={this.login}>
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
export default withRouter(Login)
