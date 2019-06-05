import React from "react";
import Card from "../Card/Card";
import "./style.css";

class Board extends React.Component {
  renderCard() {
    return <Card onClick={() => this.handleClick} />;
  }

  handleClick() {
    console.log("CLICKED!");
  }

  render() {
    return (
      <div className="board container">
        <div className="board-row row">
          {this.renderCard()}
          {this.renderCard()}
          {this.renderCard()}
        </div>
        <div className="board-row row">
          {this.renderCard()}
          {this.renderCard()}
          {this.renderCard()}
        </div>
        <div className="board-row row">
          {this.renderCard()}
          {this.renderCard()}
          {this.renderCard()}
        </div>
      </div>
    );
  }
}

export default Board;
