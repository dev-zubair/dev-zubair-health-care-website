import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import doctor1 from './../../Assets/doctors/doctor-1.jpg';
import doctor2 from './../../Assets/doctors/doctor-2.jpg';
import doctor3 from './../../Assets/doctors/doctor-3.jpg';
import Robert from './../../Assets/doctors/robert.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Doctors = () => {
    return (
        <div>

            <Container className="mt-5">
                <Row>
                    <Col>
                        <img style={{ width: "350px" }} src={Robert} alt="" />
                    </Col>

                    <Col className="d-flex align-content-center justify-content-center align-items-center mt-5">
                        <div>
                            <h1 className="text-center mb-5">Welcome To MediLink. <br />
                                Central Hospital</h1>
                            <p>MediLink Central Hospital is one of the largest and most recognized private healthcare brands in Bangladesh. Known for its pioneering works in setting-up the first super-specialty Cardiac hospital within country. MediLink Central Hospital is also widely acknowledged for bringing high quality diagnostic & specialized consultation facilities under a single roof through its now ubiquitous centers in all corners of Bangladesh.</p>
                        </div>
                    </Col>
                </Row >
            </Container >

            <Container >
                <Row>
                    <h1 className="text-center mt-4 mb-4">Our Doctors</h1>
                    <Col className="text-center">
                        <Card className="text-center p-5 mb-4" style={{ backgroundColor: "#0f2738", width: '22rem', border: "0" }}>
                            <Image src={doctor1} roundedCircle />
                            <Card.Body className="text-white">
                                <Card.Title>Dr. Jason Roy</Card.Title>
                                <Card.Text>Neurology</Card.Text>
                                <div className="fs-3">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                    <FontAwesomeIcon className="mx-2" icon={faTwitterSquare} />
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col className="text-center">
                        <Card className="text-center p-5 mb-4" style={{ backgroundColor: "#0f2738", width: '22rem', border: "0" }}>
                            <Image src={doctor2} roundedCircle />
                            <Card.Body className="text-white">
                                <Card.Title>Dr. Zinia Zara</Card.Title>
                                <Card.Text>Gynecology</Card.Text>
                                <div className="fs-3">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                    <FontAwesomeIcon className="mx-2" icon={faTwitterSquare} />
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="text-center">
                        <Card className="text-center p-5 mb-4" style={{ backgroundColor: "#0f2738", width: '22rem', border: "0" }}>
                            <Image src={doctor3} roundedCircle />
                            <Card.Body className="text-white">
                                <Card.Title>Dr. Mark Willy</Card.Title>
                                <Card.Text>Associate Eye</Card.Text>
                                <div className="fs-3">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                    <FontAwesomeIcon className="mx-2" icon={faTwitterSquare} />
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;