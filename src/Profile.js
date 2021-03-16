import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = (props) => {
    console.log(`At Profile and props is:`)
    console.log(props.thePlaces)
    return (
        <div>
            <h2>Happy Travels,  {props.thePlaces.user.username}</h2>
            {props.thePlaces.thePlaces.map((place) => (
                    <div>
                        <h3>{place.cost}</h3>
                    </div>
            ))}
        </div>
    )
}
    
    // return(


        // const thePlaces = this.state.cities.map((city) => {
        //     return (
        //       <div>
        //         <h3>{city.name}</h3>
        //         <img src={city.img} alt='city' />
        //         <p>
        //           {city.state}, {city.country}
        //         </p>
        //       </div>
        //     );
        //   });

        // <div>
        //     <h1>Hello Traveler - USERNAME </h1>

        //     <h4>Different Places To Travel</h4>
        //    console.log(response)
        // </div>

    // )
export default Profile