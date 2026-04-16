import React from "react";
import { useNavigate } from "react-router-dom";

const RelatedServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "fab fa-wordpress",
      number: "01",
      title: "WordPress Website",
      sub: "Flexible & SEO-friendly websites",
      path: "/wordpress",
    },
    {
      icon: "fas fa-shopping-cart",
      number: "02",
      title: "WooCommerce Website",
      sub: "Powerful online store solution",
      path: "/woocommerce",
    },
    {
      icon: "fas fa-store",
      number: "03",
      title: "Shopify Website",
      sub: "Best for e-commerce stores",
      path: "/shopify",
    },
    {
      icon: "fab fa-react",
      number: "04",
      title: "React Development",
      sub: "Fast, modern & dynamic websites",
      path: "/react",
    },
    {
      icon: "fab fa-php",
      number: "05",
      title: "PHP Development",
      sub: "Custom backend solutions",
      path: "/php",
    },
    {
      icon: "fas fa-database",
      number: "06",
      title: "Custom CRM",
      sub: "Built for your business workflow",
      path: "/crm",
    },
    {
      icon: "fas fa-search-dollar",
      number: "07",
      title: "SEO Optimizing",
      sub: "Rank high & get organic traffic",
      path: "/seo",
    },
    {
      icon: "fas fa-lightbulb",
      number: "08",
      title: "Custom Solutions",
      sub: "Tailored strategies for your unique goals",
      path: "/custom-solutions",
    },
  ];

  return (
    <section className="services-section pt-120 pb-120">
      <style>{`

        /* ── SECTION ── */
        .services-section {
          background: var(--theme-color3);
          position: relative;
          overflow: hidden;
        }

        /* Subtle dot grid texture */
        .services-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,107,30,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 0;
        }

        /* Ambient glow top-right */
        .services-section::after {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,107,30,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .services-section .container {
          position: relative;
          z-index: 1;
        }

        /* ── HEADER ── */
        .services-section .section-title {
          margin-bottom: 60px;
        }

        .services-section .section-title .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--body-font-family);
          color: var(--theme-color1);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .services-section .section-title .eyebrow::before,
        .services-section .section-title .eyebrow::after {
          content: '';
          width: 28px;
          height: 1px;
          background: var(--theme-color1);
          opacity: 0.5;
        }

        .services-section .section-title h2 {
          font-family: var(--heading-font-family);
          font-size: var(--h2-font-size);
          font-weight: var(--h2-font-weight);
          color: var(--headings-color);
          line-height: var(--line-height-heading);
          margin-top: 10px;
          margin-bottom: 0;
        }

        .services-section .section-title .title-line {
          width: 50px;
          height: 2px;
          background: var(--theme-color1);
          margin: 18px auto 0;
          border-radius: 2px;
        }

        /* ── GRID ── */
        .services-grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border-color2-rgba);
          border: 1px solid var(--border-color2-rgba);
          border-radius: 14px;
          overflow: hidden;
          margin-top: 0;
        }

        /* ── CARD ── */
        .service-item-card {
          background: var(--theme-color2);
          padding: 40px 28px 36px;
          border-radius: 0;
          border: none;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: background 0.35s ease;
        }

        /* Top accent line sweep on hover */
        .service-item-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--theme-color1);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.38s ease;
        }

        /* Warm glow overlay on hover */
        .service-item-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(var(--theme-color1-rgb), 0.06) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .service-item-card:hover {
          background: #191919;
        }

        .service-item-card:hover::before {
          transform: scaleX(1);
        }

        .service-item-card:hover::after {
          opacity: 1;
        }

        /* Number */
        .s-number {
          position: absolute;
          top: 16px;
          right: 20px;
          font-size: 58px;
          font-weight: 900;
          font-family: var(--heading-font-family);
          color: rgba(255,255,255,0.025);
          line-height: 1;
          transition: color 0.35s ease;
          user-select: none;
          z-index: 0;
        }

        .service-item-card:hover .s-number {
          color: rgba(var(--theme-color1-rgb), 0.07);
        }

        /* Icon box */
        .s-icon-box {
          width: 58px;
          height: 58px;
          background: rgba(var(--theme-color1-rgb), 0.08);
          border: 1px solid rgba(var(--theme-color1-rgb), 0.18);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          position: relative;
          z-index: 1;
          transition: background 0.35s ease, border-color 0.35s ease, transform 0.35s ease;
        }

        .service-item-card:hover .s-icon-box {
          background: var(--theme-color1);
          border-color: var(--theme-color1);
          transform: scale(1.07) rotate(-4deg);
        }

        .s-icon-box i {
          font-size: 24px;
          color: var(--theme-color1);
          transition: color 0.35s ease;
        }

        .service-item-card:hover .s-icon-box i {
          color: #fff;
        }

        /* Title */
        .service-item-card h5 {
          font-family: var(--heading-font-family);
          font-size: var(--h5-font-size);
          font-weight: var(--h5-font-weight);
          color: var(--headings-color);
          line-height: var(--line-height-heading-small);
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        /* Subtitle */
        .service-item-card p {
          font-family: var(--body-font-family);
          font-size: var(--body-font-size);
          color: var(--text-color);
          line-height: var(--body-line-height);
          margin: 0;
          position: relative;
          z-index: 1;
          flex: 1;
        }

        /* Explore link */
        .s-explore {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--body-font-family);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--theme-color1);
          margin-top: 20px;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .s-explore i {
          font-size: 10px;
          transition: transform 0.3s ease;
        }

        .service-item-card:hover .s-explore {
          opacity: 1;
          transform: translateX(0);
        }

        .service-item-card:hover .s-explore i {
          transform: translateX(3px);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1199px) {
          .services-grid-container { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 767px) {
          .services-grid-container { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 479px) {
          .services-grid-container { grid-template-columns: 1fr; }
          .service-item-card { padding: 32px 22px 28px; }
        }
      `}</style>

      <div className="container">
        {/* Section Header */}
        <div className="section-title text-center">
          <div className="eyebrow">Expertise</div>
          <h2>Our Core Services</h2>
          <div className="title-line"></div>
        </div>

        {/* Grid */}
        <div className="services-grid-container">
          {services.map((item, index) => (
            <div
              key={index}
              className="service-item-card"
              onClick={() => navigate(item.path)}
            >
              <div className="s-number">{item.number}</div>
              <div className="s-icon-box">
                <i className={item.icon}></i>
              </div>
              <h5>{item.title}</h5>
              <p>{item.sub}</p>
              <div className="s-explore">
                Explore <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
