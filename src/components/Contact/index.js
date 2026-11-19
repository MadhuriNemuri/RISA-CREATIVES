import React, { useState } from "react";
import { FiMail, FiPhone, FiChevronDown, FiCheckCircle } from "react-icons/fi";
import "./index.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    serviceNeeded: "Web Development",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, submitted: false, error: "Please provide your name and a brief message." });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate dynamic API submission
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        fullName: "",
        company: "",
        serviceNeeded: "Web Development",
        message: "",
      });
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    }, 1000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-card-split glass-card">
          {/* Left Blue Gradient Panel */}
          <div className="contact-left-panel">
            <h2 className="contact-panel-title">
              Let's build<br />
              something<br />
              extraordinary.
            </h2>

            <p className="contact-panel-desc">
              Ready to elevate your digital presence? Reach out today for a
              discovery call.
            </p>

            <div className="contact-details-list">
              <div className="detail-item">
                <div className="detail-icon-box">
                  <FiMail />
                </div>
                <div className="detail-info">
                  <span className="detail-label">EMAIL US</span>
                  <a href="mailto:info@risacreatives.com" className="detail-value">
                    info@risacreatives.com
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon-box">
                  <FiPhone />
                </div>
                <div className="detail-info">
                  <span className="detail-label">CALL US</span>
                  <a href="tel:+919876543210" className="detail-value">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="contact-right-panel">
            {status.submitted ? (
              <div className="form-success-box">
                <FiCheckCircle className="success-icon" />
                <h3>Enquiry Received!</h3>
                <p>Thank you for reaching out. Our team will review your project and get back to you within 4 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form">
                {status.error && (
                  <div className="form-error-banner">{status.error}</div>
                )}

                <div className="form-row-two">
                  <div className="form-field">
                    <label htmlFor="fullName">FULL NAME</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="company">COMPANY</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="serviceNeeded">SERVICE NEEDED</label>
                  <div className="custom-select-wrapper">
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Product & Systems Design">Product & Systems Design</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Maintenance & Support">Maintenance & Support</option>
                      <option value="Professional Reel Production">Professional Reel Production</option>
                    </select>
                    <FiChevronDown className="select-arrow" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary-blue submit-enquiry-btn"
                  disabled={status.submitting}
                >
                  {status.submitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
