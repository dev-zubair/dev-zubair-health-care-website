import React from 'react';
// import Doctors from './../Doctors/Doctors.js'
// import SectionBg from './../../Assets/footer/footer-bg.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import Robert from './../../Assets/doctors/robert.png';
import RobertSign from './../../Assets/doctors/sign1.png';
import Bounce from "react-reveal/Bounce";
import Zoom from 'react-reveal/Zoom';

const AboutUs = () => {
    return (
        <div>
            {/* <div style={{ background: `url(${SectionBg})`, backgroundAttachment: "fixed" }}>
                <h1 className="text-white text-center p-5">About Us</h1>
            </div> */}
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
        </div>
    );
};

export default AboutUs;