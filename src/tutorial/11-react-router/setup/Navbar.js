import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return(
  <nav>
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/People">People</Link>
      </li>
    </ul>
    
  </nav>
  )
};

export default Navbar;
