import React, { Component } from 'react';

const NavBar = ({counters}) => { 
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar <span className="badge badge-pill badge-secondary">{counters}</span></a>
            </div>
        </nav>
    );
}
 
export default NavBar;