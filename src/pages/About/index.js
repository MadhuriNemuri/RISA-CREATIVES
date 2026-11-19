import React from "react";
import { useRouter } from "../../context/RouterContext";
import {
  FiZap,
  FiShield,
  FiTarget,
  FiCpu,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import "./index.css";

const principles = [
  {
    icon: <FiTarget />,
    title: "Precision",
    desc: "Every pixel serves a purpose. We adhere to a strict 4px grid discipline, ensuring that our visual logic is as sound as our code structure.",
  },
  {
    icon: <FiCpu />,
    title: "Innovation",
    desc: "We embrace the edge, co-integrating emergent AI workflows and glassmorphic design patterns to keep our clients years ahead of the curve.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Trust",
    desc: "As an MSME registered agency, transparency is our default state. We build lasting partnerships through data-driven honesty and reliability.",
  },
];

const teamPillars = [
  {
    role: "Design Lead",
    title: "Creative Vision",
    desc: "Transforming abstract brand identities into high-fidelity UI systems with ergonomic perfection.",
  },
  {
    role: "Engineering",
    title: "Technical Core",
    desc: "Architecting zero-latency full stack web architectures with robust API contracts and security.",
  },
  {
    role: "Strategy",
    title: "Growth Logic",
    desc: "Applying qualitative data insights and algorithmic funnel optimization to maximize conversion.",
  },
  {
    role: "Support",
    title: "Post-Launch",
    desc: "Providing 24/7 reliability monitoring, continuous updates, and zero-downtime maintenance.",
  },
];

export default function About() {
  const { navigate } = useRouter();

  return (
    <div className="about-page page-container">
      {/* About Hero */}
      <section className="about-hero">
        <div className="about-hero-container">
          <h1 className="about-hero-title">
            Engineering <span className="highlight-text">Premium</span> Digital<br />
            Foundations for the Future.
          </h1>
          <p className="about-hero-subtitle">
            At Risa Creatives, we bridge the gap between technical complexity and
            artistic elegance, delivering high-impact solutions for modern
            enterprises.
          </p>
        </div>
      </section>

      {/* Core Mission Section */}
      <section className="about-mission-section">
        <div className="about-mission-container">
          <div className="mission-content">
            <span className="section-label">CORE MISSION</span>
            <h2 className="mission-title">
              Driving exponential growth through architectural design excellence.
            </h2>
            <p className="mission-desc">
              We don't just build websites; we engineer digital ecosystems. Our
              mission is to empower MSMEs and growing startups with the same level
              of design precision and technical stability found in Silicon Valley
              giants.
            </p>

            <div className="mission-pills">
              <div className="mission-pill">
                <FiZap className="pill-icon" />
                <span>High-Impact Foundations</span>
              </div>
              <div className="mission-pill">
                <FiShield className="pill-icon" />
                <span>Enterprise Scalability</span>
              </div>
            </div>
          </div>

          {/* Refractive Optical Prism Visual Artwork */}
          <div className="mission-visual-wrap">
            <div className="prism-card glass-card">
              <div className="prism-stage">
                <div className="prism-laser-source"></div>
                <div className="prism-beam laser-beam-in"></div>
                
                {/* 3D Glass Prism */}
                <div className="prism-cube">
                  <div className="cube-face cube-front"></div>
                  <div className="cube-face cube-top"></div>
                  <div className="cube-face cube-side"></div>
                  <div className="cube-glow-core"></div>
                </div>

                {/* Refracted Dispersion Beams */}
                <div className="prism-beam laser-beam-out beam-blue"></div>
                <div className="prism-beam laser-beam-out beam-cyan"></div>
                <div className="prism-beam laser-beam-out beam-white"></div>
                
                {/* Pedestal */}
                <div className="prism-pedestal"></div>
              </div>
              <div className="prism-label">
                <span>Refractive Clarity</span>
                <span className="prism-tag">OPTICAL PRECISION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="about-principles-section">
        <div className="about-principles-container">
          <div className="principles-header">
            <span className="section-label">CORE PHILOSOPHY</span>
            <h2 className="principles-title">Built on Permanent Principles.</h2>
          </div>

          <div className="principles-grid">
            {principles.map((p, idx) => (
              <div className="principle-card glass-card" key={idx}>
                <div className="principle-icon-circle">
                  {p.icon}
                </div>
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Collective Section */}
      <section className="about-collective-section">
        <div className="about-collective-container">
          <div className="collective-top">
            <div className="collective-left">
              <span className="section-label">THE COLLECTIVE</span>
              <h2 className="collective-title">
                A multidisciplinary team of designers, engineers, and strategists.
              </h2>
            </div>
            <div className="collective-right">
              <p className="collective-statement">
                While we focus on the output, it is our collective intellect that defines
                the outcome. Our team spans across 3 continents, united by a singular
                standard of quality.
              </p>
            </div>
          </div>

          <div className="collective-grid">
            {teamPillars.map((item, idx) => (
              <div className="collective-card glass-card" key={idx}>
                <span className="collective-role">{item.role}</span>
                <h4 className="collective-item-title">{item.title}</h4>
                <p className="collective-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-card glass-card">
          <div className="about-cta-glow"></div>
          <h2>Ready to build the future of your brand?</h2>
          <button 
            className="btn-primary-blue about-cta-btn"
            onClick={() => navigate("/contact")}
          >
            <span>Start a Conversation</span>
            <FiArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
