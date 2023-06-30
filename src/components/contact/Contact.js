import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    debugger;
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p6o8boc",
        "template_xdzfb7f",
        form.current,
        "Tt_qXqBqBdSrQv2GB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <div className="contact-padding">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label className="contact-label">Name</label>
          <input className="contact-input" type="text" name="user_name" />
          <label className="contact-label">Email</label>
          <input className="contact-input" type="email" name="user_email" />
          <label className="contact-label">Message</label>
          <textarea className="contact-textarea" name="message" />
          <input className="contact-input contact-button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
