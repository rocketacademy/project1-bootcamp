import React from "react";

export class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        let name;
        let selectedItem;
        let onChange;
        this.state = {
            name: name,
            selectedItem: selectedItem,
            onChange: onChange
        }
    }

    isChecked() {
        if(this.props.name === this.props.selectedItem) {
            return true
        } else {
            return false
        }
    }
    
    render() {
        // console.log(this.isChecked())
        return (
            <div className="radio-btn">
                <input 
                type="radio" 
                name={this.props.name} 
                id={this.props.name} 
                value={this.props.name}
                checked={this.isChecked()}
                onChange={this.props.onChange}
                />
                <label htmlFor={this.props.name}>{this.props.name}</label>
            </div>
        )
    }
}