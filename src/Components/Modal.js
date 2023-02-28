import React from "react";
import CloseButton from "react-bootstrap/CloseButton";
import Modal from "react-bootstrap/Modal";
import rowExample from "./images/waffle-row-example.png";
import junctionExample from "./images/waffle-junction-example.png";
import ylgyExample from "./images/waffle-oney-onegy-example.png";
import gngyExample from "./images/waffle-onegn-onegy-example.png";

export default class RulesModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            HOW TO PLAY
          </Modal.Title>
          <CloseButton variant="white" onClick={this.props.onHide} />
        </Modal.Header>
        <Modal.Body>
          <p>Solve the WAFFLE in as few moves as possible to earn toppings.</p>
          <p>
            Rearrange the letters into the correct words, horizontally or
            vertically. Click letters to swop their positions anywhere on the
            board. The letters will change color to show whether they are in the
            correct position. The number of moves remaining is displayed below
            the board.
          </p>
          <p>
            In this example, the "S"es are in the correct place. The "A" is in
            the word, but in a different position. <br />
            <img src={rowExample} alt="waffle-row-example" />
          </p>
          <p>
            When the yellow letter is on a corner, either the vertical word or
            the horizontal word contains this letter.
            <br />
            <img
              src={junctionExample}
              alt="waffle-junction-example"
              style={{ maxWidth: "150px" }}
            />
          </p>{" "}
          <br />
          <h4>SPECIAL CASES</h4>
          <h6>THE SAME LETTER MULTIPLE TIMES IN ONE WORD</h6>
          <p>
            In this case, the word must contain only one "L", as the first is
            yellow but the second is grey. Neither of them are in the correct
            position. <br />
            <img src={ylgyExample} alt="waffle-oney-onegy-example" />
          </p>
          <p>
            Once we have an "L" in the correct place, the first "L" is no longer
            needed in the word, so, it is no longer yellow. <br />
            <img src={gngyExample} alt="waffle-onegn-onegy-example" />
          </p>
        </Modal.Body>
        <Modal.Footer>
          Built by <a href="https://github.com/peanutyabing">peanutyabing</a> |
          Created by <a href="https://twitter.com/jamesjessian">jessian</a> |
          Original game at <a href="https://wafflegame.net/">wafflegame.net</a>
        </Modal.Footer>
      </Modal>
    );
  }
}
