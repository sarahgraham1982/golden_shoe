import React from 'react';
import {Link} from 'react-router-dom'
import '../css/ContactForm.css'

const ContactForm = () => {
    return (

        <div className="form-wrapper">
            <h2>Get in Touch</h2>
            <h3>Call 0800 800 800 9am-5pm, Mon-Fri.</h3>
            <h4>Alternatively send us a message below and we will reply within 24hours.</h4>
            <form>
            <fieldset>
                <label>
                    <p>Name</p>
                    <input name="name" size="50" />
                </label>
                <label>
                    <p>Email</p>
                    <input name="email" size="50" />
                </label>
                <label>
                    <p>Message</p>
                    {/* <input name="message" type="text"  /> */}
                    <textarea rows="5" cols="42" ></textarea>
                </label>
            </fieldset>
            <Link to='/success'>
            <button type="button" className="button-title">Submit</button>
            </Link>
            </form>
        </div>
    )
}





export default ContactForm;



