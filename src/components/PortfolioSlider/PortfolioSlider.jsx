import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Syrish Lucknowi",
    category: "Ethnic E-commerce",
    tags: ["UI/UX", "Shopify", "Premium"],
    preview: "#",
    caseStudy: "/case-study/syrish",
    images: [
      "https://picsum.photos/800/1000?sig=1",
      "https://picsum.photos/800/1000?sig=2",
      "https://picsum.photos/800/1000?sig=3",
      "https://picsum.photos/800/1000?sig=4",
    ],
  },
  {
    name: "The Adwaith",
    category: "Luxury Real Estate",
    tags: ["React", "GSAP", "3D"],
    preview: "#",
    caseStudy: "/case-study/adwaith",
    images: [
      "https://picsum.photos/800/1000?sig=5",
      "https://picsum.photos/800/1000?sig=6",
    ],
  },
  {
    name: "Bikers Paradise",
    category: "Retail Destination",
    tags: ["MERN", "Tailwind", "Motion"],
    preview: "#",
    caseStudy: null,
    images: [
      "https://picsum.photos/800/1000?sig=7",
      "https://picsum.photos/800/1000?sig=8",
    ],
  },
  {
    name: "BlackGrape H",
    category: "Premium Leather",
    tags: ["E-comm", "Design", "CRO"],
    preview: "#",
    caseStudy: "/case-study/blackgrape",
    images: [
      "https://picsum.photos/800/1000?sig=9",
      "https://picsum.photos/800/1000?sig=10",
    ],
  },
];

const CARD_WIDTH = 380;
const CARD_GAP = 30;
const SPEED = 0.6;

