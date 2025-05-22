import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rs5097a", "template_3hzgz65", form.current, {
        publicKey: "M6g1OQ6ESbgO0lD-P",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleName}
          required
          className="h-12 px-2 rounded-lg bg-lightBrown"
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email "
          value={email}
          onChange={handleEmail}
          required
          className="h-12 px-2 rounded-lg bg-lightBrown"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="9"
          cols="50"
          value={message}
          onChange={handleMessage}
          required
          className="p-2 rounded-lg bg-lightBrown"
        />
        <button
          type="submit"
          className="w-full h-12 text-xl font-bold text-white transition-all duration-500 border rounded-lg border-cyan hover:bg-darkCyan bg-cyan"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
