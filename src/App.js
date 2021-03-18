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
import ChosenPlaces from './ChosenPlaces';
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
      // loggedIn: true,
      // signedIn: true
    }
  }
  componentDidMount = () => {
    this.getPlaces();
  };

  getPlaces = async () => {
    const response = await axios.get('http://localhost:3001/places' || 'https://inexpensive-travel-backend.herokuapp.com/places')
    //const response = await axios.get('http://localhost:3001/places')
    this.setState({
      thePlaces: response.data,
    });
  };

  login = async (e, user) => {
    e.preventDefault();
    // console.log(`user.username ${user.username}`)
    const data = {
      username: user.username,
      password: user.password,
    };

    // this.state.loggedIn = false
    // this.state.signedIn = false
    // console.log(`before post ${data.username}`)
    const response = await axios.post('http://localhost:3001/users/login' || 'https://inexpensive-travel-backend.herokuapp.com/users/login', data);
    // console.log("after post")
    // console.log(`response.data: ${response.data}`)
    const foundUserId = response.data.user;
    if (response) {
      this.state.user.username = user.username;
      this.state.user.password = user.password;
    }
    const response2 = await axios.get(`http://localhost:3001/users/profile/${foundUserId}` || `https://inexpensive-travel-backend.herokuapp.com/${foundUserId}`);
    // this.props.history.push(`/Profile/${foundUserId}`);
    this.props.history.push(`/Profile`);
  }

  signin = async (e, user) => {
    e.preventDefault();
    const data = {
      name: user.name,
      username: user.username,
      password: user.password,
    };
    console.log(data)
    // this.state.signedIn = false;
    // this.state.loggedIn = false;
    const response = await axios.post('http://localhost:3001/users/signup' || 'https://inexpensive-travel-backend.herokuapp.com/users/signup', data);
    this.props.history.push('/Profile2');
  }

  addAPlace = (foundPlace) => {
    const addToChosenList = this.state.user.chosenPlaces;
    addToChosenList.push(foundPlace);
    this.setState({
      chosenPlaces: addToChosenList
    })
  };


  render() {
    return (
      <div className="App">
        <div className="titleDiv">
          <h1>Welcome to Cheap Travel (non-tourist)</h1>
        </div>
        <nav>
          {/* {this.state.loggedIn && <nav><Link to="/login">Login</Link></nav>} */}
          <NavLink to="/login">Login</NavLink>
  
          {/* {this.state.signedIn && <nav><Link to="/signin">Signin</Link></nav>} */}
          <NavLink to="/signin">SignOn</NavLink>

          <NavLink to="/placeslist">Travel List</NavLink>

          <NavLink to="/chosenplaces">Dreams Coming True</NavLink>
        </nav>
        <div className="Content">
          <Route path="/login" render={() => (
              <Login login={this.login}/>
          )} />

          <Route path="/signin" render={() => (
              <Signin signin={this.signin}/>
          )} />

          <Route path="/placeslist" render={() => (
              <PlacesList placeslist={this.state.thePlaces}/>
          )} />

          <Route path="/placedetails/:name" render={(routerProps) => (
              <PlaceDetails thePlaces={this.state.thePlaces} addAPlace={this.addAPlace} {...routerProps}/>
          )} />

          <Route path="/chosenplaces" render={(routerProps) => (
            <ChosenPlaces chosenPlaces={this.state.user.chosenPlaces} {...routerProps} />
          )} />

          <Route path="/Profile" render={() => (
            <Profile thePlaces={this.state}/>
          )} />

          <Route path="/Profile2" render={() => (
            <Profile2 />
          )} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