const PremiumPortfolio = () => {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);

  const [popup, setPopup] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const allCards = [...projects, ...projects, ...projects];

  useEffect(() => {
    const animate = () => {
      if (!isPausedRef.current) {
        posRef.current -= SPEED;
        const track = trackRef.current;
        if (track) {
          const singleSetWidth = projects.length * (CARD_WIDTH + CARD_GAP);
          if (Math.abs(posRef.current) >= singleSetWidth) {
            posRef.current = 0;
          }
          track.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const openPopup = (p, e) => {
    e.stopPropagation();
    setPopup(p);
    setActiveImg(0);
    isPausedRef.current = true;
  };

  const closePopup = () => {
    setPopup(null);
    isPausedRef.current = false;
  };

  return (
    <>
      <style>{`
        .ptf-section {
          background: var(--body-bg);
          padding: 120px 0;
          overflow: hidden;
          font-family: var(--body-font-family);
        }

        .ptf-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .ptf-subtitle-tag {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--theme-color1);
          margin-bottom: 15px;
          display: block;
        }

        .ptf-title {

          font-weight: var(--h3-font-weight);
          color: var(--headings-color);
          margin: 0;
          letter-spacing: -1px;
        }

        .ptf-track-wrapper {
          position: relative;
          width: 100%;
          padding: 20px 0;
        }

        .ptf-track {
          display: flex;
          gap: ${CARD_GAP}px;
          width: max-content;
          will-change: transform;
        }

        /* --- PREMIUM CARD DESIGN --- */
        .ptf-card {
          width: ${CARD_WIDTH}px;
          flex-shrink: 0;
          background: #111111;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 30px;
          padding: 25px;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }

        .ptf-card:hover {
          transform: translateY(-15px);
          background: #161616;
          border-color: rgba(var(--theme-color1-rgb), 0.3);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        .ptf-card-img-container {
          width: 100%;
          height: 280px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          margin-bottom: 25px;
          background: #000;
        }

        .ptf-card-img-container img {
          width: 100%; height: 100%; object-fit: cover;
          transition: 1s ease;
          opacity: 0.8;
        }

        .ptf-card:hover img { transform: scale(1.15); opacity: 1; }

        .ptf-card-index {
            position: absolute; top: 20px; left: 20px;
            font-size: 12px; font-weight: 700; color: #fff;
            background: rgba(0,0,0,0.5); padding: 5px 12px;
            border-radius: 20px; backdrop-filter: blur(5px);
        }

        .ptf-card-cat {
          font-size: 11px;
          color: var(--theme-color1);
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 10px;
          display: block;
        }

        .ptf-card-name {
          font-size: 28px;
          color: var(--headings-color);
          margin-bottom: 15px;
          font-weight: 500;
        }

        .ptf-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .ptf-explore-text {
            font-size: 12px; text-transform: uppercase;
            letter-spacing: 1px; color: rgba(255,255,255,0.4);
            font-weight: 600;
        }

        .ptf-arrow-btn {
          width: 45px; height: 45px;
          border-radius: 50%;
          background: #1a1a1a;
          display: flex; align-items: center; justify-content: center;
          color: #fff; transition: 0.4s;
        }

        .ptf-card:hover .ptf-arrow-btn {
          background: var(--theme-color1);
          transform: rotate(-45deg);
        }

        /* --- CREATIVE POPUP --- */
        .ptf-popup-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.95);
          z-index: 10000; display: flex; align-items: center; justify-content: center;
          padding: 20px; backdrop-filter: blur(15px);
        }

        .ptf-popup-card {
          width: 100%; max-width: 1100px; background: #0d0d0d;
          border-radius: 35px; border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden; position: relative;
          display: grid; grid-template-columns: 1.2fr 1fr;
        }

        .ptf-popup-close {
          position: absolute; top: 25px; right: 25px;
          background: rgba(255,255,255,0.05); border: none; color: #fff;
          width: 45px; height: 45px; border-radius: 50%;
          cursor: pointer; z-index: 10; font-size: 18px;
          transition: 0.3s;
        }
        .ptf-popup-close:hover { background: var(--theme-color1); transform: rotate(90deg); }

        /* Left Side: Image Gallery */
        .ptf-popup-gallery {
          position: relative; background: #000; height: 600px;
          display: flex;
        }

        .ptf-main-view {
            flex: 1; position: relative; overflow: hidden;
        }
        .ptf-main-view img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }

        .ptf-side-thumbs {
            width: 80px; background: rgba(255,255,255,0.02);
            display: flex; flex-direction: column; gap: 10px;
            padding: 15px 10px; border-right: 1px solid rgba(255,255,255,0.05);
        }

        .ptf-thumb-item {
            width: 60px; height: 60px; border-radius: 12px;
            overflow: hidden; cursor: pointer; opacity: 0.4;
            transition: 0.3s; border: 2px solid transparent;
        }
        .ptf-thumb-item.active { opacity: 1; border-color: var(--theme-color1); }

        /* Right Side: Info */
        .ptf-popup-info {
          padding: 60px; display: flex; flex-direction: column; justify-content: center;
        }

        .ptf-popup-desc {
          color: rgba(255,255,255,0.5); font-size: 16px;
          line-height: 1.8; margin-bottom: 40px;
        }

        .ptf-popup-btns { display: flex; gap: 12px; }

        .btn-live {
          padding: 14px 28px; background: var(--theme-color1); color: #fff;
          border-radius: 12px; font-weight: 700; text-decoration: none;
          font-size: 14px; letter-spacing: 1px; flex: 1; text-align: center;
          transition: 0.3s;
        }

        .btn-case {
          padding: 14px 28px; border: 1px solid rgba(255,255,255,0.1); color: #fff;
          border-radius: 12px; font-weight: 700; text-decoration: none;
          font-size: 14px; letter-spacing: 1px; flex: 1; text-align: center;
          transition: 0.3s;
        }

        .btn-live:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(var(--theme-color1-rgb), 0.3); }
        .btn-case:hover { background: #fff; color: #000; }

        @media (max-width: 900px) {
          .ptf-popup-card { grid-template-columns: 1fr; max-height: 90vh; overflow-y: auto; }
          .ptf-popup-gallery { height: 350px; }
          .ptf-popup-info { padding: 40px; }
        }
      `}</style>

      <section className="ptf-section">
        <div className="ptf-header">
          <span className="ptf-subtitle-tag">Portfolio</span>
          <h3 className="ptf-title">Creative Archive</h3>
        </div>

        <div
          className="ptf-track-wrapper"
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => !popup && (isPausedRef.current = false)}
        >
          <div ref={trackRef} className="ptf-track">
            {allCards.map((p, i) => (
              <div
                key={i}
                className="ptf-card"
                onClick={(e) => openPopup(p, e)}
              >
                <div className="ptf-card-img-container">
                  <div className="ptf-card-index">
                    0{(i % projects.length) + 1}
                  </div>
                  <img src={p.images[0]} alt={p.name} />
                </div>

                <div className="ptf-card-content">
                  <span className="ptf-card-cat">{p.category}</span>
                  <h3 className="ptf-card-name">{p.name}</h3>
                  <div className="ptf-card-footer">
                    <span className="ptf-explore-text">View Details</span>
                    <div className="ptf-arrow-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {popup && (
        <div className="ptf-popup-overlay" onClick={closePopup}>
          <div className="ptf-popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="ptf-popup-close" onClick={closePopup}>
              ✕
            </button>

            <div className="ptf-popup-gallery">
              <div className="ptf-side-thumbs">
                {popup.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`ptf-thumb-item ${activeImg === idx ? "active" : ""}`}
                    onMouseEnter={() => setActiveImg(idx)}
                  >
                    <img
                      src={img}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="thumb"
                    />
                  </div>
                ))}
              </div>
              <div className="ptf-main-view">
                <img src={popup.images[activeImg]} alt="Main View" />
              </div>
            </div>

            <div className="ptf-popup-info">
              <span className="ptf-card-cat">{popup.category}</span>
              <h2
                style={{
                  fontSize: "42px",
                  color: "#fff",
                  margin: "10px 0 20px",
                  fontWeight: "600",
                }}
              >
                {popup.name}
              </h2>
              <p className="ptf-popup-desc">
                This production-level project focuses on a minimal yet highly
                functional UI to ensure the best user experience for{" "}
                {popup.name}'s target audience. Built with performance and
                aesthetics in mind.
              </p>

              <div className="ptf-popup-btns">
                <a
                  href={popup.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-live"
                >
                  LIVE PREVIEW
                </a>
                {popup.caseStudy && (
                  <a href={popup.caseStudy} className="btn-case">
                    CASE STUDY
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PremiumPortfolio;
