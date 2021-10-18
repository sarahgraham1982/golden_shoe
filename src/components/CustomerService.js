import React from 'react';
import ContactForm from '../components/ContactForm';
import Faq from '../components/Faq';
import '../css/CustomerService.css'

const CustomerService = () => {
    return (
        <>
            <div className="customer-service">
                <h1>CUSTOMER SERVICE</h1> 
                <Faq />
                <ContactForm /> 
            </div>                       
        </>
        
        
    );
};





export default CustomerService;