import React from 'react';

const Appointment = () => {
    return (
        <div>
            <h2>This is appointment component</h2>
            <form className="w-75 mx-auto d-flex" >
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
                    <label className="form-check-label" htmlFor="gridCheck1">saturday</label>
                    <br />
                    <input type="radio" id="html" name="day" value="saturday" />
                    <label className="form-check-label" htmlFor="gridCheck1">saturday</label>
                    <br />
                    <input type="radio" id="html" name="day" value="saturday" />
                    <label className="form-check-label" htmlFor="gridCheck1">saturday</label>
                    <br />
                    <input type="radio" id="html" name="day" value="saturday" />
                    <label className="form-check-label" htmlFor="gridCheck1">saturday</label>
                    <br />
                    <input type="radio" id="html" name="day" value="saturday" />
                    <label className="form-check-label" htmlFor="gridCheck1">saturday</label>
                    <br />
                    <input type="radio" id="html" name="day" value="saturday" />
                    <label className="form-check-label" htmlFor="gridCheck1">saturday</label>
                    <br />
                </div>
            </form>
        </div>
    );
};

export default Appointment;