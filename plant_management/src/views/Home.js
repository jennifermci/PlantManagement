import React from "react"
import {Link} from "@reach/router"

export default props => {

    return (
        <div>
            <h1>Hello!</h1>
            <Link to="/register">Register as a new user!</Link>
            <Link to="/login">Click here to Login!</Link>
        </div>
    )
}