import React, { useState, useEffect} from "react"
import axios from "axios"
import {navigate} from "@reach/router"
import PlantDetails from "../views/PlantDetails"

export default props => {

    const {id, nickname, location, _id} = props
    const [plant, setPlant] = useState({})
    const [imagearray, setImagearray] = useState([])
    const [test, setTest] = useState()
    const [ph, setPh] = useState()
    const [precip, setPrecip] = useState()
    const [tempMin, setTempmin] = useState()

    const deletePlant = (plantId) => {
        axios.delete('http://localhost:8000/api/plants/delete/' + plantId)
            .then(res => navigate("/main"))
    }


    useEffect(()=>{
        axios.post("http://localhost:8000/api/getoneresult", {id})
            .then(res => {
                setPlant(res.data)
                setPh(res.data.main_species.growth.ph_maximum)
                setPrecip(res.data.main_species.growth.precipitation_maximum.inches)
                setTempmin(res.data.main_species.growth.temperature_minimum.deg_f)
                res.data.images.forEach(image => {
                    imagearray.push(image.url)
                    setImagearray(imagearray)
                    setTest(true)
                })
            })
        }, [])

    console.log(plant)
    console.log(typeof test)
    console.log(typeof plant.scientific_name)


    const imagery = imagearray.map((each)=> <img style={{width:200, height:200}} src={each} alt="image"/>)

    return(
        <div>
            <h3>Details about: {nickname}</h3>
            <p>Location in the home: {location}</p>
            <p>Common Name: {plant.common_name}</p>
            <p>Common Family Name: {plant.family_common_name}</p>
            <p>Scientific Name: {plant.scientific_name}</p>
            <p>PH Maximum: {ph}</p>
            <p>Max Precipitation: {precip} Inches</p>
            <p>Minimum Temperature: {tempMin}°F</p>
            {imagery}
            <button onClick={(e)=>{deletePlant(_id)}}>Remove from my plants</button>
            {/* <button onClick={makeImages}>Clicky for planty imagesy</button> */}
        </div>
    )

    }