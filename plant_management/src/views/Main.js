import React, { useEffect, useState, Component } from 'react'
import { Link } from '@reach/router';
import Sky from 'react-sky';
// import axios from 'axios';


export default () => {

    return (
        <div>          
           <Sky
            images ={{
                0: "https://i.ya-webdesign.com/images/cute-cactus-png-1.png",
                1: "https://i.pinimg.com/originals/f0/9e/4c/f09e4c0a1e846ff95accc4fc852e60ff.png",
                2: "https://i.ya-webdesign.com/images/cactus-clipart-transparent-4.png",
            }}
            how= {130} 
            time={40}
            size ={'100px'}
            background={'#2f3939'}
           />
           
            <Link to="/new">Add a new plant!</Link>  


        </div>
    )
}
