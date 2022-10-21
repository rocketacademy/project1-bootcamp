import React from "react";
import PropTypes from 'prop-types';
import { CATEGORIES, LEVEL, LANGUAGES } from "../constants";
import {Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Dialog, DialogTitle, DialogContent} from '@mui/material'


export class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {category: CATEGORIES[0],
                    level: LEVEL[0],
                    language: LANGUAGES[0],
                    open: false};
    } 

    handleClickOpen(e) {
        this.setState({
            open: true
        })
    }

    handleClose(e) {
        this.setState({
            open: false
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleFormChange('shouldStartGame', true)
        this.setState({
        startGame: {category: this.state.category,
                    level: this.state.level,
                    language: this.state.language
                },
    })
    };

    handleCategoryChange(e) {
        this.props.handleFormChange('category', e.target.value)
        // console.log(e.target)
      }

    handleLevelChange(e) {
        this.props.handleFormChange('level', e.target.value)
      }
    
    handleLanguageChange(e) {
        this.props.handleFormChange('language', e.target.value)
      }


render() {
    // console.log(this.state)
    return (
        <div className="form-main-container">
        <FormControl>
            {/* <Grid container spacing={2} > */}
    <div>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>

        <Button className="divider" variant="outlined" onClick={(e) => this.handleClickOpen(e)}>How to Play!</Button>
        <Dialog open={this.state.open}
                onClose={() => {
                this.handleClose()
                }}>
            
            <DialogTitle>How To Play!</DialogTitle>
                <DialogContent>
                    <div>
                        <li>
                        Match all the cards with the same meaning to win the game!</li> 
                        <li>
                        The harder the difficulty level, the less time you will have to complete the game!
                        </li>
                        <li>
                        Select your preferred category, difficulty level & language to start!</li>
                    </div>
                </DialogContent>
                </Dialog>

        <FormLabel id="demo-row-radio-buttons-group-label"><h4 className="settings-header">Category:</h4></FormLabel>
        <RadioGroup
        row={true}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <div className="radio-btn-group">
        
            {CATEGORIES.map((item, index) => (
                <FormControlLabel
                key={index} 
                value={item} 
                control={<Radio />} 
                label={item}
                onChange={(e) => this.handleCategoryChange(e)} />
                 
            ))}
        
        </div>
        </RadioGroup>

        <FormLabel id="demo-row-radio-buttons-group-label"><h4 className="settings-header">Difficulty Level:</h4></FormLabel>
        <RadioGroup
        row={true}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <div className="radio-btn-group">
        
            {LEVEL.map((item, index) => (
                <FormControlLabel
                key={index} 
                value={item}
                control={<Radio />}
                label={item}
                // selectedItem={this.props.level}
                onChange={(e) => this.handleLevelChange(e)} />
            ))}

        </div>
        </RadioGroup>


        <FormLabel id="demo-row-radio-buttons-group-label"><h4 className="settings-header">Language:</h4></FormLabel>
        <RadioGroup
        row={true}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <div className="radio-btn-group">
            {LANGUAGES.map((item, index) => (
                <FormControlLabel
                key={index} 
                value={item}
                control={<Radio />}
                label={item}
                // selectedItem={this.props.language}
                onChange={(e) => this.handleLanguageChange(e)} />
            ))}
        </div>
        </RadioGroup>
        
        <div className="divider">
        {/* <button className="btn" 
                onClick={(e) => this.handleSubmit(e)}>Start</button> */}
                
         <button type="submit" className="btn">Start</button> 
        </div>
        
        </form>
    </div>
    {/* </Grid> */}
    </FormControl>
    </div>
    )
}
}

Settings.propTypes = {
    handleCategoryChange: PropTypes.func,
    handleLevelChange: PropTypes.func,
    handleLanguageChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};