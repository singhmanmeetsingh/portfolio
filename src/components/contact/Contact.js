import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Git from "../../assets/git.svg";
import Link from "../../assets/link.svg";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
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
          toast.success("Email Sent !", {
            position: toast.POSITION.TOP_CENTER
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };
  return (
    <div className="contact-container">
      <div className="contact-padding">
        <h1>Contact And Socials</h1>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label className="contact-label">Name</label>
          <input className="contact-input" type="text" name="user_name" />
          <label className="contact-label">Email</label>
          <input className="contact-input" type="email" name="user_email" />
          <label className="contact-label">Message</label>
          <textarea className="contact-textarea" name="message" />
          <input
            className="contact-input contact-button"
            type="submit"
            value="Send"
          />
        </form>
        <div className="contact-socials">
            <div className="contact-section">Tel : 705-241-1972</div>
            <div className="contact-section">
                <a href="https://github.com/singhmanmeetsingh" target="_blank"><img src={Git} alt="github"/></a>
                <a href="https://www.linkedin.com/in/manmeet-singh-788ab2a4/" target="_blank"><img src={Link} alt="linkedin"/></a>
            </div>
            <div className="contact-section">Email : workmanmeet7@gmail.com</div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
