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
    return <Card src={this.localExtentions} onClick={() => this.handleClick} />;
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
        </div>
        <div className="board-row row">
          {this.renderCard(3)}
          {this.renderCard(4)}
          {this.renderCard(5)}
        </div>
        <div className="board-row row">
          {this.renderCard(6)}
          {this.renderCard(7)}
          {this.renderCard(8)}
        </div>
      </div>
    );
  }
}

export default Board;
