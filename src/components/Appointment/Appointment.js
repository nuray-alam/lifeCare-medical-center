import React from 'react';
import { useHistory } from 'react-router';
import './Appointment.css'
const Appointment = () => {

    const history = useHistory()
    const submitButtonHandler = () => {
        history.push('/appointmentConfirmation')
    }
    return (
        <div className="appointment-section my-5">
            < form className="w-50 mx-auto border p-3 border-primary rounded" onSubmit={submitButtonHandler}>
                <h3 className="text-center text-primary border-bottom pb-2">Make your Appointment</h3>
                <fieldset className="w-50 mx-auto">
                    <legend className="">Your Details</legend>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="user_name" required placeholder="required" />
                    <label htmlFor="mail">Email: </label>
                    <input type="email" id="mail" name="user_email"></input>

                    <label htmlFor="tel">Contact Number:</label>
                    <input type="tel" id="tel" name="user_number" required placeholder="required" />

                </fieldset>
                <fieldset className="w-50 mx-auto">
                    <legend>Appointment Details</legend>
                    <label htmlFor="department">Department</label>
                    <select id="department" name="department" required>
                        <option value="Neurology">Neurology</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Cancer Specialist">Cancer Specialist</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Dental">Dental</option>
                        <option value="Rheumatology">Rheumatology</option>
                    </select>
                    <label htmlFor="specialists">Specialists</label>
                    <select id="specialist" name="specialist" required>
                        <option value="Dr. Lloyd Wilson">Dr. Lloyd Wilson</option>
                        <option value="Dr. Rachel Parker">Dr. Rachel Parker</option>
                        <option value="Dr. Alicia Henderson">Dr. Alicia Henderson</option>
                        <option value="Dr Emili Craythorne">Dr Emili Craythorne</option>
                        <option value="Dr Jessica JonesDental">Dr Jessica Jones</option>
                        <option value="Dr Ahel Natasha">Dr Ahel Natasha</option>
                        <option value="Dr Gabriela Beckett">Dr Gabriela Beckett</option>
                    </select>
                    <label htmlFor="small-description">Small Description:</label>
                    <textarea id="appointment_description" name="appointment_description" placeholder="example: I have fever for few days."></textarea>
                    <label htmlFor="date">Date*:</label>
                    <input type="date" name="date" required></input>
                    <br />
                    <label htmlFor="time">Time*:</label>
                    <input type="time" name="time" required ></input>
                    <br />
                </fieldset>
                <div className="mx-auto text-center">
                    <button type="submit" className="btn btn-primary w-25">submit</button>
                </div>

            </ form>

        </div>
    );
};

export default Appointment;