import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPlaces: [],
    }
  }
  componentDidMount = () => {
    this.getPlaces();
  }
  getPlaces = async () => {
    const response = await axios.get('http://localhost:3001/places');
    this.setState({
      allPlaces: response.data,
    })
  }
  render() {
    const allPlaces = this.state.allPlaces.map((place) => {
      // console.log(place.name)
      return (
        <div>
          <h3>{place.name}</h3>
          <img src={place.img} alt='city' />
          <p>
            {place.description}
          </p>
        </div>
      );       
    })
    return (
      <div className="App">
        <h1>Travel Cheap App for the non-tourist</h1>
        {allPlaces}
      </div>
    );
  }
}

export default App;
