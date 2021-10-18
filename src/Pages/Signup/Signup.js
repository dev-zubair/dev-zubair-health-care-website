import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    Col,
    Form,
    FormControl,
    InputGroup,
    Row,
} from "react-bootstrap";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import './Signup.css';


const SignUp = () => {
    return (
        <div className="text-center my-4">
            <h2>Please Sign Up</h2>
            <p className=" mt-2">Sign Up with Email & Password</p>
            <p className="text-danger text-center"></p>
            <div className="w-25 mx-auto">
                <Form>
                    <Row>
                        <Col className="text-start">
                            <Form.Label htmlFor="name" visuallyHidden>
                                Your Name
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </InputGroup.Text>
                                <FormControl
                                    type="text"
                                    autoComplete="current-text"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

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
                                <FormControl
                                    type="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <button type="submit" className="mt-2 w-100 btn-style">
                        Sign Up
                    </button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/login">
                    Already have an account? Please login!
                </NavLink>
            </p>

        </div>
    );
};

export default SignUp;