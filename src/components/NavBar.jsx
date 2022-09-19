import React, { Component } from "react";

function NavBar(props) {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge text-bg-secondary m-2">
            {props.countersLength}
          </span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
