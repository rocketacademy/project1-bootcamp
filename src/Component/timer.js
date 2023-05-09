import React from "react";
import "../App.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: [
        { type: "Focus Time!", minutes: 25 },
        { type: "Short Break", minutes: 5 },
        { type: "Long Break", minutes: 15 },
      ],
      typeIndex: 0,
      currentTimer: "Code-struction Zone",
      minutes: 25,
      seconds: 0,
      pomodoroCycle: 1,
      isRunning: false,
      elapsedSeconds: 0,
    };
  }

  handleStart = () => {
    const { timer, typeIndex, elapsedSeconds } = this.state; // added elapsedSeconds to state
    const currentTimerIndex = this.checkTimerType(typeIndex);
    const totalSeconds = timer[currentTimerIndex].minutes * 60;
    const remainingSeconds =
      elapsedSeconds === 0 ? totalSeconds : totalSeconds - elapsedSeconds; // calculate remaining seconds
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    this.setState({
      currentTimer: timer[currentTimerIndex].type,
      minutes,
      seconds,
      isRunning: true,
    });
    this.tick();
  };

  handlePause = () => {
    this.setState({ isRunning: false });
  };

  handleSkip = () => {
    const { timer, typeIndex } = this.state;
    const currentTimerIndex = this.checkTimerType(typeIndex + 1);
    this.setState({
      typeIndex: typeIndex + 1,
      currentTimer: timer[currentTimerIndex].type,
      minutes: timer[currentTimerIndex].minutes,
      seconds: 0,
      isRunning: true,
    });
    clearInterval(this.myInterval);
    this.tick();
  };

  handleRestart = () => {
    const { timer, typeIndex } = this.state;
    const currentTimerIndex = this.checkTimerType(typeIndex, false);
    this.setState({
      typeIndex: typeIndex,
      minutes: timer[currentTimerIndex].minutes,
      seconds: 0,
      isRunning: true,
    });
    clearInterval(this.myInterval); //to clear and retrigger tick to prevent x2 speed
    this.tick();
  };

  tick = () => {
    this.myInterval = setInterval(() => {
      const { seconds, minutes, isRunning } = this.state;
      if (isRunning) {
        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1,
            elapsedSeconds: this.state.elapsedSeconds + 1,
          })); // increment elapsedSeconds
        } else {
          if (minutes === 0) {
            this.handleSkip();
          } else {
            this.setState(({ minutes }) => ({
              minutes: minutes - 1,
              seconds: 59,
              elapsedSeconds: this.state.elapsedSeconds + 1, // increment elapsedSeconds
            }));
          }
        }
      } else {
        clearInterval(this.myInterval);
      }
    }, 1000);
  };

  checkTimerType = (typeIndex, isNewCycle = true) => {
    console.log(isNewCycle);
    if (isNewCycle) {
      const { pomodoroCycle } = this.state;
      if ((typeIndex !== 0) & (typeIndex % 8 === 0)) {
        this.setState({ pomodoroCycle: pomodoroCycle + 1 });
      }
    }
    if (typeIndex !== 0) {
      if ((typeIndex + 1) % 8 === 0) {
        return 2; //long break
      } else if (typeIndex % 2 === 0) {
        return 0; //pomodoro
      } else {
        return 1; //short break
      }
    } else {
      return 0; //pomodoro. first run.
    }
  };

  render() {
    const {
      minutes,
      seconds,
      currentTimer,
      isRunning,
      // typeIndex,
      pomodoroCycle,
    } = this.state;

    return (
      <div class="text-center text-white">
        <div>
          {currentTimer}
          <br />
          [Cycle #{pomodoroCycle}]
        </div>
        <div className="countdown-timer">
          {minutes < 10 ? `0${minutes}` : `${minutes}`}:
          {seconds < 10 ? `0${seconds}` : `${seconds}`}
        </div>
        <div className="button-container">
          <button onClick={this.handleRestart} class="btn btn-secondary">
            Restart
          </button>
          {isRunning ? (
            <button onClick={this.handlePause} class="btn btn-success">
              Pause
            </button>
          ) : (
            <button onClick={this.handleStart} class="btn btn-success">
              Start
            </button>
          )}
          <button onClick={this.handleSkip} class="btn btn-danger">
            Skip
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
