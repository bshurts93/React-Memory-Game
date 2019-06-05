import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="col s4">
      <img
        className="card-image"
        src="./logos/hawks.png"
        alt="dog"
        onClick={props.onClick()}
      />
    </div>
  );
}
export default Card;
