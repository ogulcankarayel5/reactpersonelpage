import React from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";


const NavBar = () => (
  
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="link link-brand" to="/">Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"  />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="link" to="/cv">Özgeçmiş</Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/portfolyo">Portfolyo</Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/contact">İletişim</Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
 
)

export default NavBar;

