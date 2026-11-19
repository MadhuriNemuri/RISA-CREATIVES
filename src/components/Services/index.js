import React, { useState } from "react";
import { useRouter } from "../../context/RouterContext";
import {
  FiLayout,
  FiCode,
  FiTrendingUp,
  FiSettings,
  FiVideo,
  FiCompass,
  FiArrowUpRight,
} from "react-icons/fi";
import "./index.css";

const services = [
  {
    id: "uiux-design",
    icon: <FiLayout />,
    badge: "DESIGN",
    title: "UI/UX Design",
    tags: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Mobile App Design",
      "Web App Design",
      "Design Systems",
      "Usability Testing",
    ],
  },
  {
    id: "brand-systems",
    icon: <FiCompass />,
    badge: "DESIGN",
    title: "Brand & Systems Design",
    tags: [
      "User Research",
      "Brand Identity",
      "Wireframing",
      "Mobile App Design",
      "Design Systems",
      "Usability Testing",
    ],
  },
  {
    id: "web-development",
    icon: <FiCode />,
    badge: "ENGINEERING",
    title: "Web Development",
    tags: [
      "Custom Websites",
      "Landing Pages",
      "Portfolio Websites",
      "E-commerce",
      "CMS",
      "React",
      "Next.js",
      "Full-Stack",
    ],
  },
  {
    id: "digital-marketing",
    icon: <FiTrendingUp />,
    badge: "GROWTH",
    title: "Digital Marketing",
    tags: [
      "SEO",
      "Social Media Marketing",
      "Google Ads",
      "Meta Ads",
      "Growth",
      "Content Marketing",
    ],
  },
  {
    id: "maintenance-support",
    icon: <FiSettings />,
    badge: "CARE",
    title: "Maintenance & Support",
    tags: [
      "Monthly Maintenance",
      "Security Updates",
      "Backups",
      "Performance Optimization",
    ],
  },
  {
    id: "reel-production",
    icon: <FiVideo />,
    badge: "CONTENT",
    title: "Professional Reel Production",
    tags: [
      "Creative Concepts",
      "Script Writing",
      "Cinematic Filming",
      "Motion Graphics",
    ],
  },
];

export default function Services() {
  const { navigate } = useRouter();
  const [selectedTag, setSelectedTag] = useState(null);

  const handleServiceClick = (serviceTitle) => {
    navigate("/get-started", { prefilledService: serviceTitle });
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card glass-card" 
              key={service.id || index}
              onClick={() => handleServiceClick(service.title)}
              role="button"
              tabIndex={0}
              title={`Inquire about ${service.title}`}
            >
              <div className="card-top">
                <div className="icon-box">
                  {service.icon}
                </div>

                <div className="top-right-group">
                  <span className="badge">{service.badge}</span>
                  <div className="service-arrow-wrap">
                    <FiArrowUpRight className="service-arrow" />
                  </div>
                </div>
              </div>

              <h2 className="service-card-title">{service.title}</h2>

              <div className="tag-list">
                {service.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={`service-tag ${selectedTag === tag ? "active" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedTag(selectedTag === tag ? null : tag);
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
