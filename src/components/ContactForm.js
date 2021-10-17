import React from 'react';

const ContactForm = () => {
    return (

        <div className="form-wrapper">
            <h2>Contact Us</h2>
            <form>
            <fieldset>
                <label>
                    <p>Name</p>
                    <input name="name" />
                </label>
            </fieldset>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}





export default ContactForm;