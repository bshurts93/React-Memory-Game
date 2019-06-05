import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="col s4">
      <img
        className="card-image"
        src={props.src}
        alt="dog"
        onClick={props.onClick()}
      />
    </div>
  );
}
export default Card;
