import React from "react";
import Death from "./pictures/death.png";
import Relieved from "./pictures/relieved.png";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
export default class GridBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerPosition: { x: 0, y: 7 },
      healthPoints: 15,
      gameWon: "ongoing",
      playerName: "",
      resultMessage: "",
    };
  }
  componentDidMount = () => {
    // let name = prompt("Declare your identity.. Foolish Adventurer..");
    // if (!name) {
    //   name = "Nameless Adventurer";
    // }
    let name = "TESTING";
    document.addEventListener("keydown", this.keyPressed);
    this.setState({
      playerName: name,
    });
  };
  keyPressed = (e) => {
    e.preventDefault();
    let key;
    if (e.key === "ArrowUp") {
      key = "up";
    } else if (e.key === "ArrowLeft") {
      key = "left";
    } else if (e.key === "ArrowRight") {
      key = "right";
    } else if (e.key === "ArrowDown") {
      key = "down";
    } else {
      return;
    }
    if (key) {
      this.handleMove(key);
    }
  };
  checkCoordinates = () => {
    console.log(this.state.playerPosition);
  };
  addLife = () => {
    this.setState(
      {
        healthPoints: this.state.healthPoints + 1,
      },
      () => {
        console.log(`ADDED 1 HP, NEW HP: ${this.state.healthPoints}`);
      }
    );
  };
  reset = () => {
    document.addEventListener("keydown", this.keyPressed);
    this.setState({
      healthPoints: 15,
      gameWon: "ongoing",
      resultMessage: "",
      playerPosition: { x: 0, y: 7 },
    });
  };
  handleMove = (direction) => {
    if (this.state.gameWon !== "ongoing") {
      return;
    }
    let { x, y } = this.state.playerPosition;
    const warningMessage = `You have reached the Border, You cannot move ${direction.toUpperCase()}!`;
    if (direction === "up") {
      if (y !== 0) {
        y -= 1;
      } else {
        alert(warningMessage);
        return;
      }
    } else if (direction === "down") {
      if (y !== 7) {
        y += 1;
      } else {
        alert(warningMessage);
        return;
      }
    } else if (direction === "left") {
      if (x !== 0) {
        x -= 1;
      } else {
        alert(warningMessage);
        return;
      }
    } else {
      if (x !== 7) {
        x += 1;
      } else {
        alert(warningMessage);
        return;
      }
    }

    this.setState(
      {
        playerPosition: { x, y },
      },
      () => {
        let gameStatus = "ongoing";
        const saferSquares = [
          { x: 0, y: 5 },
          { x: 0, y: 6 },
          { x: 0, y: 7 },
          { x: 1, y: 7 },
          { x: 1, y: 6 },
          { x: 2, y: 7 },
          { x: 5, y: 0 },
          { x: 6, y: 0 },
          { x: 6, y: 1 },
          { x: 7, y: 1 },
          { x: 7, y: 2 },
        ];
        const neutralSquares = [
          { x: 2, y: 0 },
          { x: 3, y: 0 },
          { x: 4, y: 0 },
          { x: 3, y: 1 },
          { x: 4, y: 1 },
          { x: 5, y: 1 },
          { x: 4, y: 2 },
          { x: 5, y: 2 },
          { x: 6, y: 2 },
          { x: 5, y: 3 },
          { x: 6, y: 3 },
          { x: 7, y: 3 },
          { x: 6, y: 4 },
          { x: 7, y: 4 },
          { x: 7, y: 5 },
          { x: 0, y: 2 },
          { x: 0, y: 3 },
          { x: 1, y: 3 },
          { x: 0, y: 4 },
          { x: 1, y: 4 },
          { x: 2, y: 4 },
          { x: 1, y: 5 },
          { x: 2, y: 5 },
          { x: 3, y: 5 },
          { x: 2, y: 6 },
          { x: 3, y: 6 },
          { x: 4, y: 6 },
          { x: 3, y: 7 },
          { x: 4, y: 7 },
          { x: 5, y: 7 },
        ];
        const dangerSquares = [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
          { x: 1, y: 1 },
          { x: 2, y: 1 },
          { x: 1, y: 2 },
          { x: 2, y: 2 },
          { x: 3, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 3 },
          { x: 4, y: 3 },
          { x: 3, y: 4 },
          { x: 4, y: 4 },
          { x: 5, y: 4 },
          { x: 4, y: 5 },
          { x: 5, y: 5 },
          { x: 6, y: 5 },
          { x: 5, y: 6 },
          { x: 6, y: 6 },
          { x: 7, y: 6 },
          { x: 6, y: 7 },
          { x: 7, y: 7 },
        ];
        if (
          this.state.playerPosition.x === 7 &&
          this.state.playerPosition.y === 0
        ) {
          gameStatus = "gameWon";
        } else if (saferSquares.some((tile) => tile.x === x && tile.y === y)) {
          console.log("safezone");
          this.handleSafeZone();
        } else if (dangerSquares.some((tile) => tile.x === x && tile.y === y)) {
          console.log("dangerzone");
          this.handleDangerZone();
        } else if (
          neutralSquares.some((tile) => tile.x === x && tile.y === y)
        ) {
          console.log("neutralzone");
          this.handleNeutralZone();
        }
        this.setState(
          {
            gameWon: gameStatus,
          },
          () => {
            let health = this.state.healthPoints;
            console.log(`HP: ${health}`);
            this.setState({
              gameWon: health < 1 ? "gameLost" : gameStatus,
            });
          }
        );
      }
    );
  };
  handleSafeZone = () => {
    let resultMessage;
    let rngResult = Math.ceil(Math.random() * 100);
    console.log(`RNG: ${rngResult}`);
    let health = this.state.healthPoints;
    if (rngResult >= 92) {
      resultMessage =
        "You stumble upon a small rock, which causes you to find a hidden Health Potion! HEALTH +2";
      health += 2;
    } else if (92 > rngResult && rngResult >= 50) {
      resultMessage =
        "You trudged along the road. It was filled with nothingness.. Which is not a bad sign..";
    } else if (50 > rngResult && rngResult >= 35) {
      resultMessage = "You stumbled on small Rock and fell! HEALTH -1";
      health -= 1;
    } else if (35 > rngResult && rngResult >= 3) {
      resultMessage =
        "You wandered too close to Poisonous Flora! The scent irritated your systems.. HEALTH -2";
      health -= 2;
    } else {
      resultMessage =
        "You hallucinated about your own mortality and trembled at your potential demise.. HEALTH -3";
      health -= 3;
    }
    if (health > 15) {
      health = 15;
    }
    this.setState({
      resultMessage: resultMessage,
      healthPoints: health,
    });
  };
  handleNeutralZone = () => {
    let resultMessage;
    let rngResult = Math.ceil(Math.random() * 100);
    console.log(`RNG: ${rngResult}`);
    let health = this.state.healthPoints;
    if (rngResult >= 94) {
      resultMessage =
        "You Met a friendly critter which shared some of its Fresh Water! HEALTH +1";
      health += 1;
    } else if (94 > rngResult && rngResult >= 66) {
      resultMessage =
        "You adventured into a large forest clearing.. It is a safe spot for now..";
    } else if (66 > rngResult && rngResult >= 40) {
      resultMessage =
        "The blight of the Swamp affects the region which you are present.. You are intoxicated by the alluring fumes! HEALTH -1";
      health -= 1;
    } else if (40 > rngResult && rngResult >= 10) {
      resultMessage =
        "You dance with Death as you hastily darted for safe zones.. HEALTH -2";
      health -= 2;
    } else {
      resultMessage =
        "Local Swamp Wildlife attacked you and gave you a massive bite! HEALTH -3";
      health -= 3;
    }
    if (health > 15) {
      health = 15;
    }
    this.setState({
      resultMessage: resultMessage,
      healthPoints: health,
    });
  };
  handleDangerZone = () => {
    let resultMessage;
    let rngResult = Math.ceil(Math.random() * 100);
    console.log(`RNG: ${rngResult}`);
    let health = this.state.healthPoints;
    if (rngResult >= 96) {
      resultMessage =
        "The Dangerous Swamp Zone seems to be extremely kind to you today, and instead of punishing you for your hubris. You have found a RECOVERY Fruit which heals you! HEALTH +1";
      health += 1;
    } else if (96 > rngResult && rngResult >= 70) {
      resultMessage =
        "Fortune smiles upon you as you managed to evade the threats of the Swamp...";
    } else if (70 > rngResult && rngResult >= 55) {
      resultMessage =
        "The Swamp lets you off with a tiny dose of poisonous cuts to your thigh.. HEALTH -1";
      health -= 1;
    } else if (55 > rngResult && rngResult >= 25) {
      resultMessage =
        "You have been hit by a venomous creature of the Swamp! HEALTH -2";
      health -= 2;
    } else if (25 > rngResult && rngResult >= 3) {
      resultMessage =
        "You barely escaped as the Swamp attempts to devour and sink you under its malice.. HEALTH -3";
      health -= 3;
    } else {
      resultMessage =
        "The Swamp has devoured your entire being, and you failed to get out of it.. You have DIED!";
      health = 0;
    }
    if (health > 15) {
      health = 15;
    }
    this.setState({
      resultMessage: resultMessage,
      healthPoints: health,
    });
  };
  render() {
    const { playerPosition } = this.state;
    const displayGameElements = [];
    const saferSquares = [
      "2,1",
      "3,1",
      "1,2",
      "2,2",
      "1,3",
      "6,8",
      "7,8",
      "7,7",
      "8,7",
      "8,6",
      "1,1",
    ];
    const neutralSquares = [
      "4,1",
      "5,1",
      "6,1",
      "3,2",
      "4,2",
      "5,2",
      "2,3",
      "3,3",
      "4,3",
      "1,4",
      "2,4",
      "3,4",
      "1,5",
      "2,5",
      "1,6",
      "3,8",
      "4,8",
      "5,8",
      "4,7",
      "5,7",
      "6,7",
      "5,6",
      "6,6",
      "7,6",
      "6,5",
      "7,5",
      "8,5",
      "7,4",
      "8,4",
      "8,3",
    ];
    const dangerSquares = [
      "1,8",
      "2,8",
      "1,7",
      "2,7",
      "3,7",
      "2,6",
      "3,6",
      "4,6",
      "3,5",
      "4,5",
      "5,5",
      "4,4",
      "5,4",
      "6,4",
      "5,3",
      "6,3",
      "7,3",
      "6,2",
      "7,2",
      "8,2",
      "7,1",
      "8,1",
    ];
    for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
      const rowElements = [];
      for (let colIndex = 0; colIndex < 8; colIndex++) {
        const squareId = `${colIndex + 1},${8 - rowIndex}`;
        if (rowIndex === playerPosition.y && colIndex === playerPosition.x) {
          rowElements.push(
            <td key={squareId}>
              <div>🧍</div>
            </td>
          );
        } else if (squareId === "8,8") {
          rowElements.push(
            <td key={squareId}>
              <div>⛺</div>
            </td>
          );
        } else if (saferSquares.includes(squareId)) {
          rowElements.push(
            <td key={squareId}>
              <div>🟩</div>
            </td>
          );
        } else if (neutralSquares.includes(squareId)) {
          rowElements.push(
            <td key={squareId}>
              <div>🟨</div>
            </td>
          );
        } else if (dangerSquares.includes(squareId)) {
          rowElements.push(
            <td key={squareId}>
              <div>🟪</div>
            </td>
          );
        }
      }
      displayGameElements.push(<tr key={rowIndex}>{rowElements}</tr>);
    }
    if (this.state.gameWon !== "ongoing") {
      document.removeEventListener("keydown", this.keyPressed);
    }
    let hpCount = this.state.healthPoints;
    let hpArray = [];
    for (let i = 0; i < hpCount; i++) {
      hpArray.push("❤️");
    }
    let hpBar = hpArray.join(" ");
    // if (hpCount < 8) {
    //   document.getElementById(
    //     "Gameboard"
    //   ).style.backgroundImage = `linear-gradient(#000000, transparent, #000000),
    // url(./pictures/swampbg.png);`;
    // }
    //else {
    //   document.getElementById(
    //     "Gameboard"
    //   ).style.backgroundImage = `url(./pictures/swampbg.png);`;
    // }
    return (
      <div>
        <div>
          <Container fluid className="TopContainer">
            <Row className="TopRow">
              <Col sm={6} xs={12} className="Gameboard">
                {this.state.gameWon === "gameWon" ? (
                  <div>
                    <img src={Relieved} alt="alive"></img>
                    <div>
                      You have Survived an insignificant part of the Swamp...
                      <br />
                      You made it to a Camp.. and may rest for now..
                    </div>
                    <button onClick={this.reset}>
                      Onto the Next Journey..
                    </button>
                  </div>
                ) : null}
                {this.state.gameWon === "gameLost" ? (
                  <div>
                    <img src={Death} alt="Death"></img>
                    <div>
                      Running from Death is futile..
                      <br />
                      Adventurer {this.state.playerName.toUpperCase()} has met
                      their Fate!
                      <br />
                      Perhaps if Time is rewound and if you had better luck?
                    </div>
                    <button onClick={this.reset}>Reverse Time!</button>
                  </div>
                ) : null}
                {this.state.gameWon === "ongoing" ? (
                  <table>
                    <tbody>{displayGameElements}</tbody>
                  </table>
                ) : null}
              </Col>
              <Col sm={4} xs={12} offset={2} className="StatusBoard">
                <Row>
                  <div>Survivor Name: {this.state.playerName}</div>
                </Row>
                <Row>
                  {this.state.gameWon === "ongoing" ? (
                    <div>
                      <div className="LifeStatus">Life:</div>
                      <div>{hpBar}</div>
                    </div>
                  ) : null}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          {this.state.playerPosition.y !== 0 &&
          this.state.gameWon === "ongoing" ? (
            <button onClick={() => this.handleMove("up")}>↑</button>
          ) : null}
        </div>
        <div>
          {this.state.playerPosition.x !== 0 &&
          this.state.gameWon === "ongoing" ? (
            <button onClick={() => this.handleMove("left")}>←</button>
          ) : null}
          {this.state.playerPosition.x !== 7 &&
          this.state.gameWon === "ongoing" ? (
            <button onClick={() => this.handleMove("right")}>→</button>
          ) : null}
        </div>
        <div>
          {this.state.playerPosition.y !== 7 &&
          this.state.gameWon === "ongoing" ? (
            <button onClick={() => this.handleMove("down")}>↓</button>
          ) : null}
        </div>
        <div>
          <button onClick={() => this.checkCoordinates()}>Check Coords</button>
          <button onClick={() => this.addLife()}>add hp</button>
        </div>
        <div>
          <div style={{ fontSize: 14 }}>{this.state.resultMessage}</div>
        </div>
      </div>
    );
  }
}
