import React from "react";
export default class GridBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerPosition: { x: 0, y: 7 },
      healthPoints: 10,
      gameWon: "ongoing",
    };
  }

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
      }
    );
  };

  render() {
    const { playerPosition } = this.state;

    return (
      <div>
        <div>
          <table>
            <tbody>
              {Array.from({ length: 8 }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 8 }, (_, colIndex) => {
                    const squareId = `${colIndex + 1},${8 - rowIndex}`;
                    return (
                      <td>
                        {rowIndex === playerPosition.y &&
                        colIndex === playerPosition.x ? (
                          <div>🧍</div>
                        ) : squareId === "8,8" ? (
                          <div>🏁</div>
                        ) : (
                          <div>⬜</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button onClick={() => this.handleMove("up")}>Move Up</button>
        </div>
        <div>
          <button onClick={() => this.handleMove("left")}>Move Left</button>
          <button onClick={() => this.handleMove("right")}>Move Right</button>
        </div>
        <div>
          <button onClick={() => this.handleMove("down")}>Move Down</button>
        </div>
      </div>
    );
  }
}
