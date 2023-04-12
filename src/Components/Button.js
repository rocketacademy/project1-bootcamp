import React from "react";
import { Check2 } from "react-bootstrap-icons";
import { Lightbulb } from "react-bootstrap-icons";
import { Trash3 } from "react-bootstrap-icons";
import { PlusCircle } from "react-bootstrap-icons";
import { ArrowCounterclockwise } from "react-bootstrap-icons";

class Button extends React.Component {
  render() {
    const { text, type, onClickAction, buttonStyle } = this.props;

    const styles = [
      "btn-primary",
      "btn-hint",
      "btn-solve",
      "btn-newgame",
      "btn-clear",
      "btn-undo",
    ];

    const checkButtonStyle = styles.includes(buttonStyle)
      ? buttonStyle
      : styles[0];

    return (
      <button
        className={`btn ${checkButtonStyle}`}
        onClick={onClickAction}
        type={type}
      >
        {text === "Solve" ? (
          <Check2 size={20} className="solve-icon" />
        ) : text === "Hint" ? (
          <Lightbulb size={20} className="hint-icon" />
        ) : text === "Clear" ? (
          <Trash3 size={20} className="clear-icon" />
        ) : text === "Undo" ? (
          <ArrowCounterclockwise size={20} className="undo-icon" />
        ) : text === "New Game" ? (
          <PlusCircle size={20} className="newgame-icon" />
        ) : (
          text
        )}
      </button>
    );
  }
}

export default Button;
