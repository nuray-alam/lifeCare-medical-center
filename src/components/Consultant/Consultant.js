import React from 'react';
import { Col } from 'react-bootstrap';
import './Consultant.css'

const Consultant = (props) => {
    const { name, expertise, img, description } = props.consultant;
    return (
        <div>
            <Col>
                <div className="consultant text-center py-2 px-3">
                    <img src={img} className="img-fluid" alt="" />
                    <h4 className="text-dark mt-3">{name}</h4>
                    <h5 className="text-primary">{expertise}</h5>
                    <p>{description}</p>
                    {/* <button onClick={handleDetailButton} className="btn btn-outline-primary">Detail</button> */}
                </div>
            </Col>
        </div>
    );
};

export default Consultant;