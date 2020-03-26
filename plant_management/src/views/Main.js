import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import Sky from 'react-sky';
import axios from 'axios';
import TopNavbar from '../components/Navbar';
import PlantList from '../components/PlantList';
import styles from '../components/divStyle.module.css';



export default () => {
    const [plants, setPlants] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/plants')
            .then(res=>{
                console.log(res.data)
                setPlants(res.data);
                setLoaded(true);
            });

    },[])

    return (
        <div>    
            <TopNavbar/>      
           <Sky
            images ={{
                0: "https://i.ya-webdesign.com/images/cute-cactus-png-1.png",
                1: "https://i.pinimg.com/originals/f0/9e/4c/f09e4c0a1e846ff95accc4fc852e60ff.png",
                2: "https://i.ya-webdesign.com/images/cactus-clipart-transparent-4.png",
            }}
            how= {130} 
            time={40}
            size ={'100px'}
            // background={'#2f3939'}
           />
           
            <div className={styles.boxStyle}>
                <h3 className={styles.textFont}>Current saved plants:</h3>
                {loaded && <PlantList plants={plants}/>}
            </div>


        </div>
    )
}
