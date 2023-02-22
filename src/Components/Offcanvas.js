import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export default class Menu extends React.Component {
  // handleClick = (e) => {

  // };

  render() {
    return (
      <>
        <Offcanvas {...this.props}>
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title>MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="menu-selection" onClick={this.props.onClick}>
              DAILY WAFFLE
            </div>
            <div className="menu-selection" onClick={this.props.onClick}>
              WAFFLE BUFFET
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}
