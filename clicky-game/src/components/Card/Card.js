import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card-box col s3">
      <div className="circle">
        <img
          id={props.id}
          className="card-image"
          src={props.src}
          alt="team"
          onClick={props.onClick()}
        />
      </div>
    </div>
  );
}
export default Card;
