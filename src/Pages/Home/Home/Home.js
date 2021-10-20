import React from 'react';
import AboutUs from '../../AboutUs/AboutUs.js';
import Doctors from '../../Doctors/Doctors.js';
import Awards from '../Awards/Awards.js';
import Services from '../Services/Services.js';
import Slider from '../Slider/Slider.js';



const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <AboutUs></AboutUs>
            <Services></Services>
            <Doctors></Doctors>
            <Awards></Awards>
        </div>
    );
};

export default Home;