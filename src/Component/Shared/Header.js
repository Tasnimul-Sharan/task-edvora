import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky-top">
      <Navbar bg="primary" className="p-4" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Dream Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/orders">
                Orders
              </Nav.Link>
              <Nav.Link as={Link} to="/users">
                Users
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
