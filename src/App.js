import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import {Route, Link, withRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Login from './Login';
import Signin from './Signin';
import PlacesList from './PlacesList';
import PlaceDetails from './PlaceDetails';
import Profile from './Profile';
import Profile2 from './Profile2';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: '',
        username: '',
        chosenPlaces: [],
        password: '',

    },
      thePlaces: [],
      apiDataLoaded: false, 
      loggedIn: true,
      signedIn: true
    }
  }
  componentDidMount = () => {
    this.getPlaces();
  };

  getPlaces = async () => {
    const response = await axios.get('http://localhost:3001/places')
    this.setState({
      thePlaces: response.data,
    });
  };

  login = async (e, user) => {
    e.preventDefault();
    console.log(`user.username ${user.username}`)
    const data = {
      username: user.username,
      password: user.password,
    };
    this.state.loggedIn = false
    this.state.signedIn = false
    console.log(`before post ${data.username}`)
    const response = await axios.post('http://localhost:3001/users/login', data);
    console.log("after post")
    console.log(`response.data: ${response.data}`)
    const foundUserId = response.data.user;
    if (response) {
      this.state.user.username = user.username;
      this.state.user.password = user.password;
    }
    const response2 = await axios.get(`http://localhost:3001/users/profile/${foundUserId}`);
    this.props.history.push(`/Profile/${foundUserId}`);
  }

  signin = async (e, user) => {
    e.preventDefault();
    const data = {
      name: user.name,
      username: user.username,
      password: user.password,
    };
    console.log(data)
    this.state.signedIn = false;
    this.state.loggedIn = false;
    const response = await axios.post('http://localhost:3001/users/signup', data);
    this.props.history.push('/Profile2');
  }

  addAPlace = (foundPlace) => {
    const addToChosenList = this.state.user.chosenPlaces;
    addToChosenList.push(foundPlace);
    this.setState({
      chosenPlaces: addToChosenList
    })
  };

/* Steps for login 
- The Welcome is displayed with the login link
- The link will route the user to login.js along with the login method as a parameter
- the login.js renders a from.
  -The form sets the state for username that was entered
  - Once the form is submitted, the backend posting the URL and the username that was entered
  - Apon return, the Profile page is called/displayed
*/

  render() {
    return (
      <div className="App">
        <h1>Welcome to Cheap Travel (non-tourist)</h1>

        {this.state.loggedIn && <nav><Link to="/login">Login</Link></nav>}
        {/* <Link to="/login">Login</Link> */}
        <Route path="/login" render={() => (
            <Login login={this.login}/>
          )} />

        {this.state.signedIn && <nav><Link to="/signin">Signin</Link></nav>}
        <Route path="/signin" render={() => (
            <Signin signin={this.signin}/>
        )} />

        <nav><Link to="/placeslist">Travel List</Link></nav>
        <Route path="/placeslist" render={() => (
            <PlacesList placeslist={this.state.thePlaces}/>
        )} />

        <Route path="/placedetails/:name" render={(routerProps) => (
            <PlaceDetails thePlaces={this.state.thePlaces} addAPlace={this.addAPlace} {...routerProps}/>
          )} />

        <Route path="/Profile" render={() => (
          <Profile thePlaces={this.state}/>
        )} />

        <Route path="/Profile2" render={() => (
          <Profile2 />
        )} />
      </div>
    );
  }
}

export default withRouter(App);
