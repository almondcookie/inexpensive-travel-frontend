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
