import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ShowHideButton(props) {
  return (
    <>
      <Button variant="secondary" onClick={props.handleShowHide}>
        Show/Hide
      </Button>
    </>
  );
}
