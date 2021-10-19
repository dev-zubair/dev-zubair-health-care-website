import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth.js';

const ServiceDetails = () => {
    const { id } = useParams()
    const { services } = useAuth()
    const selected = services.find(service => service.id === Number(id))
    return (
        <div>
            <Container className="mt-5 mb-5 text-center">
                <Row>
                    <Col>
                        <img style={{ width: "300px" }} src={selected.img} alt="" />
                    </Col>
                    <Col>
                        <h1>{selected.name}</h1>
                        <h1>{selected.doctors}</h1>
                        <p>{selected.description}</p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ServiceDetails;