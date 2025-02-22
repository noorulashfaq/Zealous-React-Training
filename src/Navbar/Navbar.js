import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/counter" className="nav-link">Counter</a></li>
        <li className="nav-item"><a href="/todo" className="nav-link">To Do</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
