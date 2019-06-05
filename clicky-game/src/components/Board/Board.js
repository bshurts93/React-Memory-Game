import React from "react";
import Card from "../Card/Card";
import "./style.css";
import teams from "../../utils/teams";
import shuffle from "../../utils/shuffle";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSources: []
    };
  }

  // Set as current array from teams.js
  localExtentions = shuffle(teams.getImageExtentions());

  componentDidMount() {
    console.log(this.localExtentions);

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
      <Card
        id={i}
        src={this.state.imgSources[i]}
        onClick={() => this.handleClick}
      />
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