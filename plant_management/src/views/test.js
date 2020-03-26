import React, {useEffect, useState} from "react"
import axios from "axios"
import { navigate } from "@reach/router"
import Results from "./results"


export default () => {

    const [plant, setPlant] = useState("")
    const[results, setResults] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/users",{withCredentials: true})
            .catch(err => navigate("/login"))
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.get(`https://trefle.io/api/plants?q=${plant}&token=OEcrNGtuSExseGhhdWduK3JqQ1VtQT09`)
            .then(res=> {
                console.log(res.data)
                setResults(res.data)
                setLoaded(true)
            })

    }


    return (
        <div>
            <h1>Find your plant!</h1>
            <form onSubmit = {onSubmitHandler}>
                <p>
                    <label>What kind of plant is it?</label>
                    <input type="text" onChange = {(e)=> {setPlant(e.target.value)}}/>
                    <button type="submit">Click here to capture more info on your plant!</button>
                </p>
            </form>
            {loaded && <Results results = {results}/>}
        </div>
    )
}