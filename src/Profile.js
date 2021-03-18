import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = (props) => {
    console.log(`At Profile and props is:`)
    console.log(props.thePlaces)
    return (
        <div className="profileDiv">
            <h2>Check Out Inexpensive Places To Travel - (For Non-Tourist)</h2>
            <h2>Adventures Are The Best Way To Learn!</h2>
        </div>
        // <div>
        //     <h2>Happy Travels,  {props.thePlaces.user.username}</h2>
        //     {props.thePlaces.thePlaces.map((place) => (
        //             <div>
        //                 <h3>{place.cost}</h3>
        //             </div>
        //     ))}
        // </div>
    )
}

export default Profile