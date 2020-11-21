import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link} from "react-router-dom"
import './Header.css'     
import { useStateValue } from "./StateProvider";

function Header(){
    const[{basket} , dispatch] = useStateValue();
    console.log("my basket",basket)
        return(
        <nav className="header">
            <Link to="/">
            <img className="header__logo" src="" alt="" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>

            </div>
            {/* first link*/}
            <div className="header__nav">
            <Link to  ="/"className="header__link">
                
        <div className="header__option">
        <span className="header__lineone">
             Hello,User
            </span>
            <span className="header__linetwo">
                <Link to ="./Login">
             Sign 
             </Link>
            </span>

        </div>
        </Link>
        <Link to  className="header__link">
        <div className="header__option">
        <span className="header__lineone">
                Returns
            </span>
            <span className="header__linetwo"> & orders
            </span>

        </div>
        </Link>
        <Link to  className="header__link">
        <div className="header__option">
        <span className="header__lineone">
             Your
            </span>
            <span className="header__linetwo"> Prime
            </span>

        </div>
        </Link>
        </div>
        {/*basket icon with number*/}
        <Link className="/checkout" className="header__link">
            <div className="header__optionbasket">
                <Link to="/Checkout">
                <ShoppingBasketIcon/>
                </Link>
{/*number of items in the basket */}
        <span className="header_optionlinetwo header__productCount">{basket?.length}</span>
            </div>

        </Link>
                </nav>

    )
}

export default Header;