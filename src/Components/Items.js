import React from "react";
import { BsTrash3Fill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
export default class Items extends React.Component {
  render() {
    const items = this.props.itemsList.map((item, key) => {
      return (
        <div key={item.key}>
          <Container>
            <Form>
              <Row className="align-items-center">
                <Col xs={1}>
                  <Form.Check
                    className="input"
                    type="checkbox"
                    id={item.key}
                    value={item.isChecked}
                    onChange={() => this.props.checkItem(item.key)}
                  />
                </Col>
                <Col xs={9}>
                  <Form.Control
                    className={
                      item.isChecked ? "purchased-item-row" : "item-to-buy-row"
                    }
                    type="text"
                    id={item.key}
                    value={item.name}
                    onChange={(event) =>
                      this.props.updateItem(event.target.value, item.key)
                    }
                  />
                </Col>
                <Col xs={1} md={2}>
                  <BsTrash3Fill
                    className="icons"
                    id="trashbin"
                    onClick={() => this.props.deleteItem(key)}
                  />
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      );
    });

    return <div>{items}</div>;
  }
}
