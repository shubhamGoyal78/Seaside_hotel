// Contact.js

import React from 'react';
import './Contact.css'; // Make sure to import your CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="header">
        <h1 className="title">Get in Touch</h1>
        <h2 className="second-title">Contact Information</h2>
      </header>

      <section className="contact-section">
        <div className="card big-card">
          {/* Content for the big card (820*630) */}
        </div>
        <div className="card small-card">
          {/* Content for the small card (412*638) */}
        </div>
      </section>

      {/* Additional content or form for contact can be added here */}

      <footer className="footer">
        <p>Connect with us on social media</p>
        {/* Add social media icons or links */}
      </footer>
    </div>
  );
};

export default Contact;
