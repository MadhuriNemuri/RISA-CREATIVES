import React, { useState } from "react";
import { useRouter } from "../../context/RouterContext";
import { useTheme } from "../../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import "./index.css";

export default function Navbar() {
  const { currentPath, navigate } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (path, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (path === "services") {
      if (currentPath === "/" || currentPath === "/home") {
        const el = document.getElementById("services");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      navigate("/", { section: "services" });
      return;
    }

    navigate(path);
  };

  const isCurrent = (path) => {
    if (path === "/" && (currentPath === "/" || currentPath === "/home")) return true;
    return currentPath === path;
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar glass-card">
        {/* Brand Logo */}
        <div 
          className="logo" 
          onClick={(e) => handleNavClick("/", e)} 
          role="button" 
          tabIndex={0}
          title="Risa Creatives Home"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo_img/image 287.png`}
            alt="RISA CREATIVES Logo"
            className="navbar-brand-logo"
          />
          <span className="logo-text">RISA CREATIVES</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <a
            href="#services"
            className={currentPath === "/" && window.location.hash.includes("services") ? "active" : ""}
            onClick={(e) => handleNavClick("services", e)}
          >
            Services
          </a>
          <a
            href="/process"
            className={isCurrent("/process") ? "active" : ""}
            onClick={(e) => handleNavClick("/process", e)}
          >
            Process
          </a>
          <a
            href="/about"
            className={isCurrent("/about") ? "active" : ""}
            onClick={(e) => handleNavClick("/about", e)}
          >
            About
          </a>
          <a
            href="/contact"
            className={isCurrent("/contact") ? "active" : ""}
            onClick={(e) => handleNavClick("/contact", e)}
          >
            Contact
          </a>
        </nav>

        {/* Right Actions */}
        <div className="nav-right">
          {/* Theme Toggle Button */}
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FiMoon className="theme-icon moon" /> : <FiSun className="theme-icon sun" />}
          </button>

          {/* CTA Button */}
          <button
            className="start-btn"
            onClick={(e) => handleNavClick("/get-started", e)}
          >
            <span>Get started</span>
            <FiArrowRight className="start-btn-arrow" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-card glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-links">
              <a
                href="#services"
                onClick={(e) => handleNavClick("services", e)}
              >
                Services
              </a>
              <a
                href="/process"
                className={isCurrent("/process") ? "active" : ""}
                onClick={(e) => handleNavClick("/process", e)}
              >
                Process
              </a>
              <a
                href="/about"
                className={isCurrent("/about") ? "active" : ""}
                onClick={(e) => handleNavClick("/about", e)}
              >
                About
              </a>
              <a
                href="/contact"
                className={isCurrent("/contact") ? "active" : ""}
                onClick={(e) => handleNavClick("/contact", e)}
              >
                Contact
              </a>
            </div>

            <div className="mobile-menu-footer">
              <button
                className="btn-primary-blue mobile-start-btn"
                onClick={(e) => handleNavClick("/get-started", e)}
              >
                Get Started
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
