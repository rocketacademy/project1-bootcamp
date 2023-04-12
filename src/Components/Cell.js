import React from "react";

class Cell extends React.Component {
  getCellClassName = () => {
    const { cell } = this.props;
    let { row, column } = cell;
    let className = `cell 
      ${row === 2 || row === 5 ? "bottom-border" : ""}
      ${column === 2 || column === 5 ? "right-border" : ""}
      ${cell.isValid ? "" : "cell-invalid"}
      ${cell.isEditable ? "cell-editable" : ""}
      ${cell.isHinted ? "cell-hinted" : ""}
      ${cell.isEditable && cell.value !== 0 ? "cell-filled" : ""}
      `;
    return className;
  };

  render() {
    const { cell, handleClickCallback } = this.props;
    return (
      <td
        className={this.getCellClassName(cell)}
        onClick={() =>
          handleClickCallback(cell.row, cell.column, cell.isEditable)
        }
      >
        {cell.value !== 0 ? cell.value : ""}
      </td>
    );
  }
}

export default Cell;
