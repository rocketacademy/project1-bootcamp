import React from "react";

class DrugSearch extends React.Component {
  handleChange = (e) => {
    this.props.updateDrugSearch(e.target.value);
  };

  render() {
    return (
      <div className="input-box">
        <form>
          <label>
            Drug Search
            <input
              type="text"
              name="search-input"
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default DrugSearch;
