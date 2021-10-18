import React from 'react';
import './Service.css';

const Service = ({ service }) => {

    const { name, doctors, description, img } = service;

    return (
        <div className="service pb-3">
            <div className="text-center">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h5>4 {doctors}</h5>
                <p>{description}</p>
            </div>
            <div className="text-center">
                <button className="btn-danger fs-5 fw-bolder p-2 w-50">View Details</button>
            </div>
        </div>
    );
};

export default Service;