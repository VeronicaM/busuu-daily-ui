import React from 'react';
import './navbar.scss';
import HamburgerMenu from '../icons/HamburgerMenu.js';
import Home from '../icons/Home.js';

import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const links = <div>
        <Link to="/activity-feed"> Activity Feed </Link>
        <Link to="/notifications"> Notifications </Link>
    </ div>;

    return (
        <nav className={'signup__nav ' + props.className} >
            <Link to="/"><Home className="signup__nav-home" /> </Link>
            <div className="signup__nav--responsive">
                <HamburgerMenu className="nav__hamburger" />
                <div className="signup__links--responsive">
                    {links}
                </div>
            </div>
            <div className="signup__links">
                {links}
            </div>
        </nav>);
};
export default Navbar;
