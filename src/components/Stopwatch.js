import React from 'react';
//import CircularProgress from '@mui/joy/CircularProgress';
import CircularProgressBar from './CircularProgressBar';
import ding from './assets/ding.mp3';
import tick from './assets/tick.mp3';

//Defining props to be passed into the object
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      timeInit: this.props.setTime,
      time: this.props.setTime, // initial time in seconds (5 minutes)
      isActive: false, //state whether it's running or not
      removeTask: this.props.removeTask,
    };
    this.intervalId = null;
  }

  //When the state has been updated
  componentDidUpdate(prevProps, prevState) {
    // 1. Audio to play ding-ing
    if (this.state.time === 0) {
      this.playAudio(ding);
    }
    // 2. Audio to track time changes to allow ticking
    if (this.state.time === prevState.time - 1 && this.state.time > 0) {
      this.playAudio(tick);
    }
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
    this.setState({
      timeInit: this.props.setTime,
      time: this.props.setTime,
      isActive: false,
    });
  };

  //Extracting the seconds/minutes from seconds
  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  //Calculating the percentage remaining
  calPercent = () => {
    let timeRemain = this.state.time / this.state.timeInit;
    timeRemain = 1 - timeRemain;
    //console.log(this.state.time);
    //console.log(this.state.timeInit);
    //console.log(timeRemain)
    return timeRemain * 100; //as a percentage for progress bar
  };

  //Extracting audio
  playAudio = (sound) => {
    new Audio(sound).play();
  };

  //Inserting the timer graphic
  timerGraphic = () => {
    return (
      <CircularProgressBar
        strokeWidth='12.5'
        sqSize='200'
        percentage={this.calPercent()}
        taskName={this.state.name}
      />
    );
  };

  render() {
    return (
      <div
        className={
          this.state.time === 0
            ? 'timerWidget-wiggle rounded'
            : 'timerWidget rounded'
        }
      >
        <div className='timerClose'>
          <button className='btn'>
            <i className='bi bi-x-circle-fill'></i>
          </button>
        </div>

        <h3 className='text'>{this.state.name}</h3>

        <div className='buttonArray'>{this.timerGraphic()}</div>

        <div className='buttonArray'>{this.formatTime(this.state.time)}</div>

        <div className='buttonArray'>
          {console.log(this.state)}
          <button
            disabled={this.state.time === 0}
            className='btn btn-info'
            onClick={
              (this.state.time !== 0 && !this.state.isActive) ||
              this.state.time === this.state.timeInit
                ? this.startTimer
                : this.stopTimer
            }
          >
            {(this.state.time !== 0 && !this.state.isActive) ||
            this.state.time === this.state.timeInit
              ? 'Start'
              : 'Stop'}
          </button>

          <button className='btn btn-info' onClick={this.resetTimer}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
