import React from 'react';

const PlaceDetails = (props) => {
    const foundPlace = props.thePlaces.find(place=>{
        return place.name == props.match.params.name
    });

    return(
        <div>
            <div className="detail-container">
                <div className="detail-title">
                    <h2>{foundPlace.name}</h2>
                </div>
                <div className='detail-description'>
                    <h3>{foundPlace.description}</h3>
                    <h3>${foundPlace.cost}.00/day Room and Board</h3>
                </div>
                <img className="detail-image" src={foundPlace.link} alt="image" />
                <div>
                    <button className="detail-button" onClick={() => props.addAPlace(foundPlace)}> Dream On</button>
                </div>
            </div>
        </div>
    )
}
export default PlaceDetails;