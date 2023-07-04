import React, { useState } from 'react';
import '../styles/contact.css';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
      var subject = "Contact Form Submission";
      var body = "Name: " + name + "\n\nEmail: " + email + "\n\nMessage: " + message;

      var mailtoLink = "mailto:internattier1@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      window.location.href = mailtoLink;
  };

  return (
    <form className="CForm" onSubmit={sendEmail}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
