import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Link } from "react-router-dom";
// IMAGES (PATH CHECK KARO)
import pageTitleBg from "../../assets/images/background/page-title.jpg";
import serviceImg from "../../assets/images/resource/service-details.jpg";
import d1 from "../../assets/images/resource/service-d1.jpg";
import d2 from "../../assets/images/resource/service-d2.jpg";

const THEME = "#ff6b1e";

const WebDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
      title: "Understanding Your Business",
      desc: "We study your goals, target audience, and competitors before writing a single line of code.",
    },
    {
      step: "02",
      title: "Planning & Structure",
      desc: "We decide pages, layout, and user flow — everything mapped out clearly before design begins.",
    },
    {
      step: "03",
      title: "UI/UX Design",
      desc: "Clean, modern, and easy-to-use design that reflects your brand and builds trust instantly.",
    },
    {
      step: "04",
      title: "Development",
      desc: "Fast, secure, and fully responsive coding using the right technology for your business.",
    },
    {
      step: "05",
      title: "Testing & Launch",
      desc: "We make sure everything works perfectly across all devices before going live.",
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
            <h1 className="title">Web Development</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Web Development</li>
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
                        <li key={i}>
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
                <h3 className="mt-4 mb-2">What is Web Development?</h3>
                <p className="text mb-3">
                  Web development is the process of creating a website that runs
                  on the internet. It can be as simple as an informational
                  website or as advanced as an e-commerce store, CRM system, or
                  custom web application.
                </p>
                <p className="text mb-3">
                  Now understand this clearly — A website is not just a page on
                  Google. It is your digital office, your sales system, and your
                  brand identity working 24/7.
                </p>
                <p className="text mb-4">
                  If your business is not properly represented online, you are
                  already missing opportunities.
                </p>

                {/* S2 */}
                <h3 className="mb-2">Why Does Your Business Need a Website?</h3>
                <p className="text mb-3">
                  Let's think practically. When someone hears about your
                  business, what do they do first? They search you on Google.
                  Now if they don't find you — or your website looks outdated —
                  they lose trust immediately.
                </p>
                <p className="text mb-2">A professional website helps you:</p>
                <ul
                  className="text mb-3"
                  style={{
                    paddingLeft: "22px",
                    lineHeight: "2.2",
                    listStyleType: "disc",
                  }}
                >
                  <li>Build trust instantly</li>
                  <li>Show your services clearly</li>
                  <li>Generate leads 24/7</li>
                  <li>Rank on Google (SEO)</li>
                  <li>Compete with bigger brands</li>
                </ul>
                <p
                  className="text mb-4"
                  style={{ fontStyle: "italic", opacity: 0.85 }}
                >
                  So it's not optional anymore — it's essential.
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
                        cap: "Modern, fast, and responsive websites built for maximum performance and business growth.",
                      },
                      {
                        img: d2,
                        cap: "Custom e-commerce and web applications designed to convert visitors into paying customers.",
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
                <div className="mt-5">
                  <h3 className="mb-2">Types of Websites We Develop</h3>
                  <p className="text mb-4">
                    Not every business needs the same type of website — and
                    that's where most people go wrong. We analyze your goals
                    first, then recommend the right solution for you.
                  </p>
                  <div className="row g-3">
                    {websiteTypes.map((type, i) => (
                      <div className="col-md-6" key={i}>
                        <div
                          style={{
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "10px",
                            padding: "24px 20px",
                            height: "100%",
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
                          <div style={{ marginBottom: "12px" }}>
                            <i
                              className={type.icon}
                              style={{ fontSize: "28px", color: THEME }}
                            ></i>
                          </div>
                          <h5 style={{ marginBottom: "8px", fontWeight: 600 }}>
                            {type.title}
                          </h5>
                          <p
                            className="text"
                            style={{ marginBottom: 0, opacity: 0.8 }}
                          >
                            {type.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* S4 */}
                <div className="mt-5">
                  <h3 className="mb-2">Technologies We Use</h3>
                  <p className="text mb-4">
                    We don't use outdated methods. We use tools that are fast,
                    scalable, and future-ready. Each technology is chosen based
                    on your business goal — not randomly.
                  </p>
                  <div className="row g-3">
                    {technologies.map((tech, i) => (
                      <div className="col-md-6" key={i}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "16px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "10px",
                            padding: "20px",
                            background: "rgba(255,255,255,0.03)",
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
                              className={tech.icon}
                              style={{ fontSize: "22px", color: "#fff" }}
                            ></i>
                          </div>
                          <div>
                            <h6
                              style={{ marginBottom: "4px", fontWeight: 600 }}
                            >
                              {tech.title}
                            </h6>
                            <p
                              className="text"
                              style={{
                                marginBottom: 0,
                                opacity: 0.75,
                                fontSize: "14px",
                              }}
                            >
                              {tech.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* S5 */}
                <div className="mt-5">
                  <h3 className="mb-2">Our Web Development Process</h3>
                  <p className="text mb-4">
                    A good website is never built randomly. We follow a clear,
                    proven process that ensures your project is delivered on
                    time, on brief, and built to perform.
                  </p>
                  {processSteps.map((step, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "20px",
                        marginBottom: "20px",
                        alignItems: "flex-start",
                      }}
                    >
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
                          fontSize: "16px",
                          color: "#fff",
                          flexShrink: 0,
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
                        }}
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

                {/* S6 */}
                <div className="mt-5">
                  <h3 className="mb-2">What Makes Our Websites Different?</h3>
                  <p className="text mb-3">
                    Most websites look good — but don't perform. We focus on
                    performance. Our websites are built to drive real results
                    for your business, not just win design awards.
                  </p>
                  <div
                    style={{
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "10px",
                      padding: "28px",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div className="row g-3">
                      {differentiators.map((item, i) => (
                        <div className="col-md-6" key={i}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                background: THEME,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                              }}
                            >
                              <i
                                className="fas fa-check"
                                style={{ color: "#fff", fontSize: "13px" }}
                              ></i>
                            </div>
                            <span style={{ fontWeight: 500 }}>{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p
                      className="text mt-4 mb-0"
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        paddingTop: "18px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <i
                        className="fas fa-hand-point-right"
                        style={{ color: THEME, fontSize: "18px" }}
                      ></i>
                      A website should generate business, not just look
                      attractive.
                    </p>
                  </div>
                </div>

                {/* S7 */}
                <div className="mt-5">
                  <h3 className="mb-2">Do You Need an E-commerce Website?</h3>
                  <p className="text mb-4">
                    If you are selling products and still not online — you are
                    limiting your growth. An e-commerce website works 24/7,
                    reaching customers even while you sleep.
                  </p>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div
                        style={{
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "10px",
                          padding: "24px",
                          height: "100%",
                          background: "rgba(255,255,255,0.03)",
                        }}
                      >
                        <h6
                          style={{
                            marginBottom: "16px",
                            fontWeight: 600,
                            color: THEME,
                          }}
                        >
                          An E-commerce Website Allows You To:
                        </h6>
                        {[
                          "Sell 24/7",
                          "Accept online payments",
                          "Manage orders easily",
                          "Reach customers beyond your city",
                        ].map((item, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              marginBottom: "12px",
                            }}
                          >
                            <i
                              className="fas fa-arrow-right"
                              style={{ color: THEME, fontSize: "13px" }}
                            ></i>
                            <span className="text" style={{ marginBottom: 0 }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        style={{
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "10px",
                          padding: "24px",
                          height: "100%",
                          background: "rgba(255,255,255,0.03)",
                        }}
                      >
                        <h6
                          style={{
                            marginBottom: "16px",
                            fontWeight: 600,
                            color: THEME,
                          }}
                        >
                          We Provide:
                        </h6>
                        {[
                          "Shopify store setup",
                          "Payment gateway integration",
                          "Product & inventory management",
                          "Conversion-focused design",
                        ].map((item, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              marginBottom: "12px",
                            }}
                          >
                            <i
                              className="fas fa-check-circle"
                              style={{ color: THEME, fontSize: "14px" }}
                            ></i>
                            <span className="text" style={{ marginBottom: 0 }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* S8 */}
                <div className="mt-5 mb-4">
                  <h3 className="mb-2">Which Platform is Best for You?</h3>
                  <p className="text mb-4">
                    This is where most people get confused. Every platform has a
                    purpose — and choosing the wrong one wastes time and money.
                    Let's simplify it for you.
                  </p>
                  <div className="row g-3">
                    {platforms.map((p, i) => (
                      <div className="col-md-6" key={i}>
                        <div
                          style={{
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "10px",
                            padding: "22px 20px",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
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
                          <div
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "10px",
                              border: `2px solid ${THEME}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <i
                              className={p.icon}
                              style={{ fontSize: "22px", color: THEME }}
                            ></i>
                          </div>
                          <div>
                            <h6
                              style={{ marginBottom: "4px", fontWeight: 700 }}
                            >
                              {p.name}
                            </h6>
                            <p
                              className="text"
                              style={{
                                marginBottom: 0,
                                opacity: 0.75,
                                fontSize: "14px",
                              }}
                            >
                              Best for {p.best}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p
                    className="text mt-4"
                    style={{
                      padding: "18px 22px",
                      borderLeft: `4px solid ${THEME}`,
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: "0 8px 8px 0",
                      fontWeight: 500,
                      marginBottom: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="fas fa-hand-point-right"
                      style={{ color: THEME, fontSize: "18px", flexShrink: 0 }}
                    ></i>
                    The right platform depends on your goal — and we help you
                    choose wisely so you invest your money in the right
                    direction from day one.
                  </p>
                </div>

                {/* FAQ */}
                <div className="faq-content mt-5">
                  <h3 className="mb-3">Frequently Asked Question</h3>
                  <ul className="accordion-box mt-40">
                    {[
                      {
                        q: "What types of websites do you develop?",
                        a: "We develop all types — Business Websites, E-commerce Stores, Portfolio Websites, and Custom Web Applications like CRM systems, booking platforms, and dashboards. Each solution is tailored to your specific business goals.",
                      },
                      {
                        q: "Which platform is best for my business — Shopify, WordPress, or React?",
                        a: "It depends on your business type. Shopify is best for product-based businesses. WordPress is ideal for services, blogs, and SEO. React is best for speed and advanced UI. Custom Development suits unique needs. We guide you to the right choice after understanding your goals.",
                      },
                      {
                        q: "Will my website be mobile-friendly and SEO optimized?",
                        a: "Absolutely. Every website we build is fully mobile responsive, fast loading, and SEO optimized from the ground up. A website should not just look attractive — it should generate real business results.",
                      },
                      {
                        q: "What is your web development process?",
                        a: "We follow a clear 5-step process: Understanding your business → Planning & Structure → UI/UX Design → Development → Testing & Launch. We make sure everything works perfectly before going live.",
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
      </section>
    </div>
  );
};

export default WebDevelopment;
