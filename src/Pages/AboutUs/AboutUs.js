import React from 'react';
import Doctors from './../Doctors/Doctors.js'
import SectionBg from './../../Assets/footer/footer-bg.jpg';

const AboutUs = () => {
    return (
        <div>
            <div style={{ background: `url(${SectionBg})`, backgroundAttachment: "fixed" }}>
                <h1 className="text-white text-center p-5">About Us</h1>
            </div>
            <Doctors></Doctors>
        </div>
    );
};

export default AboutUs;