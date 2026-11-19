import React, { useState } from "react";
import { useRouter } from "../../context/RouterContext";
import {
  FiCheckCircle,
  FiArrowRight,
  FiActivity,
  FiCpu,
  FiTerminal,
  FiShield,
  FiLayers,
  FiSearch,
  FiCompass,
  FiSend,
} from "react-icons/fi";
import "./index.css";

const phases = [
  {
    phase: "PHASE 01",
    title: "Discovery",
    desc: "We begin by immersing ourselves in your world to understand your business objectives, target audience, and market challenges.",
    tags: ["Stakeholder Alignment", "User Research"],
    icon: <FiSearch />,
    mockupType: "laptop",
  },
  {
    phase: "PHASE 02",
    title: "Research",
    desc: "Deep diving into market landscapes, competitor benchmarks, and emerging trends to uncover strategic opportunities.",
    tags: ["Competitive Matrix", "User Persona Definition"],
    icon: <FiCompass />,
    mockupType: "diagram",
  },
  {
    phase: "PHASE 03",
    title: "Strategy",
    desc: "Translating discoveries into actionable roadmaps with defined technical architecture and creative direction.",
    tags: ["Information Arch", "Tech Stack", "Roadmap & KPI"],
    icon: <FiLayers />,
    mockupType: "wireframe",
  },
  {
    phase: "PHASE 04",
    title: "Design",
    desc: "Crafting visually arresting interfaces rooted in usability, design systems, and responsive cross-device consistency.",
    tags: ["Design Systems", "High-Fidelity UI", "Micro-interactions"],
    icon: <FiCpu />,
    mockupType: "screens",
  },
  {
    phase: "PHASE 05",
    title: "Development",
    desc: "Transforming designs into production-ready code with modern tech stacks, clean architecture, and optimal performance.",
    tags: ["Clean Code Architecture", "API Integration", "High Performance"],
    icon: <FiTerminal />,
    mockupType: "code",
  },
  {
    phase: "PHASE 06",
    title: "Testing",
    desc: "Rigorous testing across devices, browsers, and edge cases to ensure bulletproof reliability and peak speed.",
    metrics: [
      { label: "Test Coverage", val: "100%" },
      { label: "Performance Score", val: "99.9%" },
    ],
    tags: ["Automated QA", "Cross-Browser Testing", "Security Audit"],
    icon: <FiShield />,
    mockupType: "security",
  },
  {
    phase: "PHASE 07",
    title: "Launch",
    desc: "Coordinated deployment to production environment with zero downtime, DNS management, and analytics tracking.",
    tags: ["Seamless Migration", "Zero Downtime", "Analytics Setup"],
    hasAction: true,
    actionText: "Go Live 🚀",
    icon: <FiSend />,
    mockupType: "launch",
  },
  {
    phase: "PHASE 08",
    title: "Support",
    desc: "Continuous optimization, monitoring, and iterative enhancements to keep your product secure and outperforming.",
    statusBadge: "● 24/7 Monitoring Active",
    tags: ["Regular Updates", "SLA Guarantees", "Performance Audits"],
    icon: <FiActivity />,
    mockupType: "support",
  },
];

