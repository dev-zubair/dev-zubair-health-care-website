import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import doctor1 from './../../Assets/doctors/doctor-1.jpg';
import doctor2 from './../../Assets/doctors/doctor-2.jpg';
import doctor3 from './../../Assets/doctors/doctor-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';




const Doctors = () => {
    return (
        <div style={{ backgroundColor: "#0f2738" }}>
            <Container >
                <Row>
                    <h1 className="text-center text-white mt-4 mb-4">Our Doctors</h1>
                    <Col className="text-center">
                        <Card className="bg-primary text-center p-5 mb-4" style={{ width: '22rem', border: "0" }}>
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
                        <Card className="bg-primary text-center p-5 mb-4" style={{ width: '22rem', border: "0" }}>
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
                        <Card className="bg-primary text-center p-5 mb-4" style={{ width: '22rem', border: "0" }}>
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