import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TopNavbar from '../components/Navbar';
import Displaydetails from "../components/displaydetails"
import Imagedisplay from "../components/imagedisplay"

export default props => {
    const { _id } = props;
    const [nickname, setNickname] = useState();
    const [location, setLocation] = useState();
    const [id, setId] = useState();
    const [plant, setPlant] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/plants/' + _id)
            .then(res => {
                setNickname(res.data.plant.nickname);
                setLocation(res.data.plant.location);
                setId(res.data.plant.apid);
                setPlant(res.data.plant)
                setLoaded(true)
            })
    }, [])

    return (
        <div>
            <TopNavbar/>
            {loaded && <Displaydetails nickname = {nickname} location = {location} id={id} _id = {_id}  />}
        </div>
    )
}