import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: [
        { type: "pomodoro", minutes: 25 },
        { type: "short break", minutes: 5 },
        { type: "long break", minutes: 15 },
      ],
      typeIndex: 0,
      currentTimer: "pomodoro",
      minutes: 25,
      seconds: 0,
      pomodoroCycle: 1,
      isRunning: false,
    };
  }

  handleStart = () => {
    const { timer, typeIndex } = this.state;
    const currentTimerIndex = this.checkTimerType(typeIndex);
    this.setState({
      currentTimer: timer[currentTimerIndex].type,
      minutes: timer[currentTimerIndex].minutes,
      seconds: 0,
      isRunning: true,
    });
    this.tick();
  };

  handleStop = () => {
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
          this.setState(({ seconds }) => ({ seconds: seconds - 1 }));
        } else {
          if (minutes === 0) {
            this.handleSkip();
          } else {
            this.setState(({ minutes }) => ({
              minutes: minutes - 1,
              seconds: 59,
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
      typeIndex,
      pomodoroCycle,
    } = this.state;

    return (
      <div>
        <p>
          {currentTimer}
          <br />#{pomodoroCycle}
          <br /> {typeIndex}
        </p>
        <h1>
          {minutes < 10 ? `0${minutes}` : `${minutes}`} :
          {seconds < 10 ? `0${seconds}` : `${seconds}`}
        </h1>
        <button onClick={this.handleRestart}> Restart </button>
        {isRunning ? (
          <button onClick={this.handleStop}> Stop</button>
        ) : (
          <button onClick={this.handleStart}> Start </button>
        )}
        <button onClick={this.handleSkip}> Skip </button>
      </div>
    );
  }
}

export default Timer;
