import React from 'react';

const PlaceDetails = (props) => {
    const foundPlace = props.thePlaces.find(place=>{
        return place.name == props.match.params.name
    });


    return(
        <div>
            <h2>{foundPlace.name}</h2>
            <h3>{foundPlace.description}</h3>
            <h4>{foundPlace.cost}</h4>
            <img src={foundPlace.link} alt="image" />
            <div>
                <button onClick={() => props.addAPlace(foundPlace)}> Dream On</button>
            </div>
        </div>
    )
}
export default PlaceDetails;