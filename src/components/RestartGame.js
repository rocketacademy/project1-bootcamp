import React from "react";

export class RestartGame extends React.Component {
    constructor(props) {
        super(props);
        let resetGame;
        this.state = {resetGame: resetGame};
    }

    render() {
        return (
            <div className="justify-center">
      <button className="btn" onClick={this.resetGame}>Restart Game</button>
    </div>
        )
    }
};