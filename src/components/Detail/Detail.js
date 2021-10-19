import React from 'react';
import { useHistory, useParams } from 'react-router';
import useServicesData from '../../hooks/useServicesData';
import './Detail.css'
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
        <div className="detail w-50 my-5 mx-auto text-center border p-3">
            <img className="img-fluid" src={serviceToShow?.img} alt="" />
            <h2>{serviceToShow?.name}</h2>
            <p>{serviceToShow?.description}</p>
            {
                serviceToShow?.moreDetail.map(detail => <li className="detail-li border py-3 my-3 rounded-2 list-group-item">{detail}</li>)
            }
            <button className="btn btn-outline-primary" onClick={handleBackButton}>Back</button>
        </div>
    );
};

export default Detail;