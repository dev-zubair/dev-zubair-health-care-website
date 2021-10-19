import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import headerLogo from './../../../Assets/footer/main-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import FB from './../../../Assets/footer/socialFB.png';
import Linkedin from './../../../Assets/footer/sociallinkedin.png';
import YT from './../../../Assets/footer/socialyoutube.png';
import Twitter from './../../../Assets/footer/socialtwitter.png';
import Insta from './../../../Assets/footer/socialInsta.png';
import './Header.css';
import useAuth from './../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();

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
            <Navbar style={{ backgroundColor: "lightseagreen" }} expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink s={NavLink} to="/"><img src={headerLogo} alt="" /></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center ">
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/"> Home</Nav.Link>
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/about">About Us</Nav.Link>
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/services">Services</Nav.Link>
                            <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/contact">Contact Us</Nav.Link>
                            {user.displayName && <p style={{ color: "blue" }}>Welcome {user.displayName}</p>}:
                            {user.displayName ?
                                <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/signup"><button className="btn-style" onClick={logOut}>Sign Out</button></Nav.Link>
                                :
                                <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/login"><button className="btn-style">Login</button></Nav.Link>}
                            {/* <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/signup"><button className="btn-style">Sign up</button></Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;