import React, { useState } from "react";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-users",
    title: "Dedicated Team",
    desc: "A fully committed creative team working exclusively on your brand, ensuring deep focus and consistent quality.",
    points: [
      "Seamless collaboration",
      "Scalable team size",
      "Ideal for long-term projects",
      "Full brand ownership",
    ],
    tag: "Most Popular",
  },
  {
    id: "time",
    icon: "fas fa-clock",
    title: "Time & Material",
    desc: "Pay only for the work delivered with complete flexibility to adjust scope as your needs evolve.",
    points: [
      "Transparent billing",
      "Agile & adaptive execution",
      "Easy scope adjustments",
      "Easy scope adjustments",
    ],
    tag: null,
  },
  {
    id: "fixed",
    icon: "fas fa-shield-alt",
    title: "Fixed Price",
    desc: "Predictable cost and timelines for clearly defined branding projects with zero surprises.",
    points: [
      "Pre-defined scope ",
      "No budget surprises",
      "On-time delivery",
      "On-time delivery",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-layer-group",
    title: "Hybrid Model",
    desc: "A balanced mix of structure and flexibility tailored to the unique demands of your project.",
    points: [
      "Fixed scope with ",
      "Smooth transition between",
      "Best of both worlds",
      "Best of both worlds",
    ],
    tag: null,
  },
];

const EngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <>
      <style>{`
        /* ─── Section ─── */
        .eng-section {
          background-color: var(--body-bg, #0a0a0a);
          padding: 110px 0 120px;
          position: relative;
          overflow: hidden;
        }

        /* Faint top divider line */
        .eng-section::before {
          content: "";
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 80%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
        }

        /* ─── Header ─── */
        .eng-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .eng-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--heading-font-family);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--theme-color1, #ff6b1e);
          margin-bottom: 20px;
        }

        .eng-eyebrow::before,
        .eng-eyebrow::after {
          content: "";
          display: block;
          width: 30px; height: 1px;
          background: var(--theme-color1, #ff6b1e);
          opacity: 0.5;
        }

        .eng-title {
          font-family: var(--heading-font-family);
          // font-size: clamp(28px, 4vw, 50px);
          color: var(--headings-color, #fff);
          font-weight: 500;
          letter-spacing: -1px;
          margin-bottom: 18px;
          line-height: 1.12;
        }

        .eng-title span { color: var(--theme-color1, #ff6b1e); }

        .eng-subtitle {
          font-family: var(--body-font-family);
          font-size: var(--body-font-size, 16px);
          color: rgba(255,255,255,0.45);
          max-width: 540px;
          margin: 0 auto;
          line-height: var(--body-line-height, 1.75);
        }

        /* ─── Cards Grid ─── */
        .eng-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 60px;
        }

        /* ─── Single Card ─── */
        .eng-card {
          padding: 44px 36px 40px;
          position: relative;
          cursor: pointer;
          transition: background 0.4s ease;
          border-right: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .eng-card:last-child { border-right: none; }

        .eng-card:hover,
        .eng-card.active {
          background: rgba(255,255,255,0.045);
        }

        /* Orange top accent bar */
        .eng-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--theme-color1, #ff6b1e);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.22,0.61,0.36,1);
          border-radius: 0;
        }

        .eng-card:hover::before,
        .eng-card.active::before {
          transform: scaleX(1);
        }

        /* "Most Popular" badge */
        .eng-badge {
          position: absolute;
          top: 20px; right: 20px;
          background: var(--theme-color1, #ff6b1e);
          color: #fff;
          font-family: var(--heading-font-family);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
        }

        /* Icon */
        .eng-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(255,107,30,0.1);
          border: 1px solid rgba(255,107,30,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: var(--theme-color1, #ff6b1e);
          margin-bottom: 28px;
          transition: background 0.35s ease, transform 0.35s ease;
        }

        .eng-card:hover .eng-icon,
        .eng-card.active .eng-icon {
          background: var(--theme-color1, #ff6b1e);
          color: #fff;
          transform: rotate(-8deg) scale(1.06);
          border-color: var(--theme-color1, #ff6b1e);
        }

        /* Title */
        .eng-card-title {
          font-family: var(--heading-font-family);
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
          letter-spacing: -0.3px;
          line-height: 1.2;
        }

        /* Description */
        .eng-card-desc {
          font-family: var(--body-font-family);
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          line-height: 1.75;
          margin-bottom: 28px;
          flex: 1;
        }

        /* Divider */
        .eng-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin-bottom: 24px;
          transition: background 0.3s ease;
        }

        .eng-card:hover .eng-divider,
        .eng-card.active .eng-divider {
          background: rgba(255,107,30,0.2);
        }

        /* Points list */
        .eng-points {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .eng-points li {
          font-family: var(--body-font-family);
          font-size: 13.5px;
          color: rgba(255,255,255,0.55);
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.5;
          transition: color 0.3s ease;
        }

        .eng-card:hover .eng-points li,
        .eng-card.active .eng-points li {
          color: rgba(255,255,255,0.75);
        }

        .eng-points li::before {
          content: "";
          width: 16px; height: 16px;
          border-radius: 50%;
          background: rgba(255,107,30,0.12);
          border: 1px solid rgba(255,107,30,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2 6l3 3 5-5' stroke='%23ff6b1e' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 10px;
        }

        /* ─── Bottom CTA ─── */
        .eng-cta-wrap {
          text-align: center;
        }

        .eng-cta-note {
          font-family: var(--body-font-family);
          font-size: 14px;
          color: rgba(255,255,255,0.35);
          margin-bottom: 24px;
          letter-spacing: 0.2px;
        }

        .eng-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--theme-color1, #ff6b1e);
          color: #fff !important;
          font-family: var(--heading-font-family);
          font-size: 15px;
          font-weight: 700;
          padding: 18px 42px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.38s cubic-bezier(0.165,0.84,0.44,1);
          box-shadow: 0 8px 30px rgba(255,107,30,0.35);
        }

        .eng-cta-btn i {
          font-size: 13px;
          transition: transform 0.35s ease;
        }

        .eng-cta-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 44px rgba(255,107,30,0.5);
          color: #fff !important;
        }

        .eng-cta-btn:hover i {
          transform: translateX(5px) rotate(-45deg);
        }

        /* ─── Responsive ─── */
        @media (max-width: 1100px) {
          .eng-grid {
            grid-template-columns: repeat(2, 1fr);
            border-radius: 20px;
          }
          .eng-card:nth-child(2) { border-right: none; }
          .eng-card:nth-child(1),
          .eng-card:nth-child(2) {
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
          .eng-card:nth-child(3) { border-right: 1px solid rgba(255,255,255,0.07); }
        }

        @media (max-width: 768px) {
          .eng-section { padding: 80px 0 90px; }
          .eng-header { margin-bottom: 50px; }
          .eng-grid {
            grid-template-columns: 1fr;
            border-radius: 16px;
          }
          .eng-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            padding: 36px 28px;
          }
          .eng-card:last-child { border-bottom: none; }
          .eng-card:nth-child(3) { border-right: none !important; }
        }

        @media (max-width: 480px) {
          .eng-card { padding: 30px 22px; }
          .eng-cta-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="eng-section">
        <div className="auto-container">
          {/* ── Header ── */}
          <div className="eng-header">
            <div className="eng-eyebrow">How We Work</div>
            {/* <h2 className="eng-title">
              Our Engagement <span>Models</span>
              <br />
              for Brandmingo Services
            </h2> */}
            <h3 className="eng-title">
              Our Engagement Models
              <br />
              for Brandmingo Services
            </h3>
            <p className="eng-subtitle">
              We offer flexible engagement models designed to align perfectly
              with your project scope, timelines, and business goals.
            </p>
          </div>

          {/* ── Cards ── */}
          <div className="eng-grid">
            {engagementData.map((card) => (
              <div
                key={card.id}
                className={`eng-card ${activeCard === card.id ? "active" : ""}`}
                onMouseEnter={() => setActiveCard(card.id)}
              >
                {card.tag && <span className="eng-badge">{card.tag}</span>}

                <div className="eng-icon">
                  <i className={card.icon} />
                </div>

                <h3 className="eng-card-title">{card.title}</h3>
                <p className="eng-card-desc">{card.desc}</p>

                <div className="eng-divider" />

                <ul className="eng-points">
                  {card.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="eng-cta-wrap">
            <p className="eng-cta-note">
              Not sure which model suits you? Let's talk and find the perfect
              fit.
            </p>
            <a href="#contact" className="eng-cta-btn">
              Request a Free Quote
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default EngagementModels;
