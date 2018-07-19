import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <div>
    <img id="iPhone-Nav" src={process.env.PUBLIC_URL + '/iPhone-X.png'} alt="iPhone" />
    <img id="avatar" src={process.env.PUBLIC_URL + '/avatar.png'} alt="avatar" />
    <div id="search-bar">
      <img id="search" src={process.env.PUBLIC_URL + '/search.png'} alt="search" height="40" />
      <p id="search-text">Search</p>
    </div>
    <img id="calendar" src={process.env.PUBLIC_URL + '/calendar-icon.png'} alt="calendar" />
    <img id="line" src={process.env.PUBLIC_URL + '/line.png'} alt="line" />
  </div>
);



export default Navbar;
