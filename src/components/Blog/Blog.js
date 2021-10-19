import React from 'react';
import { Col } from 'react-bootstrap';
import './Blog.css'

const Blog = (props) => {
    const { img,title,description } = props.blog;
    return (
        <div>
            <Col>
                <div className="blog text-center py-2 px-3">
                    <img src={img} className="img-fluid" alt="" />
                    <h4 className="text-dark mt-3">{title}</h4>
                    <p>{description}</p>
                    {/* <button onClick={handleDetailButton} className="btn btn-outline-primary">Detail</button> */}
                </div>
            </Col>
        </div>
    );
};

export default Blog;