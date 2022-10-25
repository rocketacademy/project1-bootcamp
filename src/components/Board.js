import React from "react";
import {Card} from "./Card"

export class Board extends React.Component {      
    constructor(props){
    super(props) 
        this.state = {items: [
            //Indonesian - Food
            {id: 1, category: "Food", language: "Indonesian", displayText: "apple", isActive: false, isFlipped: false},
            {id: 1, category: "Food", language: "Indonesian", displayText: "apel", isActive: false, isFlipped: false},
            {id: 2, category: "Food", language: "Indonesian", displayText: "orange", isActive: false, isFlipped: false},
            {id: 2, category: "Food", language: "Indonesian", displayText: "jeruk", isActive: false, isFlipped: false},
            {id: 3, category: "Food", language: "Indonesian", displayText: "tomato", isActive: false, isFlipped: false},
            {id: 3, category: "Food", language: "Indonesian", displayText: "tomat", isActive: false, isFlipped: false},
            {id: 4, category: "Food", language: "Indonesian", displayText: "chicken", isActive: false, isFlipped: false},
            {id: 4, category: "Food", language: "Indonesian", displayText: "ayam", isActive: false, isFlipped: false},
            {id: 5, category: "Food", language: "Indonesian", displayText: "fish", isActive: false, isFlipped: false},
            {id: 5, category: "Food", language: "Indonesian", displayText: "ikan", isActive: false, isFlipped: false},
            {id: 6, category: "Food", language: "Indonesian", displayText: "prawn", isActive: false, isFlipped: false},
            {id: 6, category: "Food", language: "Indonesian", displayText: "udang", isActive: false, isFlipped: false},

            //Indonesian - Animals
            {id: 1, category: "Animals", language: "Indonesian", displayText: "cat", isActive: false, isFlipped: false},
            {id: 1, category: "Animals", language: "Indonesian", displayText: "kucing", isActive: false, isFlipped: false},
            {id: 2, category: "Animals", language: "Indonesian", displayText: "dog", isActive: false, isFlipped: false},
            {id: 2, category: "Animals", language: "Indonesian", displayText: "anjing", isActive: false, isFlipped: false},
            {id: 3, category: "Animals", language: "Indonesian", displayText: "duck", isActive: false, isFlipped: false},
            {id: 3, category: "Animals", language: "Indonesian", displayText: "bebek", isActive: false, isFlipped: false},
            {id: 4, category: "Animals", language: "Indonesian", displayText: "sheep", isActive: false, isFlipped: false},
            {id: 4, category: "Animals", language: "Indonesian", displayText: "domba", isActive: false, isFlipped: false},
            {id: 5, category: "Animals", language: "Indonesian", displayText: "cow", isActive: false, isFlipped: false},
            {id: 5, category: "Animals", language: "Indonesian", displayText: "sapi", isActive: false, isFlipped: false},
            {id: 6, category: "Animals", language: "Indonesian", displayText: "horse", isActive: false, isFlipped: false},
            {id: 6, category: "Animals", language: "Indonesian", displayText: "kuda", isActive: false, isFlipped: false},
            
            //Indonesian - Colours
            {id: 1, category: "Colours", language: "Indonesian", displayText: "red", isActive: false, isFlipped: false},
            {id: 1, category: "Colours", language: "Indonesian", displayText: "merah", isActive: false, isFlipped: false},
            {id: 2, category: "Colours", language: "Indonesian", displayText: "blue", isActive: false, isFlipped: false},
            {id: 2, category: "Colours", language: "Indonesian", displayText: "biru", isActive: false, isFlipped: false},
            {id: 3, category: "Colours", language: "Indonesian", displayText: "yellow", isActive: false, isFlipped: false},
            {id: 3, category: "Colours", language: "Indonesian", displayText: "kuning", isActive: false, isFlipped: false},
            {id: 4, category: "Colours", language: "Indonesian", displayText: "green", isActive: false, isFlipped: false},
            {id: 4, category: "Colours", language: "Indonesian", displayText: "hijau", isActive: false, isFlipped: false},
            {id: 5, category: "Colours", language: "Indonesian", displayText: "white", isActive: false, isFlipped: false},
            {id: 5, category: "Colours", language: "Indonesian", displayText: "putih", isActive: false, isFlipped: false},
            {id: 6, category: "Colours", language: "Indonesian", displayText: "black", isActive: false, isFlipped: false},
            {id: 6, category: "Colours", language: "Indonesian", displayText: "hitam", isActive: false, isFlipped: false},

            //Indonesian - Numbers
            {id: 1, category: "Numbers", language: "Indonesian", displayText: "0", isActive: false, isFlipped: false},
            {id: 1, category: "Numbers", language: "Indonesian", displayText: "nol", isActive: false, isFlipped: false},
            {id: 2, category: "Numbers", language: "Indonesian", displayText: "1", isActive: false, isFlipped: false},
            {id: 2, category: "Numbers", language: "Indonesian", displayText: "satu", isActive: false, isFlipped: false},
            {id: 3, category: "Numbers", language: "Indonesian", displayText: "2", isActive: false, isFlipped: false},
            {id: 3, category: "Numbers", language: "Indonesian", displayText: "dua", isActive: false, isFlipped: false},
            {id: 4, category: "Numbers", language: "Indonesian", displayText: "3", isActive: false, isFlipped: false},
            {id: 4, category: "Numbers", language: "Indonesian", displayText: "tiga", isActive: false, isFlipped: false},
            {id: 5, category: "Numbers", language: "Indonesian", displayText: "4", isActive: false, isFlipped: false},
            {id: 5, category: "Numbers", language: "Indonesian", displayText: "empat", isActive: false, isFlipped: false},
            {id: 6, category: "Numbers", language: "Indonesian", displayText: "5", isActive: false, isFlipped: false},
            {id: 6, category: "Numbers", language: "Indonesian", displayText: "lima", isActive: false, isFlipped: false},

            //Korean - Food
            {id: 1, category: "Food", language: "Korean", displayText: "apple", isActive: false, isFlipped: false},
            {id: 1, category: "Food", language: "Korean", displayText: "사과", isActive: false, isFlipped: false},
            {id: 2, category: "Food", language: "Korean", displayText: "orange", isActive: false, isFlipped: false},
            {id: 2, category: "Food", language: "Korean", displayText: "오렌지", isActive: false, isFlipped: false},
            {id: 3, category: "Food", language: "Korean", displayText: "tomato", isActive: false, isFlipped: false},
            {id: 3, category: "Food", language: "Korean", displayText: "토마토", isActive: false, isFlipped: false},
            {id: 4, category: "Food", language: "Korean", displayText: "chicken", isActive: false, isFlipped: false},
            {id: 4, category: "Food", language: "Korean", displayText: "닭", isActive: false, isFlipped: false},
            {id: 5, category: "Food", language: "Korean", displayText: "fish", isActive: false, isFlipped: false},
            {id: 5, category: "Food", language: "Korean", displayText: "생선", isActive: false, isFlipped: false},
            {id: 6, category: "Food", language: "Korean", displayText: "prawn", isActive: false, isFlipped: false},
            {id: 6, category: "Food", language: "Korean", displayText: "새우", isActive: false, isFlipped: false},

            //Korean - Animals
            {id: 1, category: "Animals", language: "Korean", displayText: "cat", isActive: false, isFlipped: false},
            {id: 1, category: "Animals", language: "Korean", displayText: "고양이", isActive: false, isFlipped: false},
            {id: 2, category: "Animals", language: "Korean", displayText: "dog", isActive: false, isFlipped: false},
            {id: 2, category: "Animals", language: "Korean", displayText: "강아지", isActive: false, isFlipped: false},
            {id: 3, category: "Animals", language: "Korean", displayText: "duck", isActive: false, isFlipped: false},
            {id: 3, category: "Animals", language: "Korean", displayText: "오리", isActive: false, isFlipped: false},
            {id: 4, category: "Animals", language: "Korean", displayText: "sheep", isActive: false, isFlipped: false},
            {id: 4, category: "Animals", language: "Korean", displayText: "양", isActive: false, isFlipped: false},
            {id: 5, category: "Animals", language: "Korean", displayText: "cow", isActive: false, isFlipped: false},
            {id: 5, category: "Animals", language: "Korean", displayText: "소", isActive: false, isFlipped: false},
            {id: 6, category: "Animals", language: "Korean", displayText: "horse", isActive: false, isFlipped: false},
            {id: 6, category: "Animals", language: "Korean", displayText: "말", isActive: false, isFlipped: false},
            
            //Korean - Colours
            {id: 1, category: "Colours", language: "Korean", displayText: "red", isActive: false, isFlipped: false},
            {id: 1, category: "Colours", language: "Korean", displayText: "빨간색", isActive: false, isFlipped: false},
            {id: 2, category: "Colours", language: "Korean", displayText: "blue", isActive: false, isFlipped: false},
            {id: 2, category: "Colours", language: "Korean", displayText: "파란색", isActive: false, isFlipped: false},
            {id: 3, category: "Colours", language: "Korean", displayText: "yellow", isActive: false, isFlipped: false},
            {id: 3, category: "Colours", language: "Korean", displayText: "노란색", isActive: false, isFlipped: false},
            {id: 4, category: "Colours", language: "Korean", displayText: "green", isActive: false, isFlipped: false},
            {id: 4, category: "Colours", language: "Korean", displayText: "초록색", isActive: false, isFlipped: false},
            {id: 5, category: "Colours", language: "Korean", displayText: "white", isActive: false, isFlipped: false},
            {id: 5, category: "Colours", language: "Korean", displayText: "하얀색", isActive: false, isFlipped: false},
            {id: 6, category: "Colours", language: "Korean", displayText: "black", isActive: false, isFlipped: false},
            {id: 6, category: "Colours", language: "Korean", displayText: "검정색", isActive: false, isFlipped: false},

            //Korean - Numbers
            {id: 1, category: "Numbers", language: "Korean", displayText: "0", isActive: false, isFlipped: false},
            {id: 1, category: "Numbers", language: "Korean", displayText: "영", isActive: false, isFlipped: false},
            {id: 2, category: "Numbers", language: "Korean", displayText: "1", isActive: false, isFlipped: false},
            {id: 2, category: "Numbers", language: "Korean", displayText: "하나", isActive: false, isFlipped: false},
            {id: 3, category: "Numbers", language: "Korean", displayText: "2", isActive: false, isFlipped: false},
            {id: 3, category: "Numbers", language: "Korean", displayText: "둘", isActive: false, isFlipped: false},
            {id: 4, category: "Numbers", language: "Korean", displayText: "3", isActive: false, isFlipped: false},
            {id: 4, category: "Numbers", language: "Korean", displayText: "셋", isActive: false, isFlipped: false},
            {id: 5, category: "Numbers", language: "Korean", displayText: "4", isActive: false, isFlipped: false},
            {id: 5, category: "Numbers", language: "Korean", displayText: "넷", isActive: false, isFlipped: false},
            {id: 6, category: "Numbers", language: "Korean", displayText: "5", isActive: false, isFlipped: false},
            {id: 6, category: "Numbers", language: "Korean", displayText: "다섯", isActive: false, isFlipped: false},
        ].sort(() => Math.random()-0.5),
        winStatus: false}
    }

    componentDidMount() {
        const duplicateItems = [...this.state.items]
        const selectedDeck = duplicateItems.filter(card => card.category === this.props.category && card.language === this.props.language)
        this.setState({
          items: selectedDeck
        });

        this.intervalID = setInterval(() => {
            if (this.state.items.every(card => card.isFlipped)) {
                clearInterval(this.intervalID)
                this.props.checkWinStatus('winStatus', true)
            }
            
        //     if (this.state.gameOver) {
        //         clearInterval(this.intervalID)
        //     }
        
        }
        )
        
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
        
        
    }
    

    handleWinStatus = () => {
        this.props.checkWinStatus('winStatus', true)
        // this.props.checkWinStatus('winStatus', this.state.winStatus)
        console.log(this.state.winStatus)
        
      }

    flipCard(index) {
        //if card is active or flipped -> continue
        if (this.state.items[index].isActive || this.state.items[index].isFlipped) return;
        const newCards = [...this.state.items];
        const activeCards = newCards.filter(card => card.isActive);
        //if there are 2 cards open -> continue
        if (activeCards.length >= 2) return;
        //change isActive for these 2 to true
        newCards[index].isActive = true;

        this.setState({
            items: newCards,
        });
    };

    handleMatches() {
        const [firstCard, secondCard] = this.state.items.filter(card => card.isActive);
        clearTimeout(this.timeout);
        if (firstCard && secondCard) {
            //if first and second card matches
            if (firstCard.id === secondCard.id) {
                this.setState(({ items }) => ({
                    items: items.map(card => ({
                        ...card,
                        isFlipped: card.isFlipped || card.id === firstCard.id,
                        isActive: false,
                    }))
                }));
            } else {
                //set delay
                this.timeout = setTimeout(() => {
                    this.setState(({ items }) => ({
                        items: items.map(card => ({
                            ...card,
                            isActive: false,
                        }))
                    }))
                }, 1500);
            }
        }
    };


    render() {
        // console.log(this.state.items)
        console.log(this.state)
        console.log(this.state.winStatus)
        // console.log(this.state.items.every(card => card.isFlipped))

        return (
            <div className={(this.props.gameOver || this.props.winStatus)
                ? "hidden"
                : "container"}>
                {/* {this.checkWinStatus()} */}
                {this.state.items.map((data, index) => {
                 
            return(
            <div key={index} >
                    <Card 
                    key= {index}
                    displayText= {data.displayText}
                    id={data.id}
                    isActive={data.isActive}
                    isFlipped={data.isFlipped}
                    handleClick={() => {
                        this.flipCard(index);
                        this.handleMatches()
                    }}
                    onChange={(e) => this.handleWinStatus(e)}
                     />

                    </div>
                
                    )})
    
    }</div>)
    
    
}
};