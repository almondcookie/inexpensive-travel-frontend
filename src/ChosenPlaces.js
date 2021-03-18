import React from 'react';

const ChosenPlaces = (props) => {
    return (
        <div>
            <div className="detail-container">
            {props.chosenPlaces.map(place => (
                <div>
                    <div className="detail-title">
                        <h2>{place.name}</h2>
                    </div>
                    <div className='detail-description'>
                        <h3>{place.description}</h3>
                    <h4>${place.cost}/day Room and Board</h4>
                    </div>
                    <img className="detail-image" src={place.link} alt="image" />
                </div>
            ))}
            </div>
        </div>
    )
}

export default ChosenPlaces;