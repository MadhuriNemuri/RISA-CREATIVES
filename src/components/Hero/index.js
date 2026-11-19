import React from "react";
import { useRouter } from "../../context/RouterContext";
import { FiArrowRight, FiPenTool, FiGlobe, FiTrendingUp, FiActivity } from "react-icons/fi";
import "./index.css";

export default function Hero() {
  const { navigate } = useRouter();

  return (
    <section className="hero-section">
      {/* Floating Animated Badges matching the design */}
      <div className="hero-floating-tag tag-top-left glass-card">
        <span className="tag-dot"><FiPenTool size={12} /></span>
        <span>UI Design</span>
      </div>

      <div className="hero-floating-tag tag-top-right glass-card">
        <span className="tag-dot"><FiGlobe size={12} /></span>
        <span>Website</span>
      </div>

      <div className="hero-floating-tag tag-bottom-left glass-card">
        <span className="tag-dot"><FiTrendingUp size={12} /></span>
        <span>Marketing</span>
      </div>

      <div className="hero-floating-tag tag-bottom-right glass-card">
        <span className="tag-dot"><FiActivity size={12} /></span>
        <span>Analytics</span>
      </div>

      <div className="hero-container">
        <h1 className="hero-title">
          We build digital<br />
          experiences that<br />
          <span className="hero-highlight">drive growth.</span>
        </h1>

        <p className="hero-subtitle">
          From intuitive UI/UX and high-performance websites to digital
          marketing and professional content — we help brands stand out
          and grow online.
        </p>

        <div className="hero-cta-group">
          <button
            className="btn-primary-white hero-btn"
            onClick={() => navigate("/get-started")}
          >
            <span>Get Free Consultation</span>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
