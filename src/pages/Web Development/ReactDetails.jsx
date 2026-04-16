import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// IMAGES (PATH CHECK KARO)
import pageTitleBg from "../../assets/images/background/page-title.jpg";
import serviceImg from "../../assets/images/resource/service-details.jpg";
import d1 from "../../assets/images/resource/service-d1.jpg";
import d2 from "../../assets/images/resource/service-d2.jpg";
import RelatedServices from "../../components/RelatedServices/RelatedServices";
import PortfolioSlider from "../../components/PortfolioSlider/PortfolioSlider";

const THEME = "#ff6b1e";

const ReactDetail = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const swiper = new Swiper(".project-image-slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoHeight: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      },
    });

    return () => {
      if (swiper && swiper.destroy) {
        swiper.destroy(true, true);
      }
    };
  }, []);

  const websiteTypes = [
    {
      icon: "fas fa-briefcase",
      title: "Business Website",
      desc: "Best for service-based businesses to showcase services, portfolio, and contact details.",
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Website",
      desc: "Sell products online with payment integration, cart system, and order tracking.",
    },
    {
      icon: "fas fa-palette",
      title: "Portfolio Website",
      desc: "Perfect for freelancers, designers, and agencies to showcase their work.",
    },
    {
      icon: "fas fa-cogs",
      title: "Custom Web Applications",
      desc: "Advanced CRM, booking platforms, dashboards — built specifically for your business.",
    },
  ];

  const technologies = [
    {
      icon: "fab fa-react",
      title: "React Development",
      desc: "Fast, modern, dynamic websites",
    },
    {
      icon: "fas fa-store",
      title: "Shopify Development",
      desc: "Best for e-commerce stores",
    },
    {
      icon: "fab fa-wordpress",
      title: "WordPress Development",
      desc: "Flexible and SEO-friendly websites",
    },
    {
      icon: "fab fa-php",
      title: "PHP Development",
      desc: "Custom backend solutions",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirement Analysis",
      desc: "Understanding your business, target audience, and goals before anything else.",
    },
    {
      step: "02",
      title: "UI/UX Design",
      desc: "Designing a clean, modern, and user-friendly interface that reflects your brand.",
    },
    {
      step: "03",
      title: "Development",
      desc: "Building a fast, scalable, and fully responsive React frontend.",
    },
    {
      step: "04",
      title: "Testing",
      desc: "Ensuring everything works perfectly across all devices and browsers.",
    },
    {
      step: "05",
      title: "Launch",
      desc: "Deploying your website smoothly and making it live without issues.",
    },
  ];
  const differentiators = [
    "Mobile Responsive",
    "SEO Optimized",
    "Fast Loading",
    "Conversion Focused",
    "Easy to Manage",
  ];

  const platforms = [
    {
      name: "Shopify",
      best: "Product-based businesses",
      icon: "fas fa-shopping-bag",
    },
    {
      name: "WordPress",
      best: "Services, blogs & SEO",
      icon: "fab fa-wordpress",
    },
    { name: "React", best: "Speed & advanced UI", icon: "fab fa-react" },
    { name: "Custom Dev", best: "Unique business needs", icon: "fas fa-code" },
  ];

  const services = [
    { name: "React Development", path: "/react" },
    { name: "Shopify Website", path: "/shopify" },
    { name: "Wordpress Website", path: "/wordpress" },
    { name: "Woocommerce Website", path: "/woocommerce" },
    { name: "PHP Development", path: "/php" },
    { name: "Custom CRM", path: "/crm" },
  ];

  return (
    <div className="page-wrapper">
      <style>{`
  .wd-outer {
    display: flex;
    align-items: flex-start;   /* ZARURI hai */
  }

  .wd-sidebar-col {
    width: 320px;
    flex-shrink: 0;
    position: sticky;
    top: 100px;
    align-self: flex-start;   /* ZARURI hai */
  }

  .wd-content-col {
    flex: 1;
    min-width: 0;
    padding-left: 30px;
  }

  @media (max-width: 991px) {
    .wd-outer { flex-direction: column; }
    .wd-sidebar-col { width: 100%; position: static; margin-bottom: 40px; }
    .wd-content-col { padding-left: 0; }
  }
`}</style>

      {/* HERO */}
      <section
        className="page-title"
        style={{ backgroundImage: `url(${pageTitleBg})` }}
      >
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">React Development</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>React Development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section
        className="services-details pt-120 pb-120"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <div className="container">
          <div className="wd-outer">
            {/* ══ LEFT — STICKY SIDEBAR ══════════════════════════════════ */}
            <div className="wd-sidebar-col">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="sidebar-service-list">
                    <ul>
                      {services.map((item, i) => (
                        <li
                          key={i}
                          className={
                            location.pathname === item.path ? "current" : ""
                          }
                        >
                          <Link
                            to={item.path}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <i className="fas fa-angle-right"></i>
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SAME UI BELOW — NO CHANGE */}
                  <div className="service-details-help">
                    <h2 className="help-title">
                      Let’s Build <br /> Your Website
                    </h2>
                    <div className="help-icon">
                      <i className="fas fa-phone"></i>
                    </div>

                    <div className="help-contact">
                      <p>Need help? Talk to an expert</p>
                      <a href="tel:+919990613140">+91 99906 13140</a>
                    </div>
                  </div>

                  <div className="service-sidebar-single-btn mt-4">
                    <a href="#" className="theme-btn btn-style-one w-100">
                      <i className="fas fa-file-pdf"></i> download pdf file
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ══ RIGHT — SCROLLABLE CONTENT ════════════════════════════ */}
            <div className="wd-content-col">
              <div className="services-details__content">
                {/* TOP IMAGE */}
                <div
                  style={{
                    width: "100%",
                    height: "350px",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={serviceImg}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                {/* S1 */}
                <h3 className="mt-4 mb-2">Build with React</h3>
                <p className="text mb-3">
                  React development is the process of building fast, dynamic,
                  and high-performance websites using modern JavaScript
                  technology Now understand this clearly — if your website feels
                  slow, outdated, or difficult to use, users will leave
                  immediately.
                </p>

                <p className="text mb-4">
                  React helps you create a smooth, fast, and interactive
                  experience that keeps users engaged and increases conversions.
                </p>

                {/* S2 */}
                <h3 className="mb-2">What is React Development?</h3>
                <p className="text mb-3">
                  React is a modern frontend JavaScript library used to build
                  user interfaces through reusable components.
                </p>
                <p className="text mb-2">
                  Let’s simplify this —Instead of loading the entire website
                  again and again, React updates only the parts that change.
                  This makes your website:
                </p>
                {/* <div className="row g-2 mb-3"> */}
                <div className="row g-3 mb-3">
                  {[
                    { icon: "fas fa-bolt", label: "Faster" },
                    { icon: "fas fa-mobile-alt", label: "More Responsive" },
                    { icon: "fas fa-chart-line", label: "Generate Leads 24/7" },
                    { icon: "fas fa-hand-pointer", label: "Smooth to Use" },
                  ].map((item, i) => (
                    <div className="col-6" key={i}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <i
                          className={item.icon}
                          style={{ fontSize: "15px", color: THEME }}
                        ></i>
                        <span
                          className="text"
                          style={{
                            marginBottom: 0,
                            fontSize: "15px",
                            lineHeight: "2.2",
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* <p
                  className="text mb-4"
                  style={{ fontStyle: "italic", opacity: 0.85 }}
                >
                  So in simple terms — React makes your website feel like an
                  app, not just a static page.
                </p> */}
                <p
                  className="text mb-4"
                  style={{
                    fontStyle: "italic",
                    opacity: 0.85,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    paddingTop: "14px",
                    marginTop: "4px",
                  }}
                >
                  So in simple terms — React makes your website feel like an
                  app, not just a static page.
                </p>

                {/* SLIDER */}
                <div
                  className="swiper project-image-slider pb-0"
                  style={{ width: "100%" }}
                >
                  <div className="swiper-wrapper">
                    {[
                      {
                        img: d1,
                        cap: "",
                      },
                      {
                        img: d2,
                        cap: "",
                      },
                    ].map((s, i) => (
                      <div className="swiper-slide" key={i}>
                        <div
                          style={{
                            width: "100%",
                            height: "220px",
                            overflow: "hidden",
                            borderRadius: "6px",
                          }}
                        >
                          <img
                            src={s.img}
                            alt=""
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                            }}
                          />
                        </div>
                        <p className="text mt-2">{s.cap}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* S3 */}
                {/* WHY CHOOSE REACT */}
                <div className="mt-5">
                  <h3 className="mb-2">Why Choose React for Your Website?</h3>
                  <p className="text mb-4">
                    If you are serious about performance, React is not an option
                    — it's a smart decision.
                  </p>
                  <div className="row g-3 mb-4">
                    {[
                      {
                        icon: "fas fa-bolt",
                        title: "Lightning-fast Loading Speed",
                        desc: "React updates only the changed parts of the page — no full reloads, no waiting.",
                      },
                      {
                        icon: "fas fa-mobile-alt",
                        title: "Smooth App-like Experience",
                        desc: "Users get a fluid, interactive experience that feels like a native app, not a static page.",
                      },
                      {
                        icon: "fas fa-expand-arrows-alt",
                        title: "Highly Scalable",
                        desc: "Built to grow with your business — add features, pages, and users without rebuilding.",
                      },
                      {
                        icon: "fas fa-paint-brush",
                        title: "Clean & Modern UI/UX",
                        desc: "React enables polished, component-based interfaces that build instant brand trust.",
                      },
                    ].map((benefit, i) => (
                      <div className="col-md-6" key={i}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "16px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "10px",
                            padding: "20px",
                            height: "100%",
                            background: "rgba(255,255,255,0.03)",
                            transition: "border-color 0.3s, background 0.3s",
                            cursor: "default",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = THEME;
                            e.currentTarget.style.background =
                              "rgba(255,107,30,0.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor =
                              "rgba(255,255,255,0.08)";
                            e.currentTarget.style.background =
                              "rgba(255,255,255,0.03)";
                          }}
                        >
                          <div
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "10px",
                              background: THEME,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <i
                              className={benefit.icon}
                              style={{ fontSize: "20px", color: "#fff" }}
                            ></i>
                          </div>
                          <div>
                            <h6
                              style={{ marginBottom: "6px", fontWeight: 600 }}
                            >
                              {benefit.title}
                            </h6>
                            <p
                              className="text"
                              style={{
                                marginBottom: 0,
                                opacity: 0.8,
                                fontSize: "14px",
                              }}
                            >
                              {benefit.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom highlight quote */}
                  <p
                    className="text mb-0"
                    style={{
                      padding: "18px 22px",
                      borderLeft: `4px solid ${THEME}`,
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "0 8px 8px 0",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="fas fa-bolt"
                      style={{ color: THEME, fontSize: "18px", flexShrink: 0 }}
                    ></i>
                    A faster website directly improves user retention and
                    conversions.
                  </p>
                </div>

                {/* S4 */}
                {/* WHO SHOULD USE REACT */}
                <div className="mt-5">
                  <h3 className="mb-2">Who Should Use React?</h3>
                  <p className="text mb-4">
                    This is important — React is not for everyone, but for the
                    right business, it is powerful.
                  </p>

                  <div className="row g-3">
                    {[
                      {
                        icon: "fas fa-rocket",
                        title: "Startups Building Scalable Platforms",
                        desc: "React grows with you — from MVP to full-scale product without rebuilding from scratch.",
                      },
                      {
                        icon: "fas fa-tachometer-alt",
                        title: "Businesses Needing High-Speed Websites",
                        desc: "If speed and performance are a priority, React's virtual DOM makes it the top choice.",
                      },
                      {
                        icon: "fas fa-layer-group",
                        title: "SaaS Products & Web Applications",
                        desc: "Complex dashboards, portals, and tools are where React truly shines.",
                      },
                      {
                        icon: "fas fa-laptop-code",
                        title: "Agencies & Tech-Driven Brands",
                        desc: "Modern brands that want a cutting-edge digital presence choose React for its flexibility.",
                      },
                    ].map((item, i) => (
                      <div className="col-md-6" key={i}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "16px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "10px",
                            padding: "20px",
                            height: "100%",
                            background: "rgba(255,255,255,0.03)",
                            transition: "border-color 0.3s, background 0.3s",
                            cursor: "default",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = THEME;
                            e.currentTarget.style.background =
                              "rgba(255,107,30,0.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor =
                              "rgba(255,255,255,0.08)";
                            e.currentTarget.style.background =
                              "rgba(255,255,255,0.03)";
                          }}
                        >
                          <div
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "8px",
                              background: THEME,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <i
                              className={item.icon}
                              style={{ fontSize: "20px", color: "#fff" }}
                            ></i>
                          </div>
                          <div>
                            <h6
                              style={{ marginBottom: "6px", fontWeight: 600 }}
                            >
                              {item.title}
                            </h6>
                            <p
                              className="text"
                              style={{
                                marginBottom: 0,
                                opacity: 0.8,
                                fontSize: "14px",
                              }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* S5 */}
                {/* WHAT YOU GET */}
                <div className="mt-5">
                  <h3 className="mb-2">
                    What You Get with Our React Development Services
                  </h3>
                  <p className="text mb-4">
                    We don't just build websites — we build performance-driven
                    systems.
                  </p>

                  <div
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      padding: "28px",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: THEME,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "20px",
                      }}
                    >
                      Our Deliverables
                    </p>
                    <div className="row g-3">
                      {[
                        {
                          icon: "fas fa-pencil-ruler",
                          label: "Custom UI/UX Design",
                        },
                        {
                          icon: "fas fa-mobile-alt",
                          label: "Fully Responsive Development",
                        },
                        {
                          icon: "fas fa-plug",
                          label: "API & Third-Party Integrations",
                        },
                        {
                          icon: "fas fa-fighter-jet",
                          label: "Speed Optimization",
                        },
                        { icon: "fas fa-search", label: "SEO-Ready Structure" },
                        {
                          icon: "fas fa-user-shield",
                          label: "Admin Panel (if required)",
                        },
                      ].map((item, i) => (
                        <div className="col-md-6" key={i}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "14px",
                              padding: "14px 16px",
                              border: "1px solid rgba(255,255,255,0.06)",
                              borderRadius: "8px",
                              background: "rgba(255,255,255,0.02)",
                              transition: "border-color 0.3s",
                              cursor: "default",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.borderColor = THEME)
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.borderColor =
                                "rgba(255,255,255,0.06)")
                            }
                          >
                            <div
                              style={{
                                width: "38px",
                                height: "38px",
                                borderRadius: "8px",
                                border: `1.5px solid ${THEME}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                              }}
                            >
                              <i
                                className={item.icon}
                                style={{ fontSize: "16px", color: THEME }}
                              ></i>
                            </div>
                            <span style={{ fontWeight: 500, fontSize: "14px" }}>
                              {item.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* S6 */}
                <div className="mt-5">
                  <h3 className="mb-2">Our React Development Process</h3>
                  <p className="text mb-4">
                    A good website is never built randomly — we follow a
                    structured approach that ensures quality at every step.
                  </p>
                  {processSteps.map((step, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "20px",
                        marginBottom:
                          i < processSteps.length - 1 ? "16px" : "0",
                        alignItems: "flex-start",
                        position: "relative",
                      }}
                    >
                      {/* Connector line between steps */}
                      {i < processSteps.length - 1 && (
                        <div
                          style={{
                            position: "absolute",
                            left: "27px",
                            top: "56px",
                            width: "2px",
                            height: "calc(100% - 10px)",
                            background: `linear-gradient(to bottom, ${THEME}, rgba(255,107,30,0.1))`,
                            zIndex: 0,
                          }}
                        />
                      )}
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "50%",
                          background: THEME,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "15px",
                          color: "#fff",
                          flexShrink: 0,
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        {step.step}
                      </div>
                      <div
                        style={{
                          flex: 1,
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "10px",
                          padding: "18px 20px",
                          background: "rgba(255,255,255,0.03)",
                          transition: "border-color 0.3s",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.borderColor = THEME)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.08)")
                        }
                      >
                        <h6 style={{ marginBottom: "6px", fontWeight: 600 }}>
                          {step.title}
                        </h6>
                        <p
                          className="text"
                          style={{ marginBottom: 0, opacity: 0.8 }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <div className="faq-content mt-5">
                  <h3 className="mb-3">Frequently Asked Question</h3>
                  <ul className="accordion-box mt-40">
                    {[
                      {
                        q: "What is React used for?",
                        a: "React is used to build fast and interactive user interfaces for websites and web applications.",
                      },
                      {
                        q: "Is React better than WordPress?",
                        a: "It depends on your needs.React is better for performance and custom applications, while WordPress is better for simple websites and content management.",
                      },
                      {
                        q: "Is React SEO-friendly?",
                        a: "Yes — when implemented correctly, React websites can be fully SEO optimized with fast loading and proper structure.",
                      },
                      {
                        q: "How much does React development cost?",
                        a: "The cost depends on features and complexity. Basic projects may start from ₹25,000, while advanced applications can go higher.",
                      },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className={`accordion block ${activeIndex === index ? "active-block" : ""}`}
                      >
                        <div
                          className="acc-btn"
                          onClick={() =>
                            setActiveIndex(activeIndex === index ? null : index)
                          }
                        >
                          {item.q}
                          <div
                            className={`icon fa ${activeIndex === index ? "fa-minus" : "fa-plus"}`}
                          ></div>
                        </div>
                        <div
                          className={`acc-content ${activeIndex === index ? "current" : ""}`}
                        >
                          <div className="text">{item.a}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* ══ end right ══ */}
          </div>
        </div>
        <div style={{ marginTop: "60px" }}>
          <RelatedServices />
          <PortfolioSlider />
        </div>
      </section>
    </div>
  );
};

export default ReactDetail;
