import React, { useState } from "react";
import { useRouter } from "../../context/RouterContext";
import { FiFacebook, FiTwitter, FiLinkedin, FiX } from "react-icons/fi";
import "./index.css";

export default function Footer() {
  const { navigate } = useRouter();
  const [activeModal, setActiveModal] = useState(null);

  const handleLinkClick = (path, e) => {
    e.preventDefault();
    if (path.startsWith("#")) {
      const id = path.replace("#", "");
      navigate("/", { section: id });
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-top">
            {/* Brand / About Column */}
            <div className="footer-about">
              <div 
                className="footer-logo"
                onClick={(e) => handleLinkClick("/", e)}
                role="button"
                tabIndex={0}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/logo_img/image 287.png`}
                  alt="RISA CREATIVES Logo"
                  className="footer-brand-logo"
                />
                <h2>RISA CREATIVES</h2>
              </div>

              <p className="footer-desc">
                Crafting premium digital experiences that push boundaries and deliver measurable growth.
              </p>

              <div className="msme-badge">
                <span className="msme-star">✦</span> MSME REGISTERED AGENCY
              </div>

              <div className="msme-logo-card">
                <span className="msme-title">MSME</span>
                <span className="msme-sub">Govt. of India Recognized</span>
              </div>
            </div>

            {/* Capabilities Column */}
            <div className="footer-col">
              <h3>Capabilities</h3>
              <ul>
                <li>
                  <a href="#services" onClick={(e) => handleLinkClick("#services", e)}>
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleLinkClick("#services", e)}>
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleLinkClick("#services", e)}>
                    Marketing Strategy
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleLinkClick("#services", e)}>
                    Content Creation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="footer-col">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="/about" onClick={(e) => handleLinkClick("/about", e)}>
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="/process" onClick={(e) => handleLinkClick("/process", e)}>
                    Process
                  </a>
                </li>
                <li>
                  <a href="/about" onClick={(e) => handleLinkClick("/about", e)}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" onClick={(e) => handleLinkClick("/contact", e)}>
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Let's Connect Column */}
            <div className="footer-col footer-connect">
              <h3>Let's Connect</h3>
              <p className="connect-tagline">Ready to scale your brand?</p>

              <a className="footer-email" href="mailto:info@risacreatives.com">
                info@risacreatives.com
              </a>

              <div className="socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FiFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FiTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom">
            <p className="copyright">
              © 2026 RISA CREATIVES. ALL RIGHTS RESERVED.
            </p>

            <div className="footer-legal">
              <button onClick={() => setActiveModal("privacy")}>Privacy Policy</button>
              <span className="divider">|</span>
              <button onClick={() => setActiveModal("terms")}>Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      {activeModal && (
        <div className="modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{activeModal === "privacy" ? "Privacy Policy" : "Terms of Service"}</h3>
              <button className="modal-close" onClick={() => setActiveModal(null)}>
                <FiX size={20} />
              </button>
            </div>
            <div className="modal-body">
              {activeModal === "privacy" ? (
                <>
                  <p>At Risa Creatives, we respect your privacy and are committed to protecting your personal data.</p>
                  <p>We only collect information necessary to provide you with exceptional digital design, development, and marketing services. We never sell or distribute your data to third parties.</p>
                  <p>Any project briefs, intellectual property, or confidential assets shared with our team are protected under strict NDA standards.</p>
                </>
              ) : (
                <>
                  <p>Welcome to Risa Creatives. By accessing our services or submitting proposals, you agree to our terms.</p>
                  <p>All design systems, prototypes, and digital solutions created during active client engagements remain client intellectual property upon project completion and final settlement.</p>
                  <p>We adhere to high ethical engineering standards and transparent project milestones.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
