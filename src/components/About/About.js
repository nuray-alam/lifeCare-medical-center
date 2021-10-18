import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="my-5 w-75 mx-auto">
            <Row md={2} xs={1}>
                <Col>
                    <img
                        src="https://image.freepik.com/free-photo/african-doctor-specialist-using-stethoscope-listening-senior-man-heart-laying-bed-breathing-with_482257-2864.jpg" alt=""
                        className="img-fluid"
                    />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                    <div>
                        <div className="fw-bolder fs-1">
                            <h1>We Are <span className="text-primary">LifeCare</span></h1>
                            <h1>A Medical Clinic</h1>
                        </div>
                        <p>LifeCare Medical Center is a tertiary care hospital and the leading contributor of private
                            healthcare services in Bangladesh. This has been achieved only through consistent commitment to
                            improve the lives of people through utmost service excellence since its inception on 16th December, 2006. Square Hospital is one of the ventures of Square Group which is the top business group of the country.
                            The reputation of Square Hospital is the result of quality clinical outcome and comprehensive care,
                            made achievable through world class integrated healthcare facilities by highly trained professionals.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About;