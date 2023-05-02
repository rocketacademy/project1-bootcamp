import React from "react";
import Checkbox from "../../components/checkbox";
import {recipes}  from "../../data/recipesDatabase";
import { matchResults } from "../../utils/utils";

const OPTIONS = ["One", "Two", "Three"];

class IngredientsInput extends React.Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
  };

  selectAllCheckboxes = (isSelected) => {
    Object.keys(this.state.checkboxes).forEach((checkbox) => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState((prevState) => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    const inputRange = [];

    Object.keys(this.state.checkboxes)
      .filter((checkbox) => this.state.checkboxes[checkbox])
      .forEach((checkbox) => {
        inputRange.push(checkbox);
      });
    const output = matchResults(inputRange,recipes)
    console.log(output)
  };

  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row mt-5">
              <div className="col-sm-12">
                <form onSubmit={this.handleFormSubmit}>
                  {this.createCheckboxes()}

                  <div className="form-group mt-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary mr-2"
                      onClick={this.selectAll}
                    >
                      Select All
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary mr-2"
                      onClick={this.deselectAll}
                    >
                      Deselect All
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default IngredientsInput;
