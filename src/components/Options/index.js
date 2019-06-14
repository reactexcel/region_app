import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class index extends Component {
  render() {
    return (
      <div className="mt-5">
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link>
              <Link to="/options/region">
                <Button>Region</Button>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" disabled>
              <Button>Site</Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" disabled>
              <Button>Activity</Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              <Button>Work Station</Button>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              <Button>Competence</Button>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
