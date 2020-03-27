import React, {useState} from "react"
import axios from "axios"
import {navigate, Link} from "@reach/router"



export default props => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors,setErrors] = useState([])

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/login", {email, password},{withCredentials: true})
            .then(res=>navigate("/main"))
            .catch(err => {
                console.log(err)
                // const errorResponse = err.res.data.err;
                // let errorArr = [];
                // for(const key of Object.keys(errorResponse)){
                //     errorArr.push(errorResponse[key].message)
                // }
                // setErrors(errorArr)
            })
    }


    return (
        <div>
            <h1>Login Here:</h1>
            <form onSubmit = {onSubmitHandler}>
                <p>
                    <label>Email:</label>
                    <input type="text" onChange = {(e) => {setEmail(e.target.value)}}/>
                </p>
                <p>
                    <label>Password:</label>
                    <input type="password" onChange = {(e) => {setPassword(e.target.value)}}/>
                </p>
                {errors.map((each, i)=> <h5 key={i}>{each}</h5>)}
                <button type="submit">Click here to Login</button>
            </form>
            <Link to="/register">Don't have an account? Click here to register!</Link>
        </div>
    )
}