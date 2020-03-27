import React, { useState } from 'react'

import UserContext from "./usercontext";

const Wrapper = (props) =>{

   
    const [loggeduser, setLoggeduser] = useState([])
   


    return(
            
        <UserContext.Provider value = {{loggeduser, setLoggeduser}}>
            {props.children}
        </UserContext.Provider>

        );
    }

export default Wrapper