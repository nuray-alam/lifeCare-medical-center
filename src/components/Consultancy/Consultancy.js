import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Consultancy.css'
const Consultancy = () => {
    return (
        <Row lg={2} md={1} xs={1} className="consultancy-section my-5 px-3">
            <Col>
                <img className="img-fluid" src="https://www.ghp-news.com/pages/46224018-dadc-4fe5-b21a-91d5c60e419c/e5ccf5a7-f257-44a3-bfc5-0c6dcb6e8eec/img_2_3b00685d-4682-4cbc-a522-a343b00994a9.png" alt="" />
            </Col>
            <Col className="my-3">
                < form className="w-75 mx-auto" >
                    <fieldset className="mx-auto">
                        <label htmlFor="department">Department</label>
                        <select id="department" name="department" className="mb-3" required>
                            <option value="Neurology">Neurology</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Cancer Specialist">Cancer Specialist</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Dental">Dental</option>
                            <option value="Rheumatology">Rheumatology</option>
                        </select>
                        <label htmlFor="specialists">Specialists</label>
                        <select id="specialist" name="specialist" required className="mb-3">
                            <option value="Dr. Lloyd Wilson">Dr. Lloyd Wilson</option>
                            <option value="Dr. Rachel Parker">Dr. Rachel Parker</option>
                            <option value="Dr. Alicia Henderson">Dr. Alicia Henderson</option>
                            <option value="Dr Emili Craythorne">Dr Emili Craythorne</option>
                            <option value="Dr Jessica JonesDental">Dr Jessica Jones</option>
                            <option value="Dr Ahel Natasha">Dr Ahel Natasha</option>
                            <option value="Dr Gabriela Beckett">Dr Gabriela Beckett</option>
                        </select>
                        <label htmlFor="small-description">Tell us your about your health</label>
                        <textarea id="appointment_description" name="appointment_description" placeholder="example@Having a bad headache for two days" className="mb-3"></textarea>
                    </fieldset>
                </ form>
                <div className="mx-auto text-center">
                        <button className="btn btn-primary w-25">Send</button>
                    </div>

            </Col>

        </Row>
    );
};

export default Consultancy;