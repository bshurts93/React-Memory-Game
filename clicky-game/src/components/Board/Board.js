import React from "react";
import Card from "../Card/Card";
import "./style.css";
import teams from "../../utils/teams";

class Board extends React.Component {
  componentDidMount() {
    teams.getImageExtentions();
    console.log(`Image extentions: ${teams.imageExtentions}`);
  }

  renderCard() {
    return <Card src="" onClick={() => this.handleClick} />;
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
