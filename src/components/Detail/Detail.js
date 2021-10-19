import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useServicesData from '../../hooks/useServicesData';

const Detail = () => {
    const { serviceId } = useParams();
    const [services] = useServicesData();
    const history = useHistory()
    const handleBackButton = () => {
        history.push('/home')
    }
    let serviceToShow = services.find(service => service.id === serviceId)
    return (
        <div className="detail w-50 my-5 mx-auto text-center">
            <img className="img-fluid" src={serviceToShow?.img} alt="" />
            <h2>{serviceToShow?.name}</h2>
            <p>{serviceToShow?.description}</p>
            <button className="btn btn-outline-primary" onClick={handleBackButton}>Back</button>
        </div>
    );
};

export default Detail;