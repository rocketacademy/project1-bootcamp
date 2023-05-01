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
    //start counting down
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

  //Timer specific functions
  startTimer = () => {
    //start
    this.setState({ isActive: true });
  };

  stopTimer = () => {
    //stop or pause
    this.setState({ isActive: false });
  };

  resetTimer = () => {
    //reset timer
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
      <div class="timerWidget rounded">
        <div class="timerClose">
          <button class="btn">
            <i class="bi bi-x-circle-fill"></i>
          </button>
        </div>
        <h3 class="text">Cooking Pasta</h3>
        <div>{this.formatTime(this.state.time)}</div>
        <button class="btn btn-info" onClick={this.startTimer}>
          Start
        </button>
        <button class="btn btn-info" onClick={this.stopTimer}>
          Stop
        </button>
        <button class="btn btn-info" onClick={this.resetTimer}>
          Reset
        </button>
      </div>
    );
  }
}

export default Stopwatch;
