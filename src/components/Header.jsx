import React from "react";
import { FaArrowRight } from "react-icons/fa";
export default function Header() {
  return (
    <header id="header">
      <nav className="navbar">
        <a href="#" className="logo">
          Edubridge
        </a>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#reviews">Pricing</a></li>
            <li><a href="#join-us">Contact</a></li>
        </ul>
        <div className="account">
            <a href="#">Login</a>
            <a href="#join-us" className="btn-join">Join Us <FaArrowRight /></a>
        </div>
      </nav>
    </header>
  );
}
