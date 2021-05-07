import React from "react";
import ContactForm from "./Contactform";

function ContactPage() {
    return (
        <>
            <div className="formBackground" id="contactPage">
                <div className="formContainer">
                    <h2>Contact Us</h2>
                    <ContactForm />
                </div>
            </div>
               
           
        </>
    );
}
export default ContactPage;