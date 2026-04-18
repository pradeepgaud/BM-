// import React, { useState } from "react";

// // Service images mapped by id (royalty-free tech visuals)
// const serviceImages = {
//   enterprise:
//     "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=520&q=80&auto=format&fit=crop",
//   legacy:
//     "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=520&q=80&auto=format&fit=crop",
//   pwa: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=520&q=80&auto=format&fit=crop",
//   api: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=520&q=80&auto=format&fit=crop",
//   ecommerce:
//     "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=520&q=80&auto=format&fit=crop",
//   spa: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=520&q=80&auto=format&fit=crop",
//   migration:
//     "https://images.unsplash.com/photo-1518770660439-4636190af475?w=520&q=80&auto=format&fit=crop",
//   payment:
//     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=520&q=80&auto=format&fit=crop",
// };

// const servicesData = [
//   {
//     id: "enterprise",
//     title: "Enterprise Application Development",
//     desc: "As a leading ReactJS web development company, we build stable and easy-to-maintain enterprise apps. Our solutions develop secure, organized front ends and create modular components for a consistent, high-performance user experience that supports long-term scalability and grows with your business needs.",
//   },
//   {
//     id: "legacy",
//     title: "Legacy Application Modernization",
//     desc: "Transform outdated applications into modern, high-performance systems using ReactJS. We migrate old codebases to modern React architecture, significantly improving performance and user experience while reducing maintenance costs and ensuring compatibility across modern devices.",
//   },
//   {
//     id: "pwa",
//     title: "React PWA Development",
//     desc: "Build Progressive Web Apps that offer a native app-like experience directly in the web browser. We ensure offline functionality, fast loading times, and enable push notifications to increase user engagement—providing a consistent experience without app store downloads.",
//   },
//   {
//     id: "api",
//     title: "Third-Party APIs Integration",
//     desc: "Enhance React applications by seamlessly connecting them with powerful third-party services. We integrate payment gateways, social media, CRM, ERP, and marketing automation tools, ensuring secure and efficient data exchange without rebuilding from scratch.",
//   },
//   {
//     id: "ecommerce",
//     title: "Ecommerce Development Solutions",
//     desc: "Create dynamic and engaging online stores that drive sales. We build fast-loading product catalogs, intuitive shopping carts, and integrate secure payment solutions, optimizing everything for mobile devices and search engines.",
//   },
//   {
//     id: "spa",
//     title: "React SPA Development",
//     desc: "Delivering focused, efficient ReactJS web development services for single-page applications. We create dynamic screens without full page reloads, improving speed, usability, and supporting real-time interactions with lightweight interfaces.",
//   },
//   {
//     id: "migration",
//     title: "ReactJS Migration",
//     desc: "Smoothly transition your existing web applications to ReactJS with minimal disruption. We analyze existing application structure, develop detailed migration plans, and execute migration with data integrity, followed by post-migration support.",
//   },
//   {
//     id: "payment",
//     title: "Payment Gateway Integration",
//     desc: "Integrate robust and secure payment processing solutions directly into your React applications. We support multiple payment methods, ensure PCI compliance, and provide a seamless checkout experience with leading gateways like Stripe and PayPal.",
//   },
// ];

// const ReactExpertiseTabs = () => {
//   const [activeTab, setActiveTab] = useState(servicesData[0]);
//   const [animKey, setAnimKey] = useState(0);

//   const handleTabClick = (service) => {
//     setActiveTab(service);
//     setAnimKey((k) => k + 1);
//   };

//   return (
//     <>
//       <style>{`
//         /* ─── Section Wrapper ─── */
//         .ret-section {
//           background-color: var(--body-bg, #0d0d0d);
//           padding: 100px 0;
//           position: relative;
//           overflow: hidden;
//         }

//         /* Subtle background glow */
//         .ret-section::before {
//           content: "";
//           position: absolute;
//           top: -200px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 700px;
//           height: 700px;
//           background: radial-gradient(circle, rgba(255, 107, 30, 0.06) 0%, transparent 70%);
//           pointer-events: none;
//           z-index: 0;
//         }

//         .ret-section > * { position: relative; z-index: 1; }

//         /* ─── Heading ─── */
//         .ret-heading {
//           font-family: var(--heading-font-family, "Sora", sans-serif);
//           font-size: var(--h3-font-size, clamp(32px, 4vw, 52px));
//           color: var(--headings-color, #ffffff);
//           text-align: center;
//           margin-bottom: 70px;
//           font-weight: 500;
//           letter-spacing: -0.5px;
//         }

//         .ret-heading span {
//           color: var(--theme-color1, #ff6b1e);
//         }

//         /* ─── Main Grid ─── */
//         .ret-grid {
//           display: grid;
//           grid-template-columns: 0.75fr 1.25fr;
//           gap: 28px;
//           align-items: stretch;
//         }

//         /* ─── Left: Tab Buttons ─── */
//         .ret-tabs {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 12px;
//           align-content: start;
//         }

//         .ret-tab-btn {
//           background-color: rgba(255, 255, 255, 0.03);
//           border: 1px solid rgba(255, 255, 255, 0.07);
//           border-radius: 14px;
//           padding: 18px 20px;
//           color: rgba(255, 255, 255, 0.55);
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
//           font-family: var(--body-font-family, "Inter", sans-serif);
//           font-size: 14px;
//           font-weight: 500;
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           gap: 8px;
//           line-height: 1.4;
//           min-height: 72px;
//         }

//         .ret-tab-btn:hover {
//           background-color: rgba(255, 255, 255, 0.05);
//           color: #fff;
//           border-color: rgba(255, 107, 30, 0.25);
//           transform: translateY(-2px);
//         }

//         .ret-tab-btn.active {
//           background: linear-gradient(135deg, rgba(255,107,30,0.12), rgba(255,107,30,0.04));
//           border: 1px solid var(--theme-color1, #ff6b1e);
//           color: #fff;
//           font-weight: 600;
//           box-shadow: 0 6px 24px rgba(255, 107, 30, 0.15);
//         }

//         .ret-tab-btn .ret-arrow {
//           flex-shrink: 0;
//           width: 22px;
//           height: 22px;
//           border-radius: 50%;
//           background: rgba(255, 107, 30, 0.15);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 10px;
//           color: var(--theme-color1, #ff6b1e);
//           margin-top: 1px;
//           transition: all 0.3s ease;
//           opacity: 0.4;
//         }

//         .ret-tab-btn.active .ret-arrow,
//         .ret-tab-btn:hover .ret-arrow {
//           opacity: 1;
//           background: rgba(255, 107, 30, 0.25);
//           transform: rotate(-45deg);
//         }

//         /* ─── Right: Content Panel ─── */
//         .ret-content {
//           background: rgba(255, 255, 255, 0.025);
//           border: 1px solid rgba(255, 255, 255, 0.07);
//           border-radius: 22px;
//           padding: 42px 44px;
//           display: flex;
//           flex-direction: column;
//           gap: 28px;
//           overflow: hidden;
//           animation: retFadeUp 0.45s cubic-bezier(0.22, 0.61, 0.36, 1) both;
//           position: relative;
//         }

//         .ret-content::before {
//           content: "";
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, var(--theme-color1, #ff6b1e), transparent 60%);
//           border-radius: 22px 22px 0 0;
//         }

//         @keyframes retFadeUp {
//           from { opacity: 0; transform: translateY(14px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         /* Service title — full width at top */
//         .ret-content-title {
//           font-family: var(--heading-font-family, "Sora", sans-serif);
//           font-size: clamp(20px, 2.2vw, 28px);
//           color: var(--headings-color, #ffffff);
//           font-weight: 700;
//           margin: 0;
//           padding-bottom: 20px;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.07);
//           letter-spacing: -0.3px;
//         }

//         .ret-content-title::before {
//           content: "//";
//           color: var(--theme-color1, #ff6b1e);
//           margin-right: 12px;
//           font-weight: 400;
//           opacity: 0.8;
//         }

//         /* Body: text + image side-by-side */
//         .ret-content-body {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 32px;
//           align-items: center;
//         }

//         .ret-content-desc {
//           color: var(--text-color, rgba(255,255,255,0.65));
//           font-size: 15.5px;
//           line-height: 1.85;
//           font-family: var(--body-font-family, "Inter", sans-serif);
//           margin: 0;
//         }

//         /* Image container */
//         .ret-image-wrap {
//           position: relative;
//           border-radius: 16px;
//           overflow: hidden;
//           aspect-ratio: 4 / 3;
//         }

//         .ret-image-wrap::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             135deg,
//             rgba(255,107,30,0.18) 0%,
//             transparent 60%
//           );
//           border-radius: inherit;
//           pointer-events: none;
//         }

//         .ret-image-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           border-radius: 16px;
//           transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
//           filter: brightness(0.85) saturate(1.1);
//         }

//         .ret-image-wrap:hover img {
//           transform: scale(1.04);
//         }

//         /* Orange corner accent on image */
//         .ret-image-wrap::before {
//           content: "";
//           position: absolute;
//           bottom: -1px; right: -1px;
//           width: 56px; height: 56px;
//           background: var(--theme-color1, #ff6b1e);
//           border-radius: 16px 0 16px 0;
//           opacity: 0.7;
//           z-index: 2;
//         }

//         /* ─── Responsive ─── */
//         @media (max-width: 1100px) {
//           .ret-grid {
//             grid-template-columns: 1fr;
//           }
//           .ret-content-body {
//             grid-template-columns: 1fr 1fr;
//           }
//         }

//         @media (max-width: 768px) {
//           .ret-section { padding: 70px 0; }
//           .ret-heading { margin-bottom: 50px; }

//           .ret-tabs {
//             grid-template-columns: 1fr 1fr;
//             gap: 10px;
//           }

//           .ret-content {
//             padding: 28px 24px;
//           }

//           .ret-content-body {
//             grid-template-columns: 1fr;
//           }

//           .ret-image-wrap {
//             aspect-ratio: 16 / 9;
//             order: -1; /* image above text on mobile */
//           }
//         }

//         @media (max-width: 480px) {
//           .ret-tabs {
//             grid-template-columns: 1fr;
//           }
//           .ret-tab-btn {
//             min-height: auto;
//           }
//         }
//       `}</style>

//       <div className="ret-section">
//         <div className="auto-container">
//           {/* <h2 className="ret-heading">
//             Our <span>ReactJS</span> Development Expertise
//           </h2> */}
//           <h3 className="ret-heading">Our ReactJS Development Expertise</h3>

//           <div className="ret-grid">
//             {/* ── Left: Tab Buttons ── */}
//             <div className="ret-tabs">
//               {servicesData.map((service) => (
//                 <button
//                   key={service.id}
//                   className={`ret-tab-btn ${activeTab.id === service.id ? "active" : ""}`}
//                   onClick={() => handleTabClick(service)}
//                 >
//                   <span style={{ flex: 1 }}>{service.title}</span>
//                   <span className="ret-arrow">
//                     <i className="fas fa-arrow-right" />
//                   </span>
//                 </button>
//               ))}
//             </div>

//             {/* ── Right: Content Panel ── */}
//             <div className="ret-content" key={animKey}>
//               {/* Full-width title at top */}
//               <h3 className="ret-content-title">{activeTab.title}</h3>

//               {/* Text left + Image right */}
//               <div className="ret-content-body">
//                 <p className="ret-content-desc">{activeTab.desc}</p>

//                 <div className="ret-image-wrap">
//                   <img
//                     src={serviceImages[activeTab.id]}
//                     alt={activeTab.title}
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ReactExpertiseTabs;

import React, { useState } from "react";

const serviceImages = {
  enterprise:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=520&q=80&auto=format&fit=crop",
  legacy:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=520&q=80&auto=format&fit=crop",
  pwa: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=520&q=80&auto=format&fit=crop",
  api: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=520&q=80&auto=format&fit=crop",
  ecommerce:
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=520&q=80&auto=format&fit=crop",
  spa: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=520&q=80&auto=format&fit=crop",
  migration:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=520&q=80&auto=format&fit=crop",
  payment:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=520&q=80&auto=format&fit=crop",
};

const servicesData = [
  {
    id: "enterprise",
    title: "Enterprise Application Development",
    desc: "As a leading ReactJS web development company, we build stable and easy-to-maintain enterprise apps. Our solutions develop secure, organized front ends and create modular components for a consistent, high-performance user experience that supports long-term scalability and grows with your business needs.",
  },
  {
    id: "legacy",
    title: "Legacy Application Modernization",
    desc: "Transform outdated applications into modern, high-performance systems using ReactJS. We migrate old codebases to modern React architecture, significantly improving performance and user experience while reducing maintenance costs and ensuring compatibility across modern devices.",
  },
  {
    id: "pwa",
    title: "React PWA Development",
    desc: "Build Progressive Web Apps that offer a native app-like experience directly in the web browser. We ensure offline functionality, fast loading times, and enable push notifications to increase user engagement—providing a consistent experience without app store downloads.",
  },
  {
    id: "api",
    title: "Third-Party APIs Integration",
    desc: "Enhance React applications by seamlessly connecting them with powerful third-party services. We integrate payment gateways, social media, CRM, ERP, and marketing automation tools, ensuring secure and efficient data exchange without rebuilding from scratch.",
  },
  {
    id: "ecommerce",
    title: "Ecommerce Development Solutions",
    desc: "Create dynamic and engaging online stores that drive sales. We build fast-loading product catalogs, intuitive shopping carts, and integrate secure payment solutions, optimizing everything for mobile devices and search engines.",
  },
  {
    id: "spa",
    title: "React SPA Development",
    desc: "Delivering focused, efficient ReactJS web development services for single-page applications. We create dynamic screens without full page reloads, improving speed, usability, and supporting real-time interactions with lightweight interfaces.",
  },
  {
    id: "migration",
    title: "ReactJS Migration",
    desc: "Smoothly transition your existing web applications to ReactJS with minimal disruption. We analyze existing application structure, develop detailed migration plans, and execute migration with data integrity, followed by post-migration support.",
  },
  {
    id: "payment",
    title: "Payment Gateway Integration",
    desc: "Integrate robust and secure payment processing solutions directly into your React applications. We support multiple payment methods, ensure PCI compliance, and provide a seamless checkout experience with leading gateways like Stripe and PayPal.",
  },
];

const ReactExpertiseTabs = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);
  const [animKey, setAnimKey] = useState(0);

  const handleTabClick = (service) => {
    setActiveTab(service);
    setAnimKey((k) => k + 1);
  };

  return (
    <>
      <style>{`
        .ret-section {
          background-color: var(--body-bg, #0d0d0d);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .ret-section::before {
          content: "";
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(255, 107, 30, 0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .ret-section > * { position: relative; z-index: 1; }

        .ret-heading {
          font-family: var(--heading-font-family, "Sora", sans-serif);
          font-size: var(--h3-font-size, clamp(32px, 4vw, 52px));
          color: var(--headings-color, #ffffff);
          text-align: center;
          margin-bottom: 70px;
          font-weight: 500;
          letter-spacing: -0.5px;
        }

        .ret-heading span {
          color: var(--theme-color1, #ff6b1e);
        }

        .ret-grid {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 28px;
          align-items: stretch;
        }

        /* ─── Left: Tab Buttons (NO CHANGES) ─── */
        .ret-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          align-content: start;
        }

        .ret-tab-btn {
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          padding: 18px 20px;
          color: rgba(255, 255, 255, 0.55);
          text-align: left;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
          font-family: var(--body-font-family, "Inter", sans-serif);
          font-size: 14px;
          font-weight: 500;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.4;
          min-height: 72px;
        }

        .ret-tab-btn:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: #fff;
          border-color: rgba(255, 107, 30, 0.25);
          transform: translateY(-2px);
        }

        .ret-tab-btn.active {
          background: linear-gradient(135deg, rgba(255,107,30,0.12), rgba(255,107,30,0.04));
          border: 1px solid var(--theme-color1, #ff6b1e);
          color: #fff;
          font-weight: 600;
          box-shadow: 0 6px 24px rgba(255, 107, 30, 0.15);
        }

        .ret-tab-btn .ret-arrow {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(255, 107, 30, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: var(--theme-color1, #ff6b1e);
          margin-top: 1px;
          transition: all 0.3s ease;
          opacity: 0.4;
        }

        .ret-tab-btn.active .ret-arrow,
        .ret-tab-btn:hover .ret-arrow {
          opacity: 1;
          background: rgba(255, 107, 30, 0.25);
          transform: rotate(-45deg);
        }

        /* ─── Right: Content Panel (WHITE BG) ─── */
        .ret-content {
          background: #ffffff;
          border: none;
          box-shadow: none;
          border-radius: 22px;
          padding: 42px 44px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          overflow: hidden;
          animation: retFadeUp 0.45s cubic-bezier(0.22, 0.61, 0.36, 1) both;
          position: relative;
        }

        .ret-content::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--theme-color1, #ff6b1e), transparent 60%);
          border-radius: 22px 22px 0 0;
        }

        @keyframes retFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ret-content-title {
          font-family: var(--heading-font-family, "Sora", sans-serif);
          font-size: clamp(20px, 2.2vw, 28px);
          color: var(--theme-color1, #ff6b1e);
          font-weight: 700;
          margin: 0;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          letter-spacing: -0.3px;
        }

        .ret-content-title::before {
          content: "//";
          color: var(--theme-color1, #ff6b1e);
          margin-right: 12px;
          font-weight: 400;
          opacity: 0.8;
        }

        .ret-content-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
        }

        .ret-content-desc {
          color: #1a1a1a;
          font-size: 15.5px;
          line-height: 1.85;
          font-family: var(--body-font-family, "Inter", sans-serif);
          margin: 0;
        }

        /* ─── Creative Image ─── */
        .ret-image-wrap {
          position: relative;
          border-radius: 16px;
          overflow: visible;
          aspect-ratio: 4 / 3;
        }

        /* Orange bg block behind image */
        .ret-image-wrap::before {
          content: "";
          position: absolute;
          bottom: -10px;
          right: -10px;
          width: 100%;
          height: 100%;
          background: var(--theme-color1, #ff6b1e);
          border-radius: 16px;
          z-index: 0;
          opacity: 0.15;
        }

        .ret-image-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          border: 3px solid var(--theme-color1, #ff6b1e);
        }

        .ret-image-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
          filter: brightness(0.95) saturate(1.1);
        }

        .ret-image-wrap:hover .ret-image-inner img {
          transform: scale(1.04);
        }

        /* Orange dot badge */
        .ret-image-badge {
          position: absolute;
          top: -12px;
          left: -12px;
          width: 40px;
          height: 40px;
          background: var(--theme-color1, #ff6b1e);
          border-radius: 50%;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 16px;
          box-shadow: 0 4px 12px rgba(255, 107, 30, 0.4);
        }

        /* ─── Responsive ─── */
        @media (max-width: 1100px) {
          .ret-grid { grid-template-columns: 1fr; }
          .ret-content-body { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .ret-section { padding: 70px 0; }
          .ret-heading { margin-bottom: 50px; }
          .ret-tabs { grid-template-columns: 1fr 1fr; gap: 10px; }
          .ret-content { padding: 28px 24px; }
          .ret-content-body { grid-template-columns: 1fr; }
          .ret-image-wrap { aspect-ratio: 16 / 9; order: -1; }
        }

        @media (max-width: 480px) {
          .ret-tabs { grid-template-columns: 1fr; }
          .ret-tab-btn { min-height: auto; }
        }
      `}</style>

      <div className="ret-section">
        <div className="auto-container">
          <h3 className="ret-heading">Our ReactJS Development Expertise</h3>

          <div className="ret-grid">
            {/* ── Left: Tab Buttons (UNCHANGED) ── */}
            <div className="ret-tabs">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  className={`ret-tab-btn ${activeTab.id === service.id ? "active" : ""}`}
                  onClick={() => handleTabClick(service)}
                >
                  <span style={{ flex: 1 }}>{service.title}</span>
                  <span className="ret-arrow">
                    <i className="fas fa-arrow-right" />
                  </span>
                </button>
              ))}
            </div>

            {/* ── Right: Content Panel (WHITE) ── */}
            <div className="ret-content" key={animKey}>
              <h3 className="ret-content-title">{activeTab.title}</h3>

              <div className="ret-content-body">
                <p className="ret-content-desc">{activeTab.desc}</p>

                <div className="ret-image-wrap">
                  {/* Creative orange badge */}
                  <div className="ret-image-badge">
                    <i className="fas fa-code" />
                  </div>
                  {/* Image with orange border */}
                  <div className="ret-image-inner">
                    <img
                      src={serviceImages[activeTab.id]}
                      alt={activeTab.title}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactExpertiseTabs;
