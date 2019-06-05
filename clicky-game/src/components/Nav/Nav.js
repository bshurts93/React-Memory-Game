import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          <img className="nhl-logo" src="./nhl.png" alt="NHL logo" />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
