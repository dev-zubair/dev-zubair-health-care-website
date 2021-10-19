import React from 'react';
import { Carousel } from 'react-bootstrap';

import Slider1 from './../../../Assets/Slider/slider-1.jpg';
import Slider2 from './../../../Assets/Slider/slider-2.jpg';
import Slider3 from './../../../Assets/Slider/slider-3.jpg';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Welcome To MediLink Hospital</h1>
                        {/* <p>Care for patients since 1832.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>We Take Care Of Your Healthy Health</h1>
                        {/* <p>Full spectrum of heart disease and disorders</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-dark">
                        <h1>World-Class Primary Care Services</h1>
                        {/* <p>Your primary care physician is the leader of your health care team. </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;