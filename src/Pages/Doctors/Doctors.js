import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import doctor1 from './../../Assets/doctors/doctor-1.jpg';
import doctor2 from './../../Assets/doctors/doctor-2.jpg';
import doctor3 from './../../Assets/doctors/doctor-3.jpg';
import Bounce from "react-reveal/Bounce";
import Zoom from 'react-reveal/Zoom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Doctors = () => {
    return (
        <div>
            <Container className="mt-5" >
                <Row>
                    <Zoom right cascade>
                        <h1 className="text-center">Meet Our Experienced Team</h1>
                    </Zoom>
                    <Zoom left cascade>
                        <p className="my-4 mt-2 text-center text-muted fs-5">
                            Our Dedicated Doctors Team
                        </p>
                    </Zoom>
                    <Col lg={4} md={4} sm={12} className="text-center">
                        <Bounce left>
                            <Card className="text-center p-5 mb-4" style={{ backgroundColor: "#0f2738", border: "0" }}>
                                <Image src={doctor1} roundedCircle />
                                <Card.Body className="text-white">
                                    <Card.Title>Dr. Jason Roy</Card.Title>
                                    <Card.Text>Neurology</Card.Text>
                                    <div className="fs-3">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                        <FontAwesomeIcon className="mx-2" icon={faTwitterSquare} />
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between mb-3">
                                        <Col>
                                            Mon - Tues <br />
                                            Fri - Sat<br />
                                            Sun - Mon<br />
                                        </Col>
                                        <Col>
                                            10Am - 5Pm<br />
                                            10Am - 5Pm<br />
                                            10Am - 5Pm<br />
                                        </Col>
                                    </div>
                                    <div className="text-center">
                                        <Link to='/contact'><button className="btn-style">Get Appoingment</button></Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Bounce>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="text-center">
                        <Bounce bottom>
                            <Card className="text-center p-5 mb-4" style={{ backgroundColor: "#0f2738", border: "0" }}>
                                <Image src={doctor2} roundedCircle />
                                <Card.Body className="text-white">
                                    <Card.Title>Dr. Zinia Zara</Card.Title>
                                    <Card.Text>Gynecology</Card.Text>
                                    <div className="fs-3">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                        <FontAwesomeIcon className="mx-2" icon={faTwitterSquare} />
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between mb-3">
                                        <Col>
                                            Mon - Tues <br />
                                            Fri - Sat<br />
                                            Sun - Mon<br />
                                        </Col>
                                        <Col>
                                            10Am - 5Pm<br />
                                            10Am - 5Pm<br />
                                            10Am - 5Pm<br />
                                        </Col>
                                    </div>
                                    <div className="text-center">
                                        <Link to='/contact'><button className="btn-style">Get Appoingment</button></Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Bounce>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="text-center">
                        <Bounce right>
                            <Card className="text-center p-5 mb-4" style={{ backgroundColor: "#0f2738", border: "0" }}>
                                <Image src={doctor3} roundedCircle />
                                <Card.Body className="text-white">
                                    <Card.Title>Dr. Mark Willy</Card.Title>
                                    <Card.Text>Associate Eye</Card.Text>
                                    <div className="fs-3">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                        <FontAwesomeIcon className="mx-2" icon={faTwitterSquare} />
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between mb-3">
                                        <Col>
                                            Mon - Tues <br />
                                            Fri - Sat<br />
                                            Sun - Mon<br />
                                        </Col>
                                        <Col>
                                            10Am - 5Pm<br />
                                            10Am - 5Pm<br />
                                            10Am - 5Pm<br />
                                        </Col>
                                    </div>
                                    <div className="text-center">
                                        <Link to='/contact'><button className="btn-style">Get Appoingment</button></Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;