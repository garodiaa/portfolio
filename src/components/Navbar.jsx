import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const items = (
        <>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li>
                <NavLink to={"/achievements"}>Achievements</NavLink>
            </li>
        </>
    );



    return (
        <div className="navbar container max-w-4xl mx-auto px-4 sticky top-4 z-50 rounded-3xl mt-2 glass">
            <div className="navbar-center mx-auto">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;