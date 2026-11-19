import React from "react";
import { FiShield, FiUsers, FiZap } from "react-icons/fi";
import "./index.css";

const features = [
  {
    icon: <FiShield />,
    title: "Secure Development",
    description: "Enterprise-grade security protocols in every line of code.",
  },
  {
    icon: <FiUsers />,
    title: "Client-Focused Solutions",
    description: "Dedicated project managers for every stage of your journey.",
  },
  {
    icon: <FiZap />,
    title: "High Performance Tech",
    description: "Optimized for sub-second load times and flawless SEO.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Left Content */}
        <div className="why-left">
          <span className="section-label">WHY RISA CREATIVES</span>

          <h2 className="why-title">
            We don't just build,<br />
            we engineer growth.
          </h2>

          <p className="why-desc">
            Our methodology combines data-driven insights with world-class
            aesthetics to create digital products that don't just look good, but
            perform exceptionally.
          </p>

          <div className="why-stats">
            <div className="stat-card">
              <h3 className="stat-number">10+</h3>
              <span className="stat-label">PROJECTS DELIVERED</span>
            </div>

            <div className="stat-card">
              <h3 className="stat-number">98%</h3>
              <span className="stat-label">CLIENT SATISFACTION</span>
            </div>
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="why-right">
          {features.map((item, index) => (
            <div className="feature-card glass-card" key={index}>
              <div className="feature-icon-box">
                {item.icon}
              </div>

              <div className="feature-content">
                <h4 className="feature-title">{item.title}</h4>
                <p className="feature-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
