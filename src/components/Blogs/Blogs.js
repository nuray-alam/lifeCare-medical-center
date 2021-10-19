import React from 'react';
import { Row } from 'react-bootstrap';
import useBlogsData from '../../hooks/useBlogsData';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs] = useBlogsData();
    return (
        <div className="blogs-section my-5 px-5 mx-auto">
                <h2 className="fw-bolder text-center text-primary mb-5">Blogs</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </Row>
            </div>
    );
};

export default Blogs;