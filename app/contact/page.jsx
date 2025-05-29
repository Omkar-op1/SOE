"use client";

import React, { useState } from 'react';
import '@/css/ContactPage.css'; // Ensure you have this CSS file for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here (API call, etc.)
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      
      <div className="contact-container">
        <div className="contact-form">
          <h2>Send us your query</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="query">Your Query</label>
              <textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        
        <div className="contact-info">
          <h2>Our Contact Information</h2>
          <div className="info-item">
            <h3>Email:</h3>
            <p>theideacompanyofficial@gmail.com</p> {/* Replace with your actual email */}
          </div>
          
          <div className="info-item">
            <h3>Phone:</h3>
            <p>+91 87932 67216</p> {/* Replace with your actual phone number */}
          </div>
          
          <div className="info-item">
            <h3>Office Address:</h3>
            <p>Lake View Apartment, Higna Road, Nagpur - 440016</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;