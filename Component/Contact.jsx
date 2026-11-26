"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <p className="section-tag">LET'S CONNECT</p>

          <h2>
            Have a project
            <br />
            in mind<span>.</span>
          </h2>

          <p className="contact-description">
            Let's work together to create something meaningful.
            Tell us about your project and we'll get back to you.
          </p>

          <a href="mailto:hello@nexora.com" className="contact-email">
            hello@nexora.com ↗
          </a>
        </div>

        <div className="contact-right">
          {submitted ? (
            <div className="success-message">
              <h3>Thank you! ✨</h3>
              <p>Your message has been submitted successfully.</p>

              <button onClick={() => setSubmitted(false)}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message ↗
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}