import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import Profile2 from './Profile2'

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


  render() {
    return (

        <form onSubmit={(e) => this.props.signin(e, this.state)}>
        <ul className="wrapper">
          <li className="form-row">
              <label for="name">Name</label>
              <input
                name='name'
                type='text'
                value={this.state.name}
                onChange={this.signinOnChange}
                id='name'
              />
          </li>
              
          <li className="form-row">
            <label for="username">UserName</label>
            <input
              name='username'
              type='text'
              value={this.state.username}
              onChange={this.signinOnChange}
              id='username'
            />
        </li>
      
        <li className="form-row">
          <label for="password">Password</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.signinOnChange}
            id='password'
          />
        </li>
        <li className="form-row">
          <input type='submit' value='Signin' />
        </li>
      </ul>
      </form>
       
    );
  }
}

export default Signin;
