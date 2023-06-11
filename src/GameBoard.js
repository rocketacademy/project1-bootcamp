import React from "react";
import Death from "./pictures/death.png";
import Relieved from "./pictures/relieved.png";
export default class GridBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerPosition: { x: 0, y: 7 },
      healthPoints: 10,
      gameWon: "ongoing",
      playerName: "",
      resultMessage: "",
    };
  }
  componentDidMount = () => {
    let name = prompt("Declare your identity.. Foolhardy Traveller..");
    if (!name) {
      name = "Nameless Traveller";
    }
    this.setState({
      playerName: name,
    });
  };
  handleMove = (direction) => {
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
        console.log(this.state.playerPosition);
        let gameStatus;
        this.state.playerPosition.x === 7 && this.state.playerPosition.y === 0
          ? (gameStatus = "gameWon")
          : (gameStatus = this.state.gameWon);
        if (
          this.state.playerPosition.x === 7 &&
          this.state.playerPosition.y === 0
        ) {
          gameStatus = "gameWon";
        } else if (this.state.healthPoints < 1) {
          gameStatus = "gameLost";
        } else {
          gameStatus = this.state.gameWon;
        }
        console.log(gameStatus);
        this.setState({
          gameWon: gameStatus,
        });
      }
    );
  };
  handleDangerZone = () => {
    let resultMessage;
    let rngResult = Math.ceil(Math.random() * 100);
    console.log(rngResult);
    if (rngResult >= 95) {
      resultMessage =
        "The Dangerous Swamp Zone seems to be extremely kind to you today, and instead of punishing you for your hubris. You have found a RECOVERY Fruit which heals you! HEALTH +2";
      this.setState({
        healthPoints: this.state.healthPoints + 2,
      });
    } else if (95 > rngResult && rngResult >= 70) {
      resultMessage =
        "Fortune smiles upon you as you managed to evade the threats of the Swamp...";
    } else if (70 > rngResult && rngResult >= 55) {
      resultMessage =
        "The Swamp lets you off with a tiny dose of poisonous cuts to your thigh.. HEALTH -1";
      this.setState({
        healthPoints: this.state.healthPoints - 1,
      });
    } else if (55 > rngResult && rngResult >= 25) {
      resultMessage =
        "You have been hit by a venomous creature of the Swamp! HEALTH -2";
      this.setState({
        healthPoints: this.state.healthPoints - 2,
      });
    } else if (25 > rngResult && rngResult >= 3) {
      resultMessage =
        "You barely escaped as the Swamp attempts to devour and sink you under its malice.. HEALTH -3";
      this.setState({
        healthPoints: this.state.healthPoints - 3,
      });
    } else {
      resultMessage =
        "The Swamp has devoured your entire being, and you failed to get out of it.. You have DIED!";
      this.setState({
        healthPoints: 0,
      });
    }
    this.setState({
      resultMessage: resultMessage,
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

    return (
      <div>
        <div>
          {this.state.gameWon === "gameWon" ? (
            <div>
              <img src={Relieved} alt="alive"></img>
              <div>
                You have Survived 1 Portion of the Swamp... For now, You are
                Safe!
              </div>
              <button onClick={null}>Onto the Next Journey..</button>
            </div>
          ) : null}
          {this.state.gameWon === "gameLost" ? (
            <div>
              <img src={Death} alt="Death"></img>
              <div>You tried, however running from Death was futile</div>
            </div>
          ) : null}
        </div>
        <div>
          {this.state.gameWon === "ongoing" ? (
            <div>
              <table>
                <tbody>{displayGameElements}</tbody>
              </table>
              <div>Survivor Name: {this.state.playerName}</div>
              <div>
                Health Points:{" "}
                {this.state.healthPoints > 5 ? (
                  <span style={{ color: "green" }}>
                    {this.state.healthPoints}😊
                  </span>
                ) : (
                  <span style={{ color: "red" }}>
                    {this.state.healthPoints}💀
                  </span>
                )}
              </div>
            </div>
          ) : null}
        </div>
        <div>
          {this.state.playerPosition.y !== 0 &&
          this.state.gameWon === "ongoing" ? (
            <button onClick={() => this.handleMove("up")}>⏫</button>
          ) : null}
        </div>
        <div>
          {this.state.playerPosition.x !== 0 &&
          this.state.gameWon === "ongoing" ? (
            <button onClick={() => this.handleMove("left")}>⏪</button>
          ) : null}
          {this.state.playerPosition.x !== 7 &&
          this.state.gameWon === "ongoing" ? (
            <button onClick={() => this.handleMove("right")}>⏩</button>
          ) : null}
        </div>
        <div>
          {this.state.playerPosition.y !== 7 &&
          this.state.gameWon === "ongoing" ? (
            <button onClick={() => this.handleMove("down")}>⏬</button>
          ) : null}
        </div>
        <div>
          <button onClick={() => this.handleDangerZone()}>
            Test Danger Zone
          </button>
        </div>
        <div>
          <div style={{ fontSize: 14 }}>{this.state.resultMessage}</div>
        </div>
      </div>
    );
  }
}
