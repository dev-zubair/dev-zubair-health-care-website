import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (

        <div>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Health Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="text-white fw-bolder" as={NavLink} to="/">Home</Nav.Link>
                            <Nav.Link className="text-white fw-bolder" as={NavLink} to="/about">About Us</Nav.Link>
                            <Nav.Link className="text-white fw-bolder" as={NavLink} to="/services">Services</Nav.Link>
                            <Nav.Link className="text-white fw-bolder" as={NavLink} to="/contact">Contact Us</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;