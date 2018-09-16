import React from 'react';
import './navbar.scss';
import logo from '../../assets/logo.png';

const NavBar = (props) => {
return ( 
    <nav className="signup__nav" >
        <div className="singup__logo-container" >
            <img className="signup__logo" src={logo} alt="logo" />
            <span> LangPirate </span> 
        </div>
        <div className= "signup__links">
            <a href = "" > Home </a>  
            <a href = "" > Courses </a>  
            <a href = "" > Resources </a>  
            <div className = "singup__lang-dropdown"> </div>  
        </div> 
    </nav>)
};
export default NavBar;