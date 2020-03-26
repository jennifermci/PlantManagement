import React, { useEffect, useState } from 'react'
import {Link, navigate} from "@reach/router"
import axios from 'axios';

export default props => {

    const showPlantList = props.plants.plants.map((plant, idx)=>{
       return (
           <div>
                <Link to={`/details/${plant._id}`} key={idx}>{plant.nickname}<br/></Link>
                {/* {plant.nickname} */}
            </div>
       )
      })

    console.log(props.plants.plants)

    return (
        <div >
                {showPlantList}


        </div>
    )
}
