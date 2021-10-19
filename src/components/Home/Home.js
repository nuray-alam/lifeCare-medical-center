import React from 'react';
import { Row } from 'react-bootstrap';
import useBlogsData from '../../hooks/useBlogsData';
import useConsultantsData from '../../hooks/useConsultantsData';
import useServicesData from '../../hooks/useServicesData';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Consultant from '../Consultant/Consultant';
import Service from '../Service/Service';

const Home = () => {
    const [services] = useServicesData();
    const [consultants] = useConsultantsData();
    const [blogs] = useBlogsData();
    return (
        <div>
            <Banner></Banner>
            {/* service section */}
            <div className="services-section my-5 w-75 mx-auto">
                <h2 className="fw-bolder text-center text-primary mb-5">Our Services</h2>
                <Row xs={1} md={3} lg={3} className="g-5">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </div>
            {/* consultants section */}
            <div className="consultants-section my-5 px-5 mx-auto">
                <h2 className="fw-bolder text-center text-primary mb-5">Our Consultants</h2>
                <Row xs={1} md={3} lg={4} className="g-4">
                    {
                        consultants.map(consultant => <Consultant key={consultant.id} consultant={consultant}></Consultant>)
                    }
                </Row>
            </div>
            {/* blogs section */}
            <div className="blogs-section my-5 px-5 mx-auto">
                <h2 className="fw-bolder text-center text-primary mb-5">Blogs</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;