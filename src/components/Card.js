import React from "react";

export class Card extends React.Component {
    constructor(props) {
        super(props);
        let displayText;
        let isActive;
        let isFlipped;
        this.state = {displayText: displayText,
                    isActive: isActive,
                    isFlipped: isFlipped};
    } 

    
    
    render() {
        // console.log(this.props.isActive)
        return (
            <div className={"card active-" + this.props.isActive + " flipped-" + this.props.isFlipped} onClick={() => this.props.handleClick()}>
                <div className={"displayText active-" + this.props.isActive  + " flipped-" + this.props.isFlipped}>{this.props.displayText}</div>
                </div>
        )
    }
};