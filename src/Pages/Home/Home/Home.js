import React from 'react';
import Doctors from '../../Doctors/Doctors.js';
import Services from '../Services/Services.js';
import Slider from '../Slider/Slider.js';



const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;