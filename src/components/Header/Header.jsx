import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

import PropTypes from "prop-types";

function Header({ logo }) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      stick="top"
      className="color-black"
    >
      <Container className="color-black">
        <Navbar.Brand>
          <Link to="/home">
            <Image src={logo} />
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/home" exact="true">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/instruments">
            Instruments
          </Nav.Link>
          <Nav.Link as={NavLink} to="/price">
            Price
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
