import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      password: ''
    }
  }
 
  signinOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  signin = async (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data)
    const response = await axios.post('http://localhost:3001/users/signup', data);
  }

  render() {
    return (
        <form onSubmit={this.signin}>
         <input
            name='name'
            type='text'
            placeholder='name'
            value={this.state.name}
            onChange={this.signinOnChange}
          />
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.signinOnChange}
          />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.signinOnChange}
          />
          <input type='submit' value='Signin' />
        </form>
        // {allPlaces}
    );
  }
}

export default Signin;
