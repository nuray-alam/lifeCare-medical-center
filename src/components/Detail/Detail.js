import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is detail component</h2>
            <h4>ID: {serviceId}</h4>
        </div>
    );
};

export default Detail;