import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'
const Service = (props) => {
    const { id, name, img, description } = props.service;

    const history = useHistory();
    const handleDetailButton = () => {
        const detailUrl = "/detail/" + id;
        history.push(detailUrl)
    }
    return (
        <Col>
            <div className="service text-center py-2 px-3">
                <img src={img} className="img-fluid" alt="" />
                <h4 className="text-primary">{name}</h4>
                <p>{description}</p>
                <button onClick={handleDetailButton} className="btn btn-outline-primary">Detail</button>
            </div>
        </Col>
    );
};

export default Service;