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

    // changeItemClass() {
    //     const activeCards = (this.items.filter(card => card.isActive))
    //     // console.log(this.items.filter(card => card.isActive))
    //     // if(this.props.isActive) {
    //     //     this.setState({
    //     //         activeCards: "active"
    //     //     })
                
    //     // }
        
    // }
    
    
    render() {
        // console.log(this.props.isActive)
        return (
            <div className={"card active-" + this.props.isActive + " flipped-" + this.props.isFlipped} onClick={() => this.props.handleClick()}>
                <div className={"displayText active-" + this.props.isActive}>{this.props.displayText}</div>
                </div>
        )
    }
};