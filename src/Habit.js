import React from "react";
import Button from "@mui/material/Button";

class Habit extends React.Component {
  render() {
    return (
      <div className="Habit">
        <h4>
          Habit: {this.props.habit}
          <br />
          <Button
            variant="contained"
            size="small"
            sx={{
              borderRadius: 2,
              fontSize: "13px",
            }}
            onClick={() => this.props.onUpcount(this.props.id)}
          >
            +
          </Button>
          {"  "} Counter: {this.props.upCount}{" "}
          <Button
            variant="contained"
            color="error"
            size="small"
            sx={{
              borderRadius: 2,
            }}
            onClick={() => this.props.onDelete(this.props.id)}
          >
            Delete
          </Button>
        </h4>
      </div>
    );
  }
}

export default Habit;
