import Button from "react-bootstrap/Button";

export default function ShowHideButton(props) {
  return (
    <>
      <Button variant="secondary" onClick={props.handleShowHide}>
        {props.showHide === false ? "Hide ☑️" : "Show ☑️"}
      </Button>
    </>
  );
}
