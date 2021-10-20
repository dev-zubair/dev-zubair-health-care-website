import React from 'react';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Zoom from "react-reveal/Zoom";

const Service = ({ service }) => {

    const { name, doctors, id, description, img } = service;

    return (
        <Zoom>
            <div className="service pb-3">
                <div className="text-center ">
                    <img src={img} alt="" />
                    <h3>{name}</h3>
                    <h5><FontAwesomeIcon icon={faUserMd} /> 4 {doctors}</h5>
                    <p>{description}</p>
                </div>
                <div className="text-center">
                    <Link to={`/services/${id}`}><button className="btn-style">Book An Appoingment</button></Link>
                </div>
            </div>
        </Zoom>

    );
};

export default Service;