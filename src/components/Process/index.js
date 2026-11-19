import React from "react";
import { useRouter } from "../../context/RouterContext";
import { FiArrowRight } from "react-icons/fi";
import "./index.css";

const processData = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep diving into your brand goals and user needs.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Crafting a roadmap for technical and visual success.",
  },
  {
    number: "03",
    title: "Production",
    description: "Executing design and code with surgical precision.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Quality checks and seamless deployment to market.",
  },
];

export default function Process() {
  const { navigate } = useRouter();

  return (
    <section className="process-section" id="process-preview">
      <div className="process-container">
        <span className="section-label">OUR PROCESS</span>

        <h2 className="process-heading">Precision-Led Development</h2>

        <div className="process-timeline-bar"></div>

        <div className="process-grid">
          {processData.map((item, index) => (
            <div className="process-card" key={index}>
              <div className="process-circle-wrapper">
                <div className="process-circle">{item.number}</div>
              </div>

              <h3 className="process-card-title">{item.title}</h3>

              <p className="process-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="process-cta-wrap">
          <button 
            className="btn-primary-blue process-view-btn"
            onClick={() => navigate("/process")}
          >
            <span>Explore Full 8-Step Methodology</span>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
