import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col w-full gap-8">
      <div>
        <h2 className="mb-4 text-3xl text-orange">Get In Touch</h2>
        <p className="text-white">
          Feel free to reach out if you'd like to collaborate <br /> you are
          just a few clicks away
        </p>
      </div>
      <ContactForm/>
    </div>
  );
};

export default ContactMeLeft;
