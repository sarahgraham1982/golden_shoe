import React from 'react';

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
                    <input name="name" />
                </label>
                <label>
                    <p>Email</p>
                    <input name="name" />
                </label>
                <label>
                    <p>Message</p>
                    <input name="name" />
                </label>
            </fieldset>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}





export default ContactForm;