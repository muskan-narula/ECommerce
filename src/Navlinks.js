import React from 'react'
import './Navlinks.css'
import {Link} from 'react-router-dom'
function Navlinks () {
return(
    <div className="navlinks">
        <div className="navlinks__outer">
            <div className="navlinks__inner">
        <Link to="/"> Today's Deal</Link>
        <Link to="/"> Customer Service</Link>
        <Link to="/"> Gift Cards</Link>
        <Link to="/"> New Releases</Link>
        <Link to="/"> Sell</Link>

    </div>
    </div>
    </div>
)
}
export default Navlinks