import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Do something when the button is clicked
    console.log('Button clicked!');
  }

  render() {
    const backgroundImage = this.props.backgroundImage;
    const title = this.props.title;
    const buttonText = this.props.buttonText;

    const divStyle = {
      backgroundImage: `url(${backgroundImage})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundColor: 'grey',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    };

    const containerStyle = {
        textAlign: 'center',
        color: '#ffffed',
    };

    return (
      <div style={divStyle}>
        <div className="container" style={containerStyle}>
          <h1>{title}</h1>
          <Button 
            variant="primary"
            size="lg"
            style={{width: '180px', height: '50px', padding: '5px', fontSize: '20px'}}
            onClick={this.handleClick}>{buttonText}
          </Button>
        </div>
      </div>
    );
  }
}

export default HomePage;

