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
            < form className="w-75 mx-auto" onSubmit={submitButtonHandler}>
                <fieldset className="w-50 mx-auto">
                    <legend className="fw-bold text-primary">Your Details</legend>
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
                    <input type="date" name="date" ></input>
                    <br />
                    <label htmlFor="time">Time*:</label>
                    <input type="time" name="time" ></input>
                    <br />
                </fieldset>
                <div className="mx-auto text-center">
                    <button type="submit" className="btn btn-primary w-25">submit</button>
                </div>

            </ form>
            {/* < htmlForm action="index.html" method="post">
    

      <fieldset className="w-50 mx-auto">
        <legend><span class="number">2</span>Appointment Details</legend>
        <label  htmlFor="appointment_ htmlFor">Appointment  htmlFor*:</label>
        <select id="appointment_ htmlFor" name="appointment_ htmlFor" required>
          <option value="coffee">Coffee</option>
          <option value="meeting">Meeting</option>
          <option value="Business">Business</option>
          <option value="lunch">Lunch</option>
          <option value="skype">Skype</option>
          <option value="movie">Movie</option>
          <option value="couple_date">Date</option>
        </select>
        <label  htmlFor="appointment_description">Appointment Description:</label>
        <textarea id="appointment_description" name="appointment_description" placeholder="I wish to get an appointment to skype  htmlFor resolving a software problem."></textarea>
        <label  htmlFor="date">Date*:</label>
        <input type="date" name="date" value="" required></input>
        <br>
        <label  htmlFor="time">Time*:</label>
        <input type="time" name="time" value="" required></input>
        <br>
        <label  htmlFor="duration">How Long??(Minutes)</label>
        <input type="radio" name="duration" value="30" checked> 30
        <input type="radio" name="duration" value="60"> 60
        <input type="radio" name="duration" value="90"> 90
        <input type="radio" name="duration" value="more"> more
      </fieldset className="w-50 mx-auto">
      <button type="submit">Request  htmlFor Appointment</button>
    </ htmlForm> */}
            {/* < htmlForm className="w-75 mx-auto d-flex" >
                <div className="mx-3">
                    <input type="text" placeholder="Name" className="my-3" required />
                    <br />
                    <input type="text" placeholder="Email" className="my-3" required />
                    <br />
                    <input type="text" placeholder="Phone" className="my-3" required />
                    <br />
                    <textarea cols="40" rows="10" placeholder="Special notes" className="my-3" ></textarea>
                </div>
                <div className="mx-3">
                    <input type="radio" id="html" name="day" value="saturday" />
                    <label className=" htmlForm-check-label" html htmlFor="gridCheck1">saturday</label>
                    <br />
                    <input type="radio" id="html" name="day" value="saturday" />
                    <label className=" htmlForm-check-label" html htmlFor="gridCheck1">saturday</label>
                    <br />
                    <input type="radio" id="html" name="day" value="saturday" />
                    <label className=" htmlForm-check-label" html htmlFor="gridCheck1">saturday</label>
                    <br />
                    <input type="radio" id="html" name="day" value="saturday" />
                    <label className=" htmlForm-check-label" html htmlFor="gridCheck1">saturday</label>
                    <br />
                    <input type="radio" id="html" name="day" value="saturday" />
                    <label className=" htmlForm-check-label" html htmlFor="gridCheck1">saturday</label>
                    <br />
                    <input type="radio" id="html" name="day" value="saturday" />
                    <label className=" htmlForm-check-label" html htmlFor="gridCheck1">saturday</label>
                    <br />
                </div>
            </ htmlForm> */}
        </div>
    );
};

export default Appointment;