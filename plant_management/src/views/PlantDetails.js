import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate,Link } from '@reach/router';
import TopNavbar from '../components/Navbar';

export default props => {
    const { id } = props;
    const [nickname, setNickname] = useState();
    const [location, setLocation] = useState();
    const [species, setSpecies] = useState();
    const [plant, setPlant] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/plants/' + id)
            .then(res => {
                setNickname(res.data.nickname);
                setLocation(res.data.location);
                setSpecies(res.data.species);
                setPlant(res.data)
            })
    }, [])
    const deletePlant = (plantId) => {
        axios.delete('http://localhost:8000/api/plants/delete/' + plantId)
            .then(res => navigate("/home"))
    }

    console.log(plant.nickname)

    return (
        <div>
            <TopNavbar/>

            <h3>Details about: {nickname}</h3>
            <button onClick={(e)=>{deletePlant(plant._id)}}>Remove from my plants</button>
            <p>Location in the home: {location}</p>
            <p>Plant Species: {species}</p>

        </div>
    )
}