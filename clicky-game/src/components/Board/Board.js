import React from "react";
import Card from "../Card/Card";
import "./style.css";
import teams from "../../utils/teams";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSources: ["TEST", "TEST 2"]
    };
  }

  // Set as current array from teams.js
  localExtentions = teams.getImageExtentions();

  componentDidMount() {
    this.setState(
      {
        imgSources: this.localExtentions
      },
      function() {
        // Check to see if state holds all teams
        console.log(this.state);
      }
    );
  }

  renderCard(i) {
    return (
      <Card src={this.state.imgSources[i]} onClick={() => this.handleClick} />
    );
  }

  handleClick() {
    console.log("CLICKED!");
  }

  render() {
    return (
      <div className="board container">
        <div className="board-row row">
          {this.renderCard(0)}
          {this.renderCard(1)}
          {this.renderCard(2)}
          {this.renderCard(3)}
        </div>
        <div className="board-row row">
          {this.renderCard(4)}
          {this.renderCard(5)}
          {this.renderCard(6)}
          {this.renderCard(7)}
        </div>
        <div className="board-row row">
          {this.renderCard(8)}
          {this.renderCard(9)}
          {this.renderCard(10)}
          {this.renderCard(11)}
        </div>
      </div>
    );
  }
}

export default Board;