export default function Process() {
  const { navigate } = useRouter();
  const [launched, setLaunched] = useState(false);

  const handleLaunchClick = () => {
    setLaunched(true);
    setTimeout(() => setLaunched(false), 4000);
  };

  const renderMockup = (type, phaseNum) => {
    switch (type) {
      case "laptop":
        return (
          <div className="mockup-frame laptop-frame glass-card">
            <div className="mockup-header-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="mockup-title-text">analytics.risacreatives.com</span>
            </div>
            <div className="mockup-content-body">
              <div className="mockup-metric-row">
                <div className="mini-stat-box">
                  <span className="mini-label">Monthly Active</span>
                  <span className="mini-val">+248%</span>
                </div>
                <div className="mini-stat-box">
                  <span className="mini-label">Retention</span>
                  <span className="mini-val">94.2%</span>
                </div>
              </div>
              <div className="mockup-chart-bars">
                <div className="bar b1" style={{ height: "45%" }}></div>
                <div className="bar b2" style={{ height: "60%" }}></div>
                <div className="bar b3" style={{ height: "85%" }}></div>
                <div className="bar b4" style={{ height: "70%" }}></div>
                <div className="bar b5" style={{ height: "95%" }}></div>
                <div className="bar b6" style={{ height: "80%" }}></div>
                <div className="bar b7" style={{ height: "100%" }}></div>
              </div>
            </div>
          </div>
        );

      case "diagram":
        return (
          <div className="mockup-frame diagram-frame glass-card">
            <div className="diagram-header">USER JOURNEY ARCHITECTURE</div>
            <div className="diagram-nodes">
              <div className="node start-node">Entry Point</div>
              <div className="arrow-connector">→</div>
              <div className="node middle-node">Value Discovery</div>
              <div className="arrow-connector">→</div>
              <div className="node goal-node">Conversion</div>
            </div>
            <div className="diagram-subgrid">
              <div className="sub-metric">Target: Enterprise & Startups</div>
              <div className="sub-metric">Friction Reduction: 68%</div>
            </div>
          </div>
        );

      case "wireframe":
        return (
          <div className="mockup-frame wireframe-frame glass-card">
            <div className="wireframe-blueprint">
              <div className="wf-header-line"></div>
              <div className="wf-grid-boxes">
                <div className="wf-box box-main"></div>
                <div className="wf-box box-sub"></div>
              </div>
              <div className="wf-footer-line"></div>
            </div>
            <div className="wireframe-badge">4px Grid Strict System</div>
          </div>
        );

      case "screens":
        return (
          <div className="mockup-frame screens-frame glass-card">
            <div className="mobile-phone-preview">
              <div className="phone-notch"></div>
              <div className="phone-screen-content">
                <div className="app-header-strip"></div>
                <div className="app-hero-card"></div>
                <div className="app-item-pill"></div>
                <div className="app-item-pill"></div>
              </div>
            </div>
            <div className="desktop-screen-preview">
              <div className="d-screen-nav"></div>
              <div className="d-screen-hero"></div>
            </div>
          </div>
        );

      case "code":
        return (
          <div className="mockup-frame code-frame glass-card">
            <div className="code-header">
              <span className="code-tab active">App.tsx</span>
              <span className="code-tab">usePerformance.ts</span>
            </div>
            <pre className="code-text">
              <code>
                <span className="c-keyword">import</span> &#123; createEngine &#125; <span className="c-keyword">from</span> <span className="c-string">'@risa/core'</span>;{"\n"}
                <span className="c-keyword">export const</span> App = () =&gt; &#123;{"\n"}
                {"  "}<span className="c-keyword">const</span> ecosystem = createEngine(&#123;{"\n"}
                {"    "}latency: <span className="c-string">'sub-second'</span>,{"\n"}
                {"    "}security: <span className="c-string">'enterprise-v2'</span>,{"\n"}
                {"    "}seo: <span className="c-num">100</span>,{"\n"}
                {"  "}&#125;);{"\n"}
                {"  "}<span className="c-keyword">return</span> ecosystem.render();{"\n"}
                &#125;;
              </code>
            </pre>
          </div>
        );

      case "security":
        return (
          <div className="mockup-frame security-frame glass-card">
            <div className="security-status-line">
              <FiShield className="sec-icon" />
              <span>TEST SUITE: ALL PASSED</span>
            </div>
            <div className="security-score-row">
              <div className="sec-stat-pill">
                <span className="sec-label">E2E Tests</span>
                <span className="sec-val">428 Passed</span>
              </div>
              <div className="sec-stat-pill">
                <span className="sec-label">Lighthouse</span>
                <span className="sec-val">100 / 100</span>
              </div>
            </div>
            <div className="sec-progress-bar">
              <div className="progress-fill" style={{ width: "99.9%" }}></div>
            </div>
          </div>
        );

      case "launch":
        return (
          <div className="mockup-frame launch-frame glass-card">
            <div className="launch-rocket-telemetry">
              <div className="telemetry-item">
                <span>DNS Propagation</span>
                <span className="status-green">VERIFIED</span>
              </div>
              <div className="telemetry-item">
                <span>SSL TLS 1.3</span>
                <span className="status-green">ACTIVE</span>
              </div>
              <div className="telemetry-item">
                <span>Edge CDN Cache</span>
                <span className="status-green">WARMED</span>
              </div>
            </div>
            {launched && (
              <div className="launch-alert">
                🎉 Deployment Successful! Zero Downtime Achieved.
              </div>
            )}
          </div>
        );

      case "support":
        return (
          <div className="mockup-frame support-frame glass-card">
            <div className="support-telemetry-header">
              <span className="uptime-pill">99.99% UPTIME</span>
              <span className="live-pulse-dot">● LIVE</span>
            </div>
            <div className="health-grid">
              <div className="health-card">
                <span className="h-title">Avg Latency</span>
                <span className="h-val">12ms</span>
              </div>
              <div className="health-card">
                <span className="h-title">Security Incidents</span>
                <span className="h-val">0</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="process-page page-container">
      {/* Process Hero */}
      <section className="process-hero">
        <div className="process-hero-container">
          <h1 className="process-hero-title">
            How we <span className="highlight-text-blue">shape</span> the future.
          </h1>
          <p className="process-hero-subtitle">
            A preview, eight-step methodology refined over years of delivering
            high-impact digital experiences. We combine technical rigor with
            artistic intuition.
          </p>
        </div>
      </section>

      {/* 8-Step Alternating Process Roadmap */}
      <section className="process-roadmap-section">
        <div className="process-roadmap-container">
          {/* Central Connecting Timeline Line */}
          <div className="central-timeline-line"></div>

          {phases.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                className={`roadmap-step-row ${isEven ? "row-reverse" : ""}`}
                key={index}
              >
                {/* Text Content Column */}
                <div className="roadmap-text-col">
                  <div className="roadmap-card glass-card">
                    <div className="roadmap-phase-header">
                      <span className="roadmap-phase-tag">{item.phase}</span>
                    </div>

                    <h2 className="roadmap-title">{item.title}</h2>
                    <p className="roadmap-desc">{item.desc}</p>

                    {item.metrics && (
                      <div className="roadmap-metrics-row">
                        {item.metrics.map((m, mi) => (
                          <div className="metric-box" key={mi}>
                            <span className="metric-num">{m.val}</span>
                            <span className="metric-name">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.statusBadge && (
                      <div className="roadmap-status-badge">
                        {item.statusBadge}
                      </div>
                    )}

                    <div className="roadmap-tags">
                      {item.tags.map((t, ti) => (
                        <span className="roadmap-pill" key={ti}>
                          <FiCheckCircle className="pill-check" />
                          {t}
                        </span>
                      ))}
                    </div>

                    {item.hasAction && (
                      <div className="roadmap-action-wrap">
                        <button
                          className="btn-primary-blue launch-action-btn"
                          onClick={handleLaunchClick}
                        >
                          {item.actionText}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Central Step Node */}
                <div className="roadmap-node-col">
                  <div className="step-node-circle">
                    {item.icon}
                  </div>
                </div>

                {/* Visual Mockup Column */}
                <div className="roadmap-mockup-col">
                  {renderMockup(item.mockupType, index + 1)}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process CTA Section */}
      <section className="process-cta-section">
        <div className="process-cta-card glass-card">
          <div className="process-cta-glow"></div>
          <h2>
            Ready to start the <span className="highlight-text-blue">journey</span>?
          </h2>
          <p>
            Join the ranks of forward-thinking brands that chose Risa Studio for
            their digital transformation.
          </p>
          <button
            className="btn-primary-blue process-bottom-cta-btn"
            onClick={() => navigate("/get-started")}
          >
            <span>Let's Talk</span>
            <FiArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
