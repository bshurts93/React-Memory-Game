import React from "react";
import "./style.css";

function Card(props) {
  console.log(props);

  return (
    <div className="col s4">
      <img
        className="card-image"
        src="https://m.theepochtimes.com/assets/uploads/2019/04/14/border-collie-550x330.jpg"
        alt="dog"
        onClick={props.onClick()}
      />
    </div>
  );
}
export default Card;
