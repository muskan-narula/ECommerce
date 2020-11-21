import React from 'react'
import './Login.css'
import {Link} from "react-router-dom"

function Login(){
    return(
        <div className="Login">
            <Link>
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=" "/>
            </Link>
            <div className="Login__Container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="Password"/>
                    <button type="submit" className="login__signinbutton">Sign In</button>

                </form>
<p> By signing in , you agree to Amazon's terms and conditions</p>
<button className="login__registerbutton">Create your own amazon account</button>
            </div>
        </div>
    )
}
export default Login;