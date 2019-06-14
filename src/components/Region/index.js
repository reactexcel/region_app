import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default class Region extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          text: "Cras justo odio",
          checked: false
        },
        {
          text: "Dapibus ac facilisis in",
          checked: false
        },
        {
          text: "Morbi leo risus",
          checked: false
        }
      ],
      text: ""
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.trim()) {
      this.setState({
        list: [...this.state.list, { text: this.state.text, checked: false }],
        text: ""
      });
    }
  };
  handleChecked = i => {
    const data = this.state.list;
    data[i].checked = !data[i].checked;
    this.setState({
      list: data
    });
  };
  handleDelete = () => {
    this.setState({
      list: this.state.list.filter((v, i) => !v.checked)
    });
  };
  render() {
    const { list, text } = this.state;
    const { title } = this.props;
    console.log(this.props);
    return (
      <div className="mt-5">
        <Row>
          {title}
          <Col md={3}>
            <div>
              <Button className="w-50" onClick={this.handleSubmit}>
                Add
              </Button>
            </div>
            <div className="mt-2">
              <Button
                variant="danger"
                className="w-50"
                onClick={this.handleDelete}
              >
                Delete
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGroupEmail">
              <Form.Control
                type="text"
                value={text}
                placeholder={title ? title : ""}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <div className="mx-auto text-left">
              <ListGroup>
                {list.map((v, i) => (
                  <ListGroup.Item key={i}>
                    <input
                      type="checkbox"
                      checked={v.checked}
                      onChange={e => {
                        this.handleChecked(i);
                      }}
                    />
                    {v.text}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
