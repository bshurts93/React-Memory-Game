import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          <img className="nhl-logo" src="./nhl.png" alt="NHL logo" />
        </a>
        <a href="/" className="brand-logo text">
          Team Logo Memory Game
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Score: {props.score}</a>
          </li>
          <li>
            <a href="badges.html">Top score: {props.topScore}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
