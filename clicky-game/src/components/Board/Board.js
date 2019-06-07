import React from "react";

// COMPONENTS
import Nav from "../Nav/Nav";
import Card from "../Card/Card";

// STYLE
import "./style.css";

// UTILITIES
import teams from "../../utils/teams";
import shuffle from "../../utils/shuffle";

class Board extends React.Component {
  constructor(props) {
    super(props);

    // Set as current array from teams.js
    this.localExtentions = shuffle(teams.getImageExtentions());

    this.state = {
      imgSources: this.localExtentions,
      score: 0,
      topScore: 0,
      pickedTeams: []
    };
  }

  renderCard = i => {
    return (
      <Card
        teamObj={this.state.imgSources[i]}
        onMouseDown={this.checkForLoss}
      />
    );
  };

  checkForLoss = e => {
    const newID = e.target.id;

    // If e.target.id has already been clicked, you lose
    if (this.state.pickedTeams.includes(e.target.id)) {
      alert("NAHHHHHHH DUDE");
      this.setState({
        score: 0,
        pickedTeams: []
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        pickedTeams: [...this.state.pickedTeams, newID]
      });
    }
    // Else add one to score, push id to array and shuffle
  };

  checkForWin = e => {
    // If length of ids is equal to score, use wins
  };

  handleClick = el => {
    this.setState({
      imgSources: shuffle(teams.getImageExtentions())
    });
  };

  render() {
    return (
      <div className="board container">
        <Nav score={this.state.score} topScore={this.state.topScore} />
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
        <div className="board-row row">
          {this.renderCard(12)}
          {this.renderCard(13)}
          {this.renderCard(14)}
          {this.renderCard(15)}
        </div>
      </div>
    );
  }
}

export default Board;
