// ContactForm.js
import React, { useState } from "react";
import axios from "axios";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/contact",
        formData
      );
      alert("Message sent successfully!");
    } catch (error) {
      console.error("There was an error sending the message!", error);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
        <p>
          <strong>Phone:</strong> +123 456 7890
        </p>
        <p>
          <strong>Email:</strong> contact@example.com
        </p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
