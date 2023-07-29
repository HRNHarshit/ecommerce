import React from "react";
import "./contact.css";

export const Contact = () => {
    const [formStatus, setFormStatus] = React.useState("Send");

    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus("Submitting...");
        const { name, email, message } = e.target.elements;
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        console.log(conFom);
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={onSubmit}>
                <div className="contact-input">
                    <label className="form-label" htmlFor="name">
                        Name:
                    </label>
                    <input type="text" id="name" required />
                </div>
                <div className="contact-input">
                    <label className="form-label" htmlFor="email">
                        Email:
                    </label>
                    <input type="email" id="email" required />
                </div>
                <div className="contact-input">
                    <label className="form-label" htmlFor="message">
                        Message:
                    </label>
                    <textarea id="message" placeholder="Write your message here..." required />
                </div>
                <button type="submit">{formStatus}</button>
            </form>
        </div>
    );
};
