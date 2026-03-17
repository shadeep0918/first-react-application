import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message sent successfully!");
  };

return (
  <div className="contact-container">
    <h2>Contact Us</h2>
    <form className="contact-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
);
}

export default Contact;