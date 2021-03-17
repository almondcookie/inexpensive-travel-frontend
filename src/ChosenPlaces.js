import React from 'react';

const ChosenPlaces = (props) => {
    return (
        <div>
            {props.chosenPlaces.map(place => (
                <div>
                    <h2>{place.name}</h2>
                    <h3>{place.description}</h3>
                    <h4>{place.cost}</h4>
                    <img src={place.link} alt="image" />
                </div>
            ))}
        </div>
    )
}

export default ChosenPlaces;