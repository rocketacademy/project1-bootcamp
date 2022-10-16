import React from "react";
// import { ReactPropTypes } from "react";
// import styles from "./Settings.module.css"
import { CATEGORIES, LEVEL, LANGUAGES } from "../../constants";
import { RadioButton } from "../RadioButton/RadioButton";

export class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: CATEGORIES[0],
                    level: LEVEL[0],
                    language: LANGUAGES[0],
                    startGame: {}};
    } 

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
        startGame: {category: this.state.category,
                    level: this.state.level,
                    language: this.state.language}
    })
    };

    handleCategoryChange(e) {
        this.setState({
            category: e.target.value
        });
      }

    handleLevelChange(e) {
        this.setState({
            level: e.target.value
        });
      }
    
      handleLanguageChange(e) {
        this.setState({
            language: e.target.value
        });
      }

render() {
    console.log(this.state)
    return (
<div className="form-container"><form onSubmit={(e) => this.handleSubmit(e)}>

        <h2>Settings</h2>
        <h4>Category:</h4>
        <div>
            {CATEGORIES.map((item, index) => (
                 <RadioButton
                key={index} 
                name={item}
                selectedItem={this.state.category}
                onChange={(e) => this.handleCategoryChange(e)}
                 />
            ))}
        </div>
        <h4>Difficulty Level:</h4>
        <div>
            {LEVEL.map(item => (
                <RadioButton
                key={item} 
                name={item}
                selectedItem={this.state.level}
                onChange={(e) => this.handleLevelChange(e)} />
            ))}
        </div>
        <h4>Language:</h4>
        <div>
            {LANGUAGES.map(item => (
                <RadioButton
                key={item} 
                name={item}
                selectedItem={this.state.language}
                onChange={(e) => this.handleLanguageChange(e)} />
            ))}
        </div>
        
        <div className="divider">
        {/* <button onClick={(e) => this.handleSubmit(e)}>Start</button> */}
        <button type="submit" className="btn">Start</button>
        </div>
        
        </form>
    </div>
    )
}
}