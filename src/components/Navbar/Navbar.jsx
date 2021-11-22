import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Nav">
      <div className="navLeft">
        <i className=" navIcon fab fa-facebook"></i>
        <i className="navIcon fab fa-instagram"></i>
        <i className="navIcon fab fa-twitter"></i>
        <i className="navIcon fab fa-linkedin"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">Home</li>
          <li className="navListItem">About</li>
          <li className="navListItem">Contact</li>
          <li className="navListItem">Create</li>
          <li className="navListItem">Logout</li>
        </ul>
      </div>
      <div className="navRight">
        <img
          className="navImg"
          src="https://images.pexels.com/photos/2764976/pexels-photo-2764976.jpeg?cs=srgb&dl=pexels-tubarones-photography-2764976.jpg&fm=jpg"
          alt=""
        />
        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
