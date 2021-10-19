import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faCopyright, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import footerLogo from './../../../Assets/footer/footer-logo.png';
import FB from './../../../Assets/footer/socialFB.png';
import Linkedin from './../../../Assets/footer/sociallinkedin.png';
import YT from './../../../Assets/footer/socialyoutube.png';
import Twitter from './../../../Assets/footer/socialtwitter.png';
import Insta from './../../../Assets/footer/socialInsta.png';
import footerBG from './../../../Assets/footer/footer-bg.jpg';



const Footer = () => {
    return (
        <div style={{ background: `url(${footerBG})` }}>
            <Container>
                <Row>
                    <Col md={3}>
                        <div>
                            <img className="mt-3 mb-4" width="200px" src={footerLogo} alt="" />
                            <ul className="list-unstyled text-white mt-3 m">
                                <li className="m-3"><FontAwesomeIcon icon={faMapMarkerAlt} /> <span className="ms-2">Tongi, Gazipur, Dhaka</span></li>
                                <li className="m-3 "><FontAwesomeIcon icon={faEnvelope} /> <span className="ms-2">zubairhmd84@gmail.com</span></li>
                                <li className="m-3 "><FontAwesomeIcon icon={faPhone} /> <span className="ms-2">01619141476</span></li>
                                <li style={{ color: "#396CF0" }} className="list-unstyled mb-3 mt-3 fw-bolder text-center"><h3>Follow Us</h3></li>

                                <a href="https://www.facebook.com/mdzubairahmed/" target="_blank" rel="noopener noreferrer"><img className="me-2 mb-3" width="50px" src={FB} alt="" /></a>

                                <a href="https://www.linkedin.com/in/devzubair/" target="_blank" rel="noopener noreferrer"><img className="me-2 mb-3" width="50px" src={Linkedin} alt="" /></a>

                                <a href="https://www.youtube.com/channel/UCYbqD8NRIw7oZOP3i9C8Q1g" target="_blank" rel="noopener noreferrer"><img className="me-2 mb-3" width="50px" src={YT} alt="" /></a>

                                <a href="https://twitter.com/technicalzuba" target="_blank" rel="noopener noreferrer"><img className="me-2 mb-3" width="50px" src={Twitter} alt="" /></a>

                                <a href="https://www.instagram.com/zubairhmd84/" target="_blank" rel="noopener noreferrer"><img className="me-2 mb-3" width="50px" src={Insta} alt="" /></a>
                            </ul>



                        </div>

                    </Col>
                    <Col md={3}>
                        <div>
                            <ul className="list-unstyled mt-3 footer-link">
                                <li style={{ color: "#396CF0" }} className="list-unstyled mb-4 mt-3 fw-bolder"><h3>Departments</h3></li>
                                <li><NavLink to="/"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">Who We Are</span></NavLink></li>
                                <li><NavLink to="/"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">Our Mission</span></NavLink></li>
                                <li><NavLink to="/"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">Awards</span></NavLink></li>
                                <li><NavLink to="/"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">Experience</span></NavLink></li>
                                <li><NavLink to="/"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">Success Story</span></NavLink></li>

                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <ul className="list-unstyled mt-3 footer-link">
                                <li style={{ color: "#396CF0" }} className="list-unstyled mb-4 mt-3 fw-bolder"><h3>Quick Links</h3></li>
                                <li><NavLink to="/home"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">Home</span></NavLink></li>
                                <li><NavLink to="/about"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">About us</span></NavLink></li>
                                <li><NavLink to="/services"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">Services</span></NavLink></li>
                                <li><NavLink to="/contact"><FontAwesomeIcon icon={faCaretRight} /> <span className="ms-1">Contact us</span></NavLink></li>

                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <li style={{ color: "#396CF0" }} className="list-unstyled mb-4 mt-3 fw-bolder"><h3>Opening Hours</h3></li>
                            <div className="list-unstyled mb-2 mt-3 text-white">
                                <li>Mon : 09:00 am - 10.00 pm</li>
                                <li>Tue : 09:00 am - 10.00 pm</li>
                                <li>Wed : 09:00 am - 10.00 pm</li>
                                <li>Thu : 09:00 am - 10.00 pm</li>
                                <li>Fri : 09:00 am - 10.00 pm</li>
                                <li>Sat : <span style={{ fontWeight: "bolder", color: "tomato" }}> Closed</span></li>
                                <li>Sun : <span style={{ fontWeight: "bolder", color: "tomato" }}> Closed</span></li>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="copyright">
                <p><FontAwesomeIcon icon={faCopyright} /> Copyright MediLink 2021 | All Right Reserved | Designed and Developed by Dev Zubair</p>
            </div>
        </div>
    );
};

export default Footer;