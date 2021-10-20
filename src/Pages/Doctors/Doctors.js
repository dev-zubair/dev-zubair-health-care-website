import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import doctor1 from './../../Assets/doctors/doctor-1.jpg';
import doctor2 from './../../Assets/doctors/doctor-2.jpg';
import doctor3 from './../../Assets/doctors/doctor-3.jpg';
import Robert from './../../Assets/doctors/robert.png';
import RobertSign from './../../Assets/doctors/sign1.png';
import Bounce from "react-reveal/Bounce";
import Zoom from 'react-reveal/Zoom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Doctors = () => {
    return (
        <div>

            <Container className="mt-5">
                <Row>
                    <Col>
                        <Zoom bottom>
                            <img style={{ width: "350px" }} className="mx-auto" src={Robert} alt="" />
                        </Zoom>
                    </Col>

                    <Col className="mt-5">
                        <div>
                            <Bounce left>
                                <h1 className="text-center">Welcome To MediLink. <br />
                                    Central Hospital</h1>
                                <h5 className="mt-4" >We make every effort to ensure highest level of integrity in doing business. We treat honesty, truth and fairness as the building block of our entrepreneurship. </h5>
                            </Bounce>
                            <Bounce right cascade>
                                <p>MediLink Central Hospital is one of the largest and most recognized private healthcare brands in Bangladesh. Known for its pioneering works in setting-up the first super-specialty Cardiac hospital within country. MediLink Central Hospital is also widely acknowledged for bringing high quality diagnostic & specialized consultation facilities under a single roof through its now ubiquitous centers in all corners of Bangladesh.</p>
                            </Bounce>
                            <Bounce right bottom>
                                <img className="mt-3 mb-5" src={RobertSign} alt="" />
                            </Bounce>
                        </div>
                    </Col>
                </Row >
            </Container >

            <Container >
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