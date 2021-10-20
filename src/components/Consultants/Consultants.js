import React from 'react';
import { Row } from 'react-bootstrap';
import useConsultantsData from '../../hooks/useConsultantsData';
import Consultant from '../Consultant/Consultant';

const Consultants = () => {
    const [consultants] = useConsultantsData();
    return (
        <div className="consultants-section my-5 px-5 mx-auto">
        <h2 className="fw-bolder text-center text-primary mb-5">Our Consultants</h2>
        <Row xs={1} md={3} lg={3} xl={4} className="g-4">
            {
                consultants.map(consultant => <Consultant key={consultant.id} consultant={consultant}></Consultant>)
            }
        </Row>
    </div>
    );
};

export default Consultants;