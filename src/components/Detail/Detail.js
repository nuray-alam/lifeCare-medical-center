import React from 'react';
import { useHistory, useParams } from 'react-router';
import useServicesData from '../../hooks/useServicesData';

const Detail = () => {
    const { serviceId } = useParams();
    const [services] = useServicesData();
    const history = useHistory();
    let serviceToShow = services.find(service => service.id === serviceId)
    
    //back button event handler
    const handleBackButton = () => {
        history.push('/home')
    }
  
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