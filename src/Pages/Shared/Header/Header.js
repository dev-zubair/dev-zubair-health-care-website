import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import headerLogo from './../../../Assets/footer/main-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHome, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import FB from './../../../Assets/footer/socialFB.png';
import Linkedin from './../../../Assets/footer/sociallinkedin.png';
import YT from './../../../Assets/footer/socialyoutube.png';
import Twitter from './../../../Assets/footer/socialtwitter.png';
import Insta from './../../../Assets/footer/socialInsta.png';


const Header = () => {
    return (

        <div style={{ backgroundColor: "#396CF0" }}>
            <Container>
                <Row className="text-white text-center fs-6 p-1 align-items-center fw-bolder">
                    <Col md={3}><FontAwesomeIcon icon={faMapMarkerAlt} /> Tongi, Gazipur, Dhaka</Col>
                    <Col md={3}><FontAwesomeIcon icon={faMobileAlt} /> Any Question: +8801619141476</Col>
                    <Col md={3}><FontAwesomeIcon icon={faClock} /> Mon - Fri:   9.00am - 10.00pm</Col>
                    <Col md={3}>
                        <a href="https://www.facebook.com/mdzubairahmed/" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={FB} alt="" /></a>

                        <a href="https://www.linkedin.com/in/devzubair/" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={Linkedin} alt="" /></a>

                        <a href="https://www.youtube.com/channel/UCYbqD8NRIw7oZOP3i9C8Q1g" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={YT} alt="" /></a>

                        <a href="https://twitter.com/technicalzuba" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={Twitter} alt="" /></a>

                        <a href="https://www.instagram.com/zubairhmd84/" target="_blank" rel="noopener noreferrer"><img className="me-2" width="35px" src={Insta} alt="" /></a>
                    </Col>
                </Row>
            </Container>
            <Navbar style={{ backgroundColor: "#008CB4" }} expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={headerLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="text-white fw-bolder" as={NavLink} to="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
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
        </div >
    );
};

export default Header;