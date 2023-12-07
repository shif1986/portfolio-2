import React from "react";
import { NavLink } from "react-router-dom";



export default function Header() {
  return (
    <header>
      <nav className="navbar">
      
                    {/* navlink = href */}
        <ul>
          <NavLink className="navbar__link" to="portfolio"> Portfolio</NavLink>
          <NavLink className="navbar__link" to="service">Service</NavLink>
          <NavLink className="navbar__link" to="contact">Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
}