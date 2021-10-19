import React from 'react';
import { Row } from 'react-bootstrap';
import useServicesData from '../../hooks/useServicesData';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServicesData();
    return (
        <div className="services-section my-5 w-75 mx-auto">
                <h2 className="fw-bolder text-center text-primary mb-5">Our Services</h2>
                <Row xs={1} md={3} lg={3} className="g-5">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </div>
    );
};

export default Services;