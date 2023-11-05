import React from "react";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="input-box">
        <form>
          <label>
            Drug Search
            <input type="text" name="search-input" />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchInput;
