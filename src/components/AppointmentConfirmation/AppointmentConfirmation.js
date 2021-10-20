import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AppointmentConfirmation = () => {
    return (
        <Row xs={1} sm={1} md={1} lg={2} className="mx-auto">
            <Col>
                <img className="img-fluid" src="https://image.freepik.com/free-vector/man-booking-appointment-smartphone_23-2148562877.jpg" alt="" />
            </Col>
            <Col className="d-flex align-items-center">
                <h1 className="text-primary">Your Appointment has been Confirmed.</h1>
            </Col>
        </Row>
    );
};

export default AppointmentConfirmation;