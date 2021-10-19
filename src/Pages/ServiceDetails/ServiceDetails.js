import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth.js';

const ServiceDetails = () => {
    const { id } = useParams()
    const { services } = useAuth()
    const selected = services.find(service => service.id === Number(id))
    return (
        <div>
            <Container>
                <h1>{selected.name}</h1>
            </Container>
        </div>
    );
};

export default ServiceDetails;