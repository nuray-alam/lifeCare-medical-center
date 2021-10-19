import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Consultants from '../Consultants/Consultants';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* Banner section */}
            <Banner></Banner>
            {/* service section */}
            <Services></Services>
            {/* Consultants section */}
            <Consultants></Consultants>
            {/* Blogs section */}
            <Blogs></Blogs>
          
        </div>
    );
};

export default Home;