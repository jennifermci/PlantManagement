import React from 'react'
import {Link} from "@reach/router"


export default props => {

    const showPlantList = props.plants.plants.map((plant, idx)=>{
       return (
           <div>
                <Link to={`/details/${plant._id}`} key={idx}>{plant.nickname}<br/></Link>
            </div>
       )
      })

    return (
        <div >
                {showPlantList}


        </div>
    )
}
