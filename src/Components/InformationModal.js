import React from "react";

class InformationModal extends React.Component {
  render() {
    const { closeModal } = this.props;
    return (
      <div className="info-modal-ctn">
        <div className="modal-ctn" id="info-modal-ctn">
          <div className="modal-close-btn-ctn">
            <button onClick={closeModal}>&times;</button>
          </div>
          <div className="modal-title">
            <h2>How to Play Sudoku</h2>
          </div>
          <div className="modal-body" id="sudoku-rules">
            <p>
              A Sudoku board consists of 9 rows, 9 columns and 9 squares. All
              you need to do is place the numbers 1 to 9 on the grid without
              repeating the same number on the same row, column, or square.
              That's it!
            </p>
            <p>For further information, check out:</p>
            <p className="links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://sudoku.com/sudoku-rules/"
              >
                Official Sudoku rules
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InformationModal;
