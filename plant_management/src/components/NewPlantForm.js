import React, { useState } from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios';

export default props => {
    const {id} = props
    const [nickname, setNickname] = useState(""); 
    const [location, setLocation] = useState(""); 
    const [errors, setErrors] = useState([])
    const [apid, setApid] = useState(id)
     

    const onSubmitHandler = e => {
        console.log(apid)
        e.preventDefault(); 
        axios.post('http://localhost:8000/api/plants/add', {
            nickname, 
            location,
            apid
        })
            .then(res=>  navigate("/main"))
            .catch(err=>{ 
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)} 

            <div>Add a new plant</div>
            <p>
                <label>nickname (common name):</label><br/>
                <input type="text" onChange = {(e)=>setNickname(e.target.value)}/>
            </p>
            <p>
                <label>Location in your home:</label><br/>
                <input type="text" onChange = {(e)=>setLocation(e.target.value)}/>
            </p>
            <p>
                <label>Plant ID:</label>
                <input type="text" value={apid} onChange = {(e)=>setApid(e.target.value)}/>
            </p>
            <button type = "submit">Submit</button>
            <br>
            </br>
        </form>
            <button onClick={(e)=>{navigate('/home')}}>
                    Cancel
                </button>
 

        </div>
    )
}