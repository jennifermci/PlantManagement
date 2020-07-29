import React, { useState, useEffect} from "react"
import axios from "axios"
import {navigate} from "@reach/router"
import Imagedisplay from "./imagedisplay"
import Watered from "./watered"
import styles from '../components/divStyle.module.css';
import {Button} from "reactstrap"

export default props => {

    const {id, nickname, location, _id, timeSinceLastWater, waterhistory} = props
    const [plant, setPlant] = useState({})
    const [imagearray, setImagearray] = useState([])
    const [test, setTest] = useState(false)
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
                setPlant(res.data.data)
                setPh(res.data.data.main_species.growth.ph_maximum)
                setPrecip(res.data.data.main_species.growth.maximum_precipitation.mm)
                setTempmin(res.data.data.main_species.growth.minimum_temperature.deg_f)
                for (var image in res.data.data.main_species.images) {
                    res.data.data.main_species.images[image].forEach(each => {
                        imagearray.push(each.image_url)
                        setImagearray(imagearray)
                    })
                }
                setTest(true)
            })
        }, [])

    return(
        <div className = {styles.loginbox} style= {{paddingTop:20, paddingBottom: 20,display: "flex", justifyContent: "center", flexDirection: "column",alignItems: "center"}}>
            <div className = {styles.loginbox} style={{width:400}}>
                <h3>Details about: {nickname}</h3>
                <p>Location in the home: {location}</p>
            </div>
            {test && <Watered timeSinceLastWater = {timeSinceLastWater} precip = {precip} id={_id} waterhistory={waterhistory}/>}
            <div className = {styles.loginbox2} style={{width:400, display: "flex", justifyContent: "center", alignItems: "center", height: 300}}>
                <div>
                    <p>Common Name: {plant.common_name}</p>
                    <p>Common Family Name: {plant.family_common_name}</p>
                    <p>Scientific Name: {plant.scientific_name}</p>
                    <p>PH Maximum: {ph}</p>
                    <p>Max Precipitation: {precip} mm</p>
                    <p>Minimum Temperature: {tempMin}°F</p>
                </div>
            </div>
            {test && <Imagedisplay imagearray = {imagearray}/>}
            <br/>
            <Button onClick={(e)=>{deletePlant(_id)}}>Remove from my plants</Button>
        </div>
    )

    }