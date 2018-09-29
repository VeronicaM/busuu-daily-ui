import React from 'react';
import './navbar.scss';
import HamburgerMenu from '../icons/HamburgerMenu.js';
import Home from '../icons/Home.js';
const NavBar = (props) => {
    const links = <fragment>
        <a href = "" > Signup </a>
        <a href = "" > Activity Feed </a>  
        <a href = "" > Notifications </a>
    </fragment>;
    return ( 
        <nav className="signup__nav" >
            <Home className="signup__nav-home"/>
             <div className="signup__nav--responsive">
                 <HamburgerMenu className="nav__hamburger" />
                <div className= "signup__links--responsive">
                    {links}
                </div>
             </div>
             <div className= "signup__links">
                {links}
            </div> 
        </nav>)
};
export default NavBar;