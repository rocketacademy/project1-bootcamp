import React from 'react'

export class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        minutes: 0,
        seconds: 1,
        gameOver: false
    }  
}


componentDidMount() {
    //if difficulty = easy, 3 minutes
    if (this.props.level === "Easy") {
        this.setState({
            minutes: 3,
            seconds: 0
        })
    //if difficulty = medium, 2 minutes
    } else if (this.props.level === "Medium") {
        this.setState({
            minutes: 2,
            seconds: 0
        })
    } else {
    //if difficulty = hard, 1 minute
        this.setState({
            minutes: 1,
            seconds: 0
        })

    // this.props.callBackTime('gameOver', true)
    }
    
    this.myInterval = setInterval(() => {
        const { seconds, minutes } = this.state

        if (seconds > 0) {
            this.setState(({ seconds }) => ({
                seconds: seconds - 1
            }))
        }
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(this.myInterval)
                this.props.callBackTime('gameOver', true)
            } else {
                this.setState(({ minutes }) => ({
                    minutes: minutes - 1,
                    seconds: 59
                }))
            }

    } 
    }, 1000)


    // if(this.state.minutes === 0 && this.state.seconds === 0) {
        
    //     this.setState({
    //         gameOver: true
    //     })
    // }
    

}


componentWillUnmount() {
    clearInterval(this.myInterval)
    
    
}

  
  render() {
    // console.log(this.state.gameOver)
    // console.log(this.state.seconds)

    const { minutes, seconds } = this.state
        return (
            
            <div>
                {(!this.props.winStatus && !this.props.gameOver) && 
                <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>}

                {(this.props.winStatus && !this.props.gameOver) && <h1>Congratulations, you did it!</h1>}

                {/* {!this.props.winStatus && this.props.gameOver && <h1>Game over!</h1>} */}
                
                { (minutes === 0 && seconds === 0) &&
                    <h1>Game over!</h1>  
                }

                

            </div>
        )
    }
}