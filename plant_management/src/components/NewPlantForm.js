import React, { useState } from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios';

export default () => {

    const [nickname, setNickname] = useState(""); 
    const [location, setLocation] = useState(""); 
    const [species, setSpecies] = useState(""); 
    const [errors, setErrors] = useState([])

    const onSubmitHandler = e => {
        e.preventDefault(); 
        axios.post('http://localhost:8000/api/plants/add', {
            nickname, 
            location,
            species,
        })
            .then(res=>  navigate('/home'))
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

            {/* maybe have this be an api call in the future? */}
            <p>
                <label>Plant Species:</label><br/>
                <input type="text" onChange = {(e)=>setSpecies(e.target.value)}/>
            </p>
 
            <button>Submit</button>
            <br>
            </br>
            <button onClick={(e)=>{navigate('/home')}}>
                    Cancel
                </button>
 
        </form>

        </div>
    )
}