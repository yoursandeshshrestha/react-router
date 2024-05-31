import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>Sandesh Shrestha</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <NavLink
              to={""}
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "black",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/About"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "black",
                };
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Contact"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "black",
                };
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
