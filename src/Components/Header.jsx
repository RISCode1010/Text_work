import React from "react";
import photo from './p2.png';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <img className="lo" src= {photo} alt="" />
          <div className="heading">TEXT WORK</div>
        </div>
        <div className="menu">
          <Link to="Home/*">Home</Link>
          <Link to="About/*">About</Link>
          <Link to="Contact/*">Contact</Link>
        </div>
      </header>
    </div>
  );
}
