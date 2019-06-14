import React from "react";
import "./style.css";

function Card(props) {
  console.log("1:", props.teamObj);
  return (
    <div className="card-box col s3">
      <div className="circle">
        {props.id}
        <img
          id={props.teamObj.id}
          className="card-image"
          src={props.teamObj.src}
          alt="team"
          onMouseDown={props.onMouseDown}
        />
      </div>
    </div>
  );
}
export default Card;
