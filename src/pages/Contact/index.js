import React, { useState } from "react";
import {
  FiGlobe,
  FiShare2,
  FiBriefcase,
  FiSend,
  FiCheckCircle,
  FiClock,
  FiUser,
} from "react-icons/fi";
import "./index.css";

const availableServices = [
  "Product Design",
  "Web Development",
  "Branding",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    selectedServices: ["Web Development"],
    projectBrief: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    ticketId: null,
  });

  const toggleService = (srv) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(srv);
      if (exists) {
        // Keep at least one
        if (prev.selectedServices.length === 1) return prev;
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== srv),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, srv],
        };
      }
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please enter your full name and a valid email address.",
        ticketId: null,
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null, ticketId: null });

    setTimeout(() => {
      const randomTicket = "RISA-" + Math.floor(100000 + Math.random() * 900000);
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
        ticketId: randomTicket,
      });
      setFormData({
        fullName: "",
        email: "",
        selectedServices: ["Web Development"],
        projectBrief: "",
      });
    }, 1200);
  };

  return (
    <div className="contact-page page-container">
      {/* Contact Main Container */}
      <section className="contact-hero-section">
        <div className="contact-main-grid">
          {/* Left Column: Heading & Contact Details */}
          <div className="contact-left-content">
            <h1 className="contact-headline">
              Ready to build<br />
              something<br />
              <span className="highlight-text-blue">extraordinary</span>?
            </h1>

            <p className="contact-lead-text">
              We blend technical precision with artistic fluidity to help modern
              brands scale their digital footprint. Let's start a conversation.
            </p>

            <div className="contact-meta-row">
              <div className="meta-block">
                <span className="meta-label">CONNECT</span>
                <a href="mailto:info@risacreatives.com" className="meta-link">
                  info@risacreatives.com
                </a>
                <a href="tel:+91234567890" className="meta-link">
                  +91 (234) 567-890
                </a>
              </div>

              <div className="meta-block">
                <span className="meta-label">SOCIAL</span>
                <div className="social-pill-group">
                  <a href="https://risacreatives.com" target="_blank" rel="noopener noreferrer" className="social-pill-btn" aria-label="Website">
                    <FiGlobe />
                  </a>
                  <button 
                    className="social-pill-btn" 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: 'Risa Creatives', url: window.location.href });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }
                    }} 
                    aria-label="Share"
                  >
                    <FiShare2 />
                  </button>
                  <a href="#services" className="social-pill-btn" aria-label="Portfolio">
                    <FiBriefcase />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Response Card */}
            <div className="direct-response-card glass-card">
              <div className="direct-response-top">
                <div className="avatar-circle">
                  <FiUser className="avatar-icon" />
                </div>
                <div className="direct-response-meta">
                  <h4 className="direct-name">Direct Response</h4>
                  <span className="direct-time">
                    <FiClock className="clock-icon" /> Response time: &lt; 4 hours
                  </span>
                </div>
              </div>
              <p className="direct-quote">
                "We don't just build websites; we architect digital legacies. Let's
                discuss your roadmap today."
              </p>
            </div>
          </div>

          {/* Right Column: Proposal Form Card */}
          <div className="contact-form-col">
            <div className="proposal-form-card glass-card">
              {status.submitted ? (
                <div className="proposal-success-box">
                  <FiCheckCircle className="proposal-success-icon" />
                  <h2>Proposal Dispatched!</h2>
                  <p>
                    Thank you! Your inquiry has been registered under reference:
                    <strong className="ticket-id"> {status.ticketId}</strong>
                  </p>
                  <p className="sub-note">
                    A senior technical director will review your brief and reply within 4 hours.
                  </p>
                  <button
                    className="btn-primary-blue reset-form-btn"
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null, ticketId: null })}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="proposal-form">
                  {status.error && (
                    <div className="form-error-banner">{status.error}</div>
                  )}

                  <div className="proposal-form-row">
                    <div className="proposal-field">
                      <label htmlFor="fullName">Full Name</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="proposal-field">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Service Interest Chips */}
                  <div className="proposal-field">
                    <label>Service Interest</label>
                    <div className="service-chips-row">
                      {availableServices.map((srv) => {
                        const isSelected = formData.selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            className={`chip-btn ${isSelected ? "selected" : ""}`}
                            onClick={() => toggleService(srv)}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div className="proposal-field">
                    <label htmlFor="projectBrief">Project Brief</label>
                    <textarea
                      id="projectBrief"
                      name="projectBrief"
                      rows="5"
                      placeholder="Project Brief"
                      value={formData.projectBrief}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary-blue send-proposal-btn"
                    disabled={status.submitting}
                  >
                    <span>{status.submitting ? "Sending Proposal..." : "Send Proposal"}</span>
                    <FiSend />
                  </button>

                  <p className="proposal-disclaimer">
                    By submitting, you agree to our <a href="#privacy">Privacy Policy</a> and data handling terms.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
