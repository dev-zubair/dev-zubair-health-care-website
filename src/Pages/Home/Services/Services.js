// import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth.js';
import Service from '../Service/Service.js';
import './Services.css'

const Services = () => {

    const { services } = useAuth()
    console.log(services);

    return (
        <div>
            <Container>
                <h1 className="text-center m-3">Our Services</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Services;