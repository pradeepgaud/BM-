import React, { useState } from "react";

const pricingFactors = [
  { icon: "fas fa-layer-group", label: "Project Scope & Complexity" },
  { icon: "fas fa-handshake", label: "Engagement Model Selected" },
  { icon: "fas fa-users", label: "Team Size & Skill Mix" },
  { icon: "fas fa-clock", label: "Timeline & Delivery Speed" },
  { icon: "fas fa-plug", label: "Third-Party Integrations" },
];

const estimateSteps = [
  {
    num: "01",
    title: "Requirement Discussion",
    desc: "We understand your brand goals, vision, and project requirements in detail.",
  },
  {
    num: "02",
    title: "Technical Assessment",
    desc: "Our team evaluates scope, complexity, and the right strategy for your project.",
  },
  {
    num: "03",
    title: "Effort & Timeline Planning",
    desc: "We map out deliverables, milestones, and realistic timelines for execution.",
  },
  {
    num: "04",
    title: "Clear Cost Estimate",
    desc: "You receive a transparent, no-hidden-cost proposal tailored to your needs.",
  },
];

const PricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <style>{`
        /* ─── Section ─── */
        .prc-section {
          background-color: var(--body-bg, #0a0a0a);
          padding: 110px 0 120px;
          position: relative;
          overflow: hidden;
        }

        .prc-section::before {
          content: "";
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 70%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
        }

        /* ─── Header ─── */
        .prc-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .prc-eyebrow {
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
        .prc-eyebrow::before,
        .prc-eyebrow::after {
          content: "";
          display: block;
          width: 28px; height: 1px;
          background: var(--theme-color1, #ff6b1e);
          opacity: 0.5;
        }

        .prc-title {
          font-family: var(--heading-font-family);
          font-size: var(--h3-font-size);
          font-weight: 500;
          color: var(--headings-color, #fff);
          letter-spacing: -0.8px;
          margin-bottom: 18px;
          line-height: var(--line-height-heading);
        }
        .prc-title span { color: var(--theme-color1, #ff6b1e); }

        .prc-subtitle {
          font-family: var(--body-font-family);
          font-size: var(--body-font-size, 16px);
          color: rgba(255,255,255,0.45);
          max-width: 520px;
          margin: 0 auto;
          line-height: var(--body-line-height, 1.75);
        }

        /* ════════════════════════════════
           BLOCK 1 — Pricing Depends On
        ════════════════════════════════ */
        .prc-block {
          background: #ffffff;
          border-radius: 24px;
          padding: 50px 50px 54px;
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
        }

        /* Card subtle inner corner accent */
        .prc-block::after {
          content: "";
          position: absolute;
          top: 0; right: 0;
          width: 180px; height: 180px;
          background: radial-gradient(circle at top right, rgba(255,107,30,0.07), transparent 70%);
          pointer-events: none;
        }

        .prc-block-label {
          font-family: var(--heading-font-family);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--theme-color1, #ff6b1e);
          margin-bottom: 36px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .prc-block-label::after {
          content: "";
          flex: 1;
          height: 1px;
          background: rgba(0,0,0,0.08);
        }

        /* Factor cards row */
        .prc-factors {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .prc-factor-card {
          background: #f8f8f8;
          border: 1px solid rgba(0,0,0,0.06);
          border-radius: 16px;
          padding: 28px 18px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          cursor: default;
          transition: all 0.35s cubic-bezier(0.22,0.61,0.36,1);
          position: relative;
          overflow: hidden;
        }

        .prc-factor-card::before {
          content: "";
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--theme-color1, #ff6b1e);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .prc-factor-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,107,30,0.2);
          box-shadow: 0 14px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,107,30,0.12);
          background: #fff;
        }

        .prc-factor-card:hover::before { transform: scaleX(1); }

        .prc-factor-icon {
          width: 54px; height: 54px;
          border-radius: 14px;
          background: rgba(255,107,30,0.08);
          border: 1px solid rgba(255,107,30,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: var(--theme-color1, #ff6b1e);
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .prc-factor-card:hover .prc-factor-icon {
          background: var(--theme-color1, #ff6b1e);
          color: #fff;
          transform: rotate(-8deg) scale(1.08);
          border-color: var(--theme-color1, #ff6b1e);
        }

        .prc-factor-label {
          font-family: var(--body-font-family);
          font-size: 13.5px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.4;
        }

        /* ════════════════════════════════
           BLOCK 2 — How We Estimate Cost
        ════════════════════════════════ */
        .prc-steps-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
          margin-top: 36px;
        }

        /* Connecting line behind steps */
        .prc-steps-row::before {
          content: "";
          position: absolute;
          top: 36px;
          left: calc(12.5% + 4px);
          right: calc(12.5% + 4px);
          height: 2px;
          background: linear-gradient(90deg, rgba(255,107,30,0.3), rgba(255,107,30,0.1), rgba(255,107,30,0.3));
          z-index: 0;
        }

        .prc-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 16px;
          position: relative;
          z-index: 1;
          cursor: pointer;
        }

        /* Step number circle */
        .prc-step-num {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--heading-font-family);
          font-size: 18px;
          font-weight: 800;
          color: rgba(0,0,0,0.25);
          margin-bottom: 24px;
          transition: all 0.38s cubic-bezier(0.22,0.61,0.36,1);
          position: relative;
          z-index: 2;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }

        .prc-step:hover .prc-step-num,
        .prc-step.active .prc-step-num {
          background: var(--theme-color1, #ff6b1e);
          border-color: var(--theme-color1, #ff6b1e);
          color: #fff;
          transform: scale(1.1);
          box-shadow: 0 8px 28px rgba(255,107,30,0.4);
        }

        .prc-step-title {
          font-family: var(--heading-font-family);
          font-size: 15px;
          font-weight: 700;
          color: #0a0a0a;
          margin-bottom: 10px;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .prc-step:hover .prc-step-title,
        .prc-step.active .prc-step-title {
          color: var(--theme-color1, #ff6b1e);
        }

        .prc-step-desc {
          font-family: var(--body-font-family);
          font-size: 13px;
          color: rgba(0,0,0,0.45);
          line-height: 1.7;
          max-width: 170px;
          margin: 0 auto;
          transition: color 0.3s ease;
        }

        .prc-step:hover .prc-step-desc,
        .prc-step.active .prc-step-desc {
          color: rgba(0,0,0,0.65);
        }

        /* ─── Bottom CTA ─── */
        .prc-cta-wrap {
          text-align: center;
          margin-top: 60px;
        }

        .prc-cta-note {
          font-family: var(--body-font-family);
          font-size: 14px;
          color: rgba(255,255,255,0.3);
          margin-bottom: 24px;
        }

        .prc-cta-btn {
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
        .prc-cta-btn i { font-size: 13px; transition: transform 0.35s ease; }
        .prc-cta-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 44px rgba(255,107,30,0.5);
          color: #fff !important;
        }
        .prc-cta-btn:hover i { transform: translateX(5px) rotate(-45deg); }

        /* ─── Responsive ─── */
        @media (max-width: 1100px) {
          .prc-factors { grid-template-columns: repeat(3, 1fr); }
          .prc-steps-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          .prc-steps-row::before { display: none; }
          .prc-block { padding: 40px 36px 44px; }
        }

        @media (max-width: 768px) {
          .prc-section { padding: 80px 0 90px; }
          .prc-header { margin-bottom: 56px; }
          .prc-factors { grid-template-columns: repeat(2, 1fr); }
          .prc-block { padding: 34px 26px 38px; border-radius: 18px; }
          .prc-steps-row { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 520px) {
          .prc-factors { grid-template-columns: 1fr 1fr; }
          .prc-steps-row { grid-template-columns: 1fr; gap: 28px; }
          .prc-cta-btn { width: 100%; justify-content: center; }
          .prc-step-desc { max-width: 100%; }
        }

        @media (max-width: 380px) {
          .prc-factors { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="prc-section">
        <div className="auto-container">
          {/* ── Header ── */}
          <div className="prc-header">
            <div className="prc-eyebrow">Transparent Pricing</div>
            {/* <h3 className="prc-title">
              Pricing & <span>Cost Estimation</span>
            </h3> */}

            <h3 className="prc-title">Pricing & Cost Estimation</h3>
            <p className="prc-subtitle">
              Our branding services pricing is flexible, transparent, and
              tailored to your needs — no fixed packages, no hidden costs.
            </p>
          </div>

          {/* ════ BLOCK 1 — Pricing Depends On ════ */}
          <div className="prc-block">
            <div className="prc-block-label">Pricing Depends On</div>
            <div className="prc-factors">
              {pricingFactors.map((f, i) => (
                <div className="prc-factor-card" key={i}>
                  <div className="prc-factor-icon">
                    <i className={f.icon} />
                  </div>
                  <span className="prc-factor-label">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ════ BLOCK 2 — How We Estimate Cost ════ */}
          <div className="prc-block">
            <div className="prc-block-label">How We Estimate Cost</div>
            <div className="prc-steps-row">
              {estimateSteps.map((step, i) => (
                <div
                  key={i}
                  className={`prc-step ${activeStep === i ? "active" : ""}`}
                  onMouseEnter={() => setActiveStep(i)}
                >
                  <div className="prc-step-num">{step.num}</div>
                  <div className="prc-step-title">{step.title}</div>
                  <p className="prc-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="prc-cta-wrap">
            <p className="prc-cta-note">
              Get a custom quote tailored to your project — no obligations.
            </p>
            <a href="#contact" className="prc-cta-btn">
              Get a Free Estimate
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
