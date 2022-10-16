import React from "react";
import {Card} from "./Card"
// import {Settings} from "./Settings/Settings"

export class Board extends React.Component {      
    constructor(props){
    super(props) 
        this.state = {items: [
            {id: 1, category: "Food", language: "Indonesian", displayText: "apple", isActive: false, isFlipped: false},
            {id: 1, category: "Food", language: "Indonesian", displayText: "apel", isActive: false, isFlipped: false},
            {id: 2, category: "Food", language: "Indonesian", displayText: "orange", isActive: false, isFlipped: false},
            {id: 2, category: "Food", language: "Indonesian", displayText: "jeruk", isActive: false, isFlipped: false},
            {id: 3, category: "Food", language: "Indonesian", displayText: "tomato", isActive: false, isFlipped: false},
            {id: 3, category: "Food", language: "Indonesian", displayText: "tomat", isActive: false, isFlipped: false},
            {id: 4, category: "Food", language: "Indonesian", displayText: "chicken", isActive: false, isFlipped: false},
            {id: 4, category: "Food", language: "Indonesian", displayText: "ayam", isActive: false, isFlipped: false}
            // {id: 1, category: "Colours", language: "Indonesian", displayText: "red", isActive: false, isFlipped: false},
            // {id: 1, category: "Colours", language: "Indonesian", displayText: "merah", isActive: false, isFlipped: false},
            // {id: 2, category: "Colours", language: "Indonesian", displayText: "blue", isActive: false, isFlipped: false},
            // {id: 2, category: "Colours", language: "Indonesian", displayText: "biru", isActive: false, isFlipped: false},
            // {id: 3, category: "Colours", language: "Indonesian", displayText: "yellow", isActive: false, isFlipped: false},
            // {id: 3, category: "Colours", language: "Indonesian", displayText: "kuning", isActive: false, isFlipped: false},
            // {id: 4, category: "Colours", language: "Indonesian", displayText: "green", isActive: false, isFlipped: false},
            // {id: 4, category: "Colours", language: "Indonesian", displayText: "hijau", isActive: false, isFlipped: false}
        ].sort(() => Math.random()-0.5)}
    }

handleClick(index) {
    //duplicate state of cards and modify the index of the card that has been selected
    const duplicateCards = [...this.state.items]
    
    this.setState({
        items: duplicateCards,
        // prevCardId: duplicateCards[index].id
    })

    if (duplicateCards[index].isActive === false) {
        duplicateCards[index].isActive = !duplicateCards[index].isActive
        // console.log(duplicateCards.filter(card => card.isActive))

        //identify the first 2 cards that are active & not flipped
        const [firstCard, secondCard] = duplicateCards.filter(card => card.isActive && !card.isFlipped)
        if (firstCard && secondCard) {
            // console.log(firstCard, secondCard)
            //if first card id equals to second card id
            if (firstCard.id === secondCard.id) {
                duplicateCards.forEach(card => {
                    //if cards matches & is not already flipped -> change to isFlipped and cards remain active
                    if(card.id === firstCard.id && !card.isFlipped) {
                        card.isFlipped = true
                        card.isActive = true
                    } 
                })
                //if cards do not match 
            } else {
                duplicateCards.forEach(card => {
                    // if the cards are not flipped yet -> flip back the cards (not active)
                    if(!card.isFlipped) {
                        card.isActive = false
                    }
                })
                   
            }
        }
        
        this.setState({ 
          items: duplicateCards
        })
    }
    
};

getOptions () {

}

    render() {
        // console.log(this.state.items)
        return (
            
            <div className="container">
                {this.state.items.map((data, index) => {
            return(
            
                    <Card 
                    key= {index}
                    displayText= {data.displayText}
                    id={data.id}
                    isActive={data.isActive}
                    isFlipped={data.isFlipped}
                    handleClick={() => this.handleClick(index)} />
                    
                
                    )})
    
    }</div>)
    
    
}
};