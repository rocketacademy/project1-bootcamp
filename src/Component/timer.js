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
    const currentTimerIndex = this.checkTimerType(typeIndex);
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

  checkTimerType = (typeIndex) => {
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

  checkPomoType = (typeIndex) => {
    const { pomodoroCycle } = this.state;
    if ((typeIndex !== 0) & (typeIndex % 8 === 0)) {
      this.setState({ pomodoroCycle: pomodoroCycle + 1 });
    }
  };

  componentDidUpdate(prevState) {
    if (prevState.typeIndex !== this.state.typeIndex) {
      this.checkPomoType(this.state.typeIndex);
    }
  }

  // Insert form callback functions handleChange
  // handleChange = (e) => {
  //   let { name, value } = e.target;
  //   if (name === "pomodoro") {
  //     this.setState((prevState) => ({
  //       timer: [{ minutes: value }, ...prevState.timer.slice(1)],
  //       minutes: value,
  //       seconds: 0,
  //     }));
  //   } else if ((name = "short break")) {
  //     this.setState((prevState) => ({
  //       timer: [{ minutes: value }, ...prevState.timer.slice(1)],
  //     }));
  //   } else {
  //     this.setState((prevState) => ({
  //       timer: [{ minutes: value }, ...prevState.timer.slice(1)],
  //     }));
  //   }
  // };

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
        {/* <form>
          <label>
            <input
              name="pomodoro"
              type="number"
              value={this.state.timer[0].minutes}
              onChange={this.handleChange}
              placeholder="25"
            />
            <input
              name="Short Break"
              type="number"
              value={this.state.timer[1].minutes}
              onChange={this.handleChange}
              placeholder="5"
            />
            <input
              name="Long Break"
              type="number"
              value={this.state.timer[2].minutes}
              onChange={this.handleChange}
              placeholder="15"
            />
          </label>
        </form> */}
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
