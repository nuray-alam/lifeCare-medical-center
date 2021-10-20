import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.webpackaging.com/up/comp/3210/header-image.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="text-dark">BEST FOR CORPORATE HEALTH CHECKUP</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/P4sX8xF/best-hospital.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className="text-dark">OVER 100 MULTI-DISCIPLINARY SPECIALISTS</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/s197Q27/Medical-Healthcare-Concept-Doctor-in-hospital-with-digital-medical-icons-graphic-banner-showing-symb.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className="text-dark">STATE OF THE ART TECHNOLOGY AND EXPERTISE</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;