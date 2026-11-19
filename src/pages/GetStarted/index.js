import React, { useState } from "react";
import { useRouter } from "../../context/RouterContext";
import {
  FiShield,
  FiClock,
  FiAward,
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
  FiCheckCircle,
} from "react-icons/fi";
import "./index.css";

const servicesList = [
  "Web Development",
  "UI/UX Design",
  "Brand & Systems",
  "Digital Marketing",
  "Reel Production",
  "Full Digital Ecosystem",
];

const timelineList = [
  "Immediate (< 1 Month)",
  "Standard (1 - 3 Months)",
  "Enterprise (3+ Months)",
];

const budgetRanges = [
  "$2,500 - $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000+",
];

export default function GetStarted() {
  const { navigate } = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    workEmail: "",
    service: "Web Development",
    timeline: "Standard (1 - 3 Months)",
    budget: "$5,000 - $15,000",
    projectBrief: "",
  });

  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [refId, setRefId] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.fullName.trim() || !formData.workEmail.trim()) {
        setError("Please enter your name and work email to continue.");
        return;
      }
    }
    setError(null);
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setError(null);
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = "RISA-" + Math.floor(100000 + Math.random() * 900000);
      setRefId(generatedId);
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 1200);
  };

  return (
    <div className="get-started-page page-container">
      {/* Hero Header */}
      <section className="get-started-hero">
        <div className="get-started-hero-container">
          <h1 className="get-started-title">
            Start your <span className="highlight-text-blue">journey</span>.
          </h1>
          <p className="get-started-subtitle">
            Transform your digital presence with technical precision and artistic
            fluidity. Tell us about your vision.
          </p>
        </div>
      </section>

      {/* Multi-Step Card */}
      <section className="wizard-section">
        <div className="wizard-container">
          <div className="wizard-card glass-card">
            {/* Stepper Progress */}
            <div className="stepper-header">
              <div className={`step-item ${step >= 1 ? "active" : ""} ${step > 1 ? "completed" : ""}`}>
                <div className="step-circle">
                  {step > 1 ? <FiCheck /> : "1"}
                </div>
                <span className="step-label">Identify</span>
              </div>

              <div className={`step-connector ${step > 1 ? "active" : ""}`}></div>

              <div className={`step-item ${step >= 2 ? "active" : ""} ${step > 2 ? "completed" : ""}`}>
                <div className="step-circle">
                  {step > 2 ? <FiCheck /> : "2"}
                </div>
                <span className="step-label">Scope</span>
              </div>

              <div className={`step-connector ${step > 2 ? "active" : ""}`}></div>

              <div className={`step-item ${step >= 3 ? "active" : ""}`}>
                <div className="step-circle">
                  {submissionSuccess ? <FiCheck /> : "3"}
                </div>
                <span className="step-label">Vision</span>
              </div>
            </div>

            {/* Wizard Body */}
            <div className="wizard-body">
              {submissionSuccess ? (
                <div className="wizard-success-state">
                  <FiCheckCircle className="wizard-success-icon" />
                  <h2>Journey Commenced!</h2>
                  <p>
                    Thank you, <strong>{formData.fullName}</strong>. We have generated your engagement dossier under Reference ID:
                  </p>
                  <div className="ref-pill">{refId}</div>

                  <div className="summary-card glass-card">
                    <div className="summary-item">
                      <span>Company:</span>
                      <strong>{formData.companyName || "N/A"}</strong>
                    </div>
                    <div className="summary-item">
                      <span>Service:</span>
                      <strong>{formData.service}</strong>
                    </div>
                    <div className="summary-item">
                      <span>Budget:</span>
                      <strong>{formData.budget}</strong>
                    </div>
                  </div>

                  <p className="next-steps-info">
                    A project strategist will contact you at <strong>{formData.workEmail}</strong> with an initial architecture roadmap within 4 hours.
                  </p>

                  <button
                    className="btn-primary-blue return-home-btn"
                    onClick={() => navigate("/")}
                  >
                    <span>Return to Homepage</span>
                    <FiArrowRight />
                  </button>
                </div>
              ) : (
                <>
                  {error && <div className="wizard-error-banner">{error}</div>}

                  {/* STEP 1: Identification */}
                  {step === 1 && (
                    <div className="step-content">
                      <h2 className="step-heading">Who are you?</h2>

                      <div className="wizard-inputs-grid">
                        <div className="wizard-field">
                          <label htmlFor="fullName">Full Name</label>
                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={handleChange}
                            autoFocus
                            required
                          />
                        </div>

                        <div className="wizard-field">
                          <label htmlFor="companyName">Company Name</label>
                          <input
                            id="companyName"
                            name="companyName"
                            type="text"
                            placeholder="Acme Inc."
                            value={formData.companyName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="wizard-field full-width">
                        <label htmlFor="workEmail">Work Email</label>
                        <input
                          id="workEmail"
                          name="workEmail"
                          type="email"
                          placeholder="john@acme.com"
                          value={formData.workEmail}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="wizard-action-footer">
                        <div></div>
                        <button
                          type="button"
                          className="btn-primary-blue wizard-continue-btn"
                          onClick={handleNext}
                        >
                          <span>Continue</span>
                          <FiArrowRight />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Project Scope & Budget */}
                  {step === 2 && (
                    <div className="step-content">
                      <h2 className="step-heading">Scope & Preferences</h2>

                      <div className="wizard-field full-width">
                        <label>Primary Service Needed</label>
                        <div className="options-grid">
                          {servicesList.map((srv) => (
                            <button
                              type="button"
                              key={srv}
                              className={`option-btn ${formData.service === srv ? "active" : ""}`}
                              onClick={() => setFormData({ ...formData, service: srv })}
                            >
                              {srv}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="wizard-inputs-grid">
                        <div className="wizard-field">
                          <label>Target Timeline</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                          >
                            {timelineList.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>

                        <div className="wizard-field">
                          <label>Estimated Budget</label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                          >
                            {budgetRanges.map((b) => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="wizard-action-footer">
                        <button
                          type="button"
                          className="btn-secondary-back"
                          onClick={handlePrev}
                        >
                          <FiArrowLeft />
                          <span>Back</span>
                        </button>
                        <button
                          type="button"
                          className="btn-primary-blue wizard-continue-btn"
                          onClick={handleNext}
                        >
                          <span>Continue</span>
                          <FiArrowRight />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Vision & Confirmation */}
                  {step === 3 && (
                    <div className="step-content">
                      <h2 className="step-heading">Project Vision</h2>

                      <div className="wizard-field full-width">
                        <label htmlFor="projectBrief">Tell us about your vision & challenges</label>
                        <textarea
                          id="projectBrief"
                          name="projectBrief"
                          rows="4"
                          placeholder="What are the key goals, deliverables, or inspiration for this project?"
                          value={formData.projectBrief}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      {/* Dossier Preview */}
                      <div className="dossier-preview glass-card">
                        <div className="preview-row">
                          <span>Client:</span>
                          <strong>{formData.fullName} ({formData.companyName || "Personal"})</strong>
                        </div>
                        <div className="preview-row">
                          <span>Email:</span>
                          <strong>{formData.workEmail}</strong>
                        </div>
                        <div className="preview-row">
                          <span>Scope:</span>
                          <strong>{formData.service} • {formData.budget}</strong>
                        </div>
                      </div>

                      <div className="wizard-action-footer">
                        <button
                          type="button"
                          className="btn-secondary-back"
                          onClick={handlePrev}
                          disabled={isSubmitting}
                        >
                          <FiArrowLeft />
                          <span>Back</span>
                        </button>
                        <button
                          type="button"
                          className="btn-primary-blue wizard-continue-btn"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                        >
                          <span>{isSubmitting ? "Launching..." : "Submit Request"}</span>
                          <FiArrowRight />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="trust-badges-row">
            <div className="trust-badge">
              <div className="trust-icon-wrap">
                <FiShield />
              </div>
              <span className="trust-text">Data Secure</span>
            </div>

            <div className="trust-badge">
              <div className="trust-icon-wrap">
                <FiClock />
              </div>
              <span className="trust-text">Quick Response</span>
            </div>

            <div className="trust-badge">
              <div className="trust-icon-wrap">
                <FiAward />
              </div>
              <span className="trust-text">Premium Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
