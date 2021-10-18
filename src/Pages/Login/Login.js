import React from 'react';
import { Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import google from './../../Assets/icons/google.png';
import github from './../../Assets/icons/github.png';
import { NavLink } from 'react-router-dom';


const Login = () => {
    return (
        <Container>
            <div className="text-center my-4">
                <h2>Please Login</h2>
                <h5 className=" mt-2">Login with Email & Password</h5>
                <p className="text-danger text-center">{ }</p>
                <div className="form-container mx-auto">
                    <Form>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="email" visuallyHidden>
                                    Your Email Address
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl type="email" autoComplete="current-email" id="email" placeholder="Enter your email address"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col className="text-start">
                                <Form.Label htmlFor="password" visuallyHidden>
                                    Your Password
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                    </InputGroup.Text>
                                    <FormControl type="password" autoComplete="current-password" id="password" placeholder="Enter your password"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>

                        <button type="submit" className="mt-2 w-100 btn-style">
                            Login
                        </button>
                        <button type="submit" className="mt-2 w-100 signup-btn">
                            <NavLink className="text-decoration-none" to="/signup"><p>Need an Account? Please Sign up!</p></NavLink>
                        </button>
                    </Form>
                </div>

                <p className="mt-4"><h2>Or Login with</h2></p>
                <div>
                    <button className="btn">
                        <img src={google} width="46px" alt="google-icon" />
                    </button>
                    {/* <button  className="btn">
                    <img width="50px" src={facebook} alt="facebook-icon" />
                </button> */}
                    <button className="btn"> <img width="55px"
                        src={github}
                        alt="github-icon"
                    />
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Login;
