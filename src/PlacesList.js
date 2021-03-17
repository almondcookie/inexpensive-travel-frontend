import React from 'react';
import { Link } from 'react-router-dom';

const PlacesList = props => {
  return(
    <div className="list-container">
      {props.placeslist.map(place => (
        <div className="list-arrange" key={place.id}>
          <div className="list-image-text-wrapper">
            {/* <Link to={`/places/${place.id}`}> */}
            <Link to={`/placedetails/${place.name}`}>
              {/* <img src={place.link} alt="image" /> */}
              <h2 className="list-image-text">{place.name}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PlacesList;

// const allPlaces = this.state.allPlaces.map((place) => {
//     return (
//       <div>
//         <h3>{place.name}</h3>
//         <img src={place.link} alt='place' />
//         <p>
//           {place.description}
//         </p>
//       </div>
//     );       
//   })