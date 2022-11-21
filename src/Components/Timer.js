import React from "react";
import './Timer.css'

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 0,
      seconds: 0,
      gameOver: false,
    };
  }

  componentDidMount() {
    if (
      this.props.difficulty === "easy" ||
      this.props.difficulty === "medium" ||
      this.props.difficulty === "hard"
    ) {
      this.setState({
        minutes: 2,
        seconds: 45,
      });
    }

    this.timerID = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState({
          seconds: this.state.seconds - 1
        })
      }
      if (this.state.seconds === 0) {
        if (this.state.minutes === 0) {
          clearInterval(this.timerID)
          this.props.timerMethod('gameOver', true)
        } else {
          this.setState({
            minutes: this.state.minutes - 1,
            seconds: 59
          })
        }
      }

    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  render() {
    const {minutes, seconds} = this.state
    return (
        <div>
          {(!this.props.hasWon && !this.props.gameOver) && <h3>Timer - {minutes} : {seconds < 10 ? `0${seconds}` : seconds} </h3>}
          {this.props.hasWon && <h3> You Won! </h3>}
          {(minutes === 0 && seconds === 0) && <h3>Game over!</h3>}
        </div>
    )
  }
}