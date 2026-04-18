import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// IMAGES (PATH CHECK KARO)
import pageTitleBg from "../../assets/images/background/page-title.jpg";
import serviceImg from "../../assets/images/resource/react.png";
import d1 from "../../assets/images/resource/service-d1.jpg";
import d2 from "../../assets/images/resource/service-d2.jpg";
import RelatedServices from "../../components/RelatedServices/RelatedServices";
import PortfolioSlider from "../../components/PortfolioSlider/PortfolioSlider";
import ReactExpertiseDetails from "../../components/ReactExpertiseDetails/ReactExpertiseDetails";
import TechnologyStack from "../../components/TechnologyStack/TechnologyStack";
import ReactExpertiseTabs from "../../components/ReactExpertiseTabs/ReactExpertiseTabs";
import WhyChooseBrandmingo from "../../components/ReactComponents/WhyChooseBrandmingo";
import CtaBanner from "../../components/ReactComponents/CtaBanner";
import EngagementModels from "../../components/ReactComponents/EngagementModels";
import PricingSection from "../../components/ReactComponents/PricingSection";

const THEME = "#ff6b1e";

const ReactDetailsTwo = () => {
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
            <div className="wd-content-col">
              <div className="services-details__content">
                {/* S1 */}
                {/* S1 */}
                <div className="react-build-section mt-5">
                  <div className="row align-items-center">
                    {/* Left Side: Content */}
                    <div className="col-lg-6 col-md-12">
                      <div className="react-build-content">
                        <h3 className="mt-0 mb-3 theme-h3">Build with React</h3>
                        <p className="text mb-3">
                          React development is the process of building fast,
                          dynamic, and high-performance websites using modern
                          JavaScript technology. Now understand this clearly —
                          if your website feels slow, outdated, or difficult to
                          use, users will leave immediately.
                        </p>

                        <p className="text mb-4">
                          React helps you create a smooth, fast, and interactive
                          experience that keeps users engaged and increases
                          conversions.
                        </p>

                        {/* Stats Row */}
                        <div className="react-stats-row">
                          <div className="react-stat-item">
                            <span className="react-stat-num">10x</span>
                            <span className="react-stat-label">
                              Faster Load
                            </span>
                          </div>
                          <div className="react-stat-divider" />
                          <div className="react-stat-item">
                            <span className="react-stat-num">98%</span>
                            <span className="react-stat-label">
                              Client Satisfaction
                            </span>
                          </div>
                          <div className="react-stat-divider" />
                          <div className="react-stat-item">
                            <span className="react-stat-num">500+</span>
                            <span className="react-stat-label">
                              Projects Built
                            </span>
                          </div>
                        </div>

                        {/* Feature Tag */}
                        <div className="react-feature-tag">
                          <i className="fab fa-react spin-icon"></i>
                          <span>High Performance Guaranteed</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Creative Image Box */}
                    <div className="col-lg-6 col-md-12">
                      <div className="react-build-image-wrapper">
                        <div className="image-glass-card">
                          <img
                            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
                            alt="React Development"
                            className="main-react-img"
                          />
                          <div className="floating-badge top-right">
                            <i
                              className="fas fa-bolt"
                              style={{ marginRight: "5px" }}
                            />
                            Fast
                          </div>
                          <div className="floating-badge bottom-left">
                            <i
                              className="fas fa-expand-arrows-alt"
                              style={{ marginRight: "5px" }}
                            />
                            Scalable
                          </div>

                          <div className="floating-code-card">
                            <span className="code-dot red" />
                            <span className="code-dot yellow" />
                            <span className="code-dot green" />
                            <p className="code-line">
                              <span className="code-blue">const</span> App{" "}
                              <span className="code-white">= () =&gt;</span>{" "}
                              <span className="code-orange">&#123;</span>
                            </p>
                            <p
                              className="code-line"
                              style={{ paddingLeft: "12px" }}
                            >
                              <span className="code-blue">return</span>{" "}
                              <span className="code-orange">
                                &lt;React /&gt;
                              </span>
                            </p>
                            <p className="code-line">
                              <span className="code-orange">&#125;</span>
                            </p>
                          </div>
                        </div>

                        <div className="corner-accent top-left-accent" />
                        <div className="corner-accent bottom-right-accent" />
                        <div className="bg-glow-circle" />
                      </div>
                    </div>
                  </div>

                  <style>{`
    .react-build-section {
      position: relative;
      padding: 40px 0;
    }

    .react-build-content {
      padding-right: 30px;
    }

    /* ── Stats Row ── */
    .react-stats-row {
      display: flex;
      align-items: center;
      gap: 0;
      margin-bottom: 28px;
      background: linear-gradient(
        125deg,
        #e85c0d 0%,
        #ff6b1e 40%,
        #ff9a5c 75%,
        #ff6b1e 100%
      );
      border-radius: 16px;
      overflow: hidden;
    }

    .react-stat-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
      text-align: center;
      padding: 20px 24px;
    }

    .react-stat-num {
      font-family: var(--heading-font-family);
      font-size: 26px;
      font-weight: 700;
      color: #ffffff;
      line-height: 1;
    }

    .react-stat-label {
      font-family: var(--body-font-family);
      font-size: 12px;
      color: rgba(255,255,255,0.75);
      letter-spacing: 0.3px;
    }

    .react-stat-divider {
      width: 1px;
      height: 36px;
      background: rgba(255,255,255,0.25);
      flex-shrink: 0;
    }

    /* ── Feature Tag ── */
    .react-feature-tag {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(var(--theme-color1-rgb), 0.1);
      border: 1px solid rgba(var(--theme-color1-rgb), 0.2);
      padding: 8px 16px;
      border-radius: 50px;
      font-family: var(--heading-font-family);
      font-size: 13px;
      font-weight: 600;
      color: var(--theme-color1);
    }

    .spin-icon {
      animation: fa-spin 5s linear infinite;
    }

    /* ── Image Wrapper ── */
    .react-build-image-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }

    .corner-accent {
      position: absolute;
      width: 60px;
      height: 60px;
      z-index: 0;
    }

    .top-left-accent {
      top: 10px;
      left: 10px;
      border-top: 2px solid var(--theme-color1);
      border-left: 2px solid var(--theme-color1);
      border-radius: 4px 0 0 0;
      opacity: 0.5;
    }

    .bottom-right-accent {
      bottom: 10px;
      right: 10px;
      border-bottom: 2px solid var(--theme-color1);
      border-right: 2px solid var(--theme-color1);
      border-radius: 0 0 4px 0;
      opacity: 0.5;
    }

    /* ── Glass Card ── */
    .image-glass-card {
      position: relative;
      z-index: 2;
      border-radius: 24px;
      padding: 15px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255,255,255,0.08);
      backdrop-filter: blur(10px);
      transition: transform 0.5s ease;
    }

    .main-react-img {
      width: 100%;
      height: auto;
      border-radius: 18px;
      display: block;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .image-glass-card:hover {
      transform: translateY(-10px) rotate(1deg);
    }

    /* ── Floating Badges ── */
    .floating-badge {
      position: absolute;
      background: var(--theme-color1);
      color: #fff;
      padding: 6px 18px;
      border-radius: 50px;
      font-family: var(--heading-font-family);
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      box-shadow: 0 10px 20px rgba(var(--theme-color1-rgb), 0.3);
      z-index: 3;
      display: flex;
      align-items: center;
    }

    .top-right { top: -10px; right: -10px; }
    .bottom-left { bottom: 20px; left: -20px; }

    /* ── Floating Code Card ── */
    .floating-code-card {
      position: absolute;
      bottom: -18px;
      right: -18px;
      background: #1a1a2e;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 12px 16px;
      z-index: 4;
      min-width: 160px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.4);
    }

    .floating-code-card p {
      margin: 0;
      font-family: monospace;
      font-size: 11px;
      line-height: 1.7;
    }

    .code-dot {
      display: inline-block;
      width: 8px; height: 8px;
      border-radius: 50%;
      margin-right: 4px;
      margin-bottom: 8px;
    }
    .red    { background: #ff5f57; }
    .yellow { background: #febc2e; }
    .green  { background: #28c840; }

    .code-blue   { color: #79b8ff; }
    .code-orange { color: var(--theme-color1, #ff6b1e); }
    .code-white  { color: rgba(255,255,255,0.8); }
    .code-line   { margin: 0 !important; }

    /* ── Back Glow ── */
    .bg-glow-circle {
      position: absolute;
      width: 300px;
      height: 300px;
      background: var(--theme-color1);
      filter: blur(100px);
      opacity: 0.12;
      z-index: 1;
    }

    @media (max-width: 991px) {
      .react-build-content { padding-right: 0; text-align: center; margin-bottom: 50px; }
      .react-build-image-wrapper { max-width: 500px; margin: 0 auto; }
      .react-feature-tag { justify-content: center; }
      .react-stats-row { justify-content: center; }
      .floating-code-card { display: none; }
    }
  `}</style>
                </div>

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
                <div className="row g-4 mb-4">
                  {[
                    { icon: "fas fa-bolt", label: "Faster" },
                    { icon: "fas fa-mobile-alt", label: "More Responsive" },
                    { icon: "fas fa-chart-line", label: "Generate Leads 24/7" },
                    { icon: "fas fa-hand-pointer", label: "Smooth to Use" },
                  ].map((item, i) => (
                    <div className="col-12 col-sm-6" key={i}>
                      <div className="benefit-card">
                        <div className="benefit-icon-wrap">
                          <i className={item.icon}></i>
                        </div>
                        <span className="benefit-label">{item.label}</span>
                      </div>
                    </div>
                  ))}

                  <style>{`
    .benefit-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      background: var(--theme-color-white); /* #ffffff */
      border-radius: 14px;
      /* Border matches your style.css border settings but for light bg */
      border: 1.5px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      cursor: default;
    }

    .benefit-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
      border-color: var(--theme-color1); /* #ff6b1e */
    }

    .benefit-icon-wrap {
      width: 46px;
      height: 46px;
      min-width: 46px;
      border-radius: 12px;
      /* Using your theme color and gradient-1 logic */
      background: linear-gradient(135deg, var(--theme-color1), #ff8d4d);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(255, 107, 30, 0.2);
      transition: all 0.3s ease;
    }

    .benefit-card:hover .benefit-icon-wrap {
      transform: rotate(-10deg) scale(1.1);
    }

    .benefit-icon-wrap i {
      font-size: 18px;
      color: #ffffff; /* Always white on orange bg */
    }

    .benefit-label {
      font-family: var(--heading-font-family); /* Beatrice Trial */
      font-size: 16px; /* body-font-size */
      font-weight: 600;
      color: #151515; /* Using your --bg-color as text color for white bg */
      letter-spacing: -0.2px;
    }

    /* Footer Text Styling */
    .benefit-footer-text {
      font-family: var(--body-font-family);
      font-size: var(--body-font-size);
      line-height: var(--body-line-height);
      font-style: italic;
      opacity: 0.85;
      color: var(--text-color); /* Kept as white for dark outer section */
      border-top: 1px solid var(--border-color2-rgba);
      padding-top: 18px;
      margin-top: 8px;
    }
  `}</style>
                </div>

                <p className="benefit-footer-text mb-4">
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
                {/* --- WHY CHOOSE REACT SECTION (PREMIUM WHITE STYLE) --- */}
                <div className="mt-5">
                  <h3 className="mb-2">Why Choose React for Your Website?</h3>
                  <p className="text mb-4">
                    If you are serious about performance, React is not an option
                    — it's a smart decision.
                  </p>

                  <div className="row g-4 mb-5">
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
                        <div className="premium-benefit-card">
                          <div className="benefit-icon-container">
                            <i className={benefit.icon}></i>
                          </div>
                          <div className="benefit-content">
                            <h5 className="benefit-title">{benefit.title}</h5>
                            <p className="benefit-desc">{benefit.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="quote-highlight-box">
                    <i className="fas fa-bolt text-theme1"></i>
                    <span className="text-white">
                      A faster website directly improves user retention and
                      conversions.
                    </span>
                  </div>
                </div>

                {/* image  */}
                {/* TOP IMAGE */}
                <div
                  style={{
                    width: "100%",
                    height: "350px",
                    overflow: "hidden",
                    borderRadius: "8px",
                    marginTop: "40px",
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

                {/* --- S4: WHO SHOULD USE REACT --- */}
                <div className="mt-5">
                  <h3 className="mb-2">Who Should Use React?</h3>
                  <p className="text mb-4">
                    This is important — React is not for everyone, but for the
                    right business, it is powerful.
                  </p>

                  <div className="row g-4">
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
                        <div className="who-use-card">
                          <div className="who-use-icon">
                            <i className={item.icon}></i>
                          </div>
                          <div className="who-use-content">
                            <h5 className="who-use-title">{item.title}</h5>
                            <p className="who-use-desc">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <ReactExpertiseDetails />

                <TechnologyStack />

                {/* S5 */}
                {/* --- WHAT YOU GET / DELIVERABLES SECTION --- */}
                {/* --- WHAT YOU GET / DELIVERABLES SECTION --- */}
                <div className="mt-5">
                  <h3 className="mb-2">
                    What You Get with Our React Development Services
                  </h3>
                  <p className="text mb-4">
                    We don't just build websites — we build performance-driven
                    systems.
                  </p>

                  <div className="deliverables-outer-card">
                    <div className="deliverables-accent-glow deliverables-accent-glow--top"></div>
                    <div className="deliverables-accent-glow deliverables-accent-glow--bottom"></div>

                    <div className="deliverables-subtitle-row">
                      <span className="deliverables-subtitle-bar"></span>
                      <p className="deliverables-subtitle">Our Deliverables</p>
                    </div>

                    <div className="deliverables-grid">
                      {[
                        {
                          icon: (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 20h9" />
                              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                          ),
                          label: "Custom UI/UX Design",
                          desc: "Tailored to your brand",
                        },
                        {
                          icon: (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="5" y="2" width="14" height="20" rx="2" />
                              <line x1="12" y1="18" x2="12.01" y2="18" />
                            </svg>
                          ),
                          label: "Fully Responsive Development",
                          desc: "Mobile-first approach",
                        },
                        {
                          icon: (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15,3 21,3 21,9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          ),
                          label: "API & Third-Party Integrations",
                          desc: "Third-party ready",
                        },
                        {
                          icon: (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
                            </svg>
                          ),
                          label: "Speed Optimization",
                          desc: "Core Web Vitals focused",
                        },
                        {
                          icon: (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="11" cy="11" r="8" />
                              <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                          ),
                          label: "SEO-Ready Structure",
                          desc: "Built to rank higher",
                        },
                        {
                          icon: (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                              <polyline points="16,11 18,13 22,9" />
                            </svg>
                          ),
                          label: "Admin Panel (if required)",
                          desc: "Full control dashboard",
                        },
                      ].map((item, i) => (
                        <div className="deliverable-white-card" key={i}>
                          <div className="deliverable-icon-box">
                            {item.icon}
                          </div>
                          <div className="deliverable-text-group">
                            <span className="deliverable-label">
                              {item.label}
                            </span>
                            <span className="deliverable-desc">
                              {item.desc}
                            </span>
                          </div>
                          <div className="deliverable-arrow">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="var(--theme-color1)"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12,5 19,12 12,19" />
                            </svg>
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
                          transition: "background 0.3s, border-color 0.3s",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = THEME;
                          e.currentTarget.style.background = "#ffffff";
                          e.currentTarget.querySelector("h6").style.color =
                            THEME;
                          e.currentTarget.querySelector("p").style.color =
                            "#000000";
                          e.currentTarget.querySelector("p").style.opacity =
                            "1";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.08)";
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.03)";
                          e.currentTarget.querySelector("h6").style.color = "";
                          e.currentTarget.querySelector("p").style.color = "";
                          e.currentTarget.querySelector("p").style.opacity =
                            "0.8";
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

                <div style={{ marginTop: "10px" }}>
                  <ReactExpertiseTabs />
                  <CtaBanner />
                  <WhyChooseBrandmingo />
                  <EngagementModels />
                  <PricingSection />
                </div>

                {/*  */}

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

export default ReactDetailsTwo;
