import React from "react";

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 300, // initial time in seconds (5 minutes)
      isActive: false,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.isActive && this.state.time > 0) {
        this.setState((prevState) => ({
          time: prevState.time - 1,
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startTimer = () => {
    this.setState({ isActive: true });
  };

  stopTimer = () => {
    this.setState({ isActive: false });
  };

  resetTimer = () => {
    this.setState({ time: 300, isActive: false });
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  render() {
    return (
      <div>
        <div>{this.formatTime(this.state.time)}</div>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
