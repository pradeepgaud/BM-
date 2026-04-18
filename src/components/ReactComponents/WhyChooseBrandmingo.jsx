// import React from "react";

// const WhyChooseBrandmingo = () => {
//   return (
//     <>
//       <style>{`
//         /* ─── Section ─── */
//         .wcb-section {
//           background-color: var(--body-bg);
//           padding: 110px 0 120px;
//           position: relative;
//           overflow: hidden;
//         }

//         /* ─── Header ─── */
//         .wcb-header {
//           text-align: center;
//           margin-bottom: 70px;
//         }

//         /* Using your style.css H3 variables */
//         .wcb-header h3 {
//           font-family: var(--heading-font-family);
//           color: var(--headings-color);
//           line-height: var(--line-height-heading);
//           margin-bottom: 22px;
//         }

//         .wcb-header h3 span {
//           color: var(--theme-color1);
//         }

//         .wcb-subtitle {
//           font-family: var(--body-font-family);
//           font-size: var(--body-font-size);
//           color: var(--text-color);
//           opacity: 0.6;
//           max-width: 620px;
//           margin: 0 auto;
//           line-height: var(--body-line-height);
//         }

//         /* ─── Grid ─── */
//         .wcb-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 16px;
//           align-items: start;
//         }

//         /* ─── Card Base ─── */
//         .wcb-card {
//           background: var(--theme-color-white);
//           border-radius: 20px;
//           padding: 32px 28px;
//           transition: transform 0.32s cubic-bezier(0.22,0.61,0.36,1),
//                       box-shadow 0.32s cubic-bezier(0.22,0.61,0.36,1);
//           position: relative;
//           overflow: hidden;
//           border: 1px solid rgba(0,0,0,0.05);
//         }

//         .wcb-card:hover {
//           transform: translateY(-6px);
//           box-shadow: 0 20px 50px rgba(0,0,0,0.1);
//           border-color: var(--theme-color1);
//         }

//         /* Orange top line on hover */
//         .wcb-card::before {
//           content: "";
//           position: absolute;
//           top: 0; left: 0; right: 0;
//           height: 3px;
//           background: var(--theme-color1);
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.35s ease;
//         }
//         .wcb-card:hover::before { transform: scaleX(1); }

//         /* ─── Stat Values ─── */
//         .wcb-stat-value {
//           font-family: var(--heading-font-family);
//           font-size: 56px;
//           font-weight: 700;
//           color: var(--theme-color-black);
//           line-height: 1;
//           margin-bottom: 6px;
//           letter-spacing: -2px;
//         }
//         .wcb-stat-value span { color: var(--theme-color1); }

//         .wcb-stat-label {
//           font-family: var(--heading-font-family);
//           font-size: 16px;
//           font-weight: 700;
//           color: var(--theme-color-black);
//           margin-bottom: 12px;
//           line-height: 1.3;
//         }

//         .wcb-stat-desc {
//           font-family: var(--body-font-family);
//           font-size: 14px;
//           color: rgba(0,0,0,0.6);
//           line-height: 1.7;
//           margin: 0;
//         }

//         /* ─── Feature Icon ─── */
//         .wcb-feat-icon {
//           width: 46px; height: 46px;
//           border-radius: 12px;
//           background: rgba(var(--theme-color1-rgb), 0.1);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 18px;
//           color: var(--theme-color1);
//           margin-bottom: 18px;
//           transition: all 0.3s ease;
//         }
//         .wcb-card:hover .wcb-feat-icon {
//           background: var(--theme-color1);
//           color: #fff;
//           transform: rotate(-6deg) scale(1.08);
//         }

//         .wcb-feat-title {
//           font-family: var(--heading-font-family);
//           font-size: 17px;
//           font-weight: 700;
//           color: var(--theme-color-black);
//           margin-bottom: 10px;
//           line-height: 1.35;
//         }

//         .wcb-feat-desc {
//           font-family: var(--body-font-family);
//           font-size: 14px;
//           color: rgba(0,0,0,0.6);
//           line-height: 1.75;
//           margin: 0;
//         }

//         /* ─── Orange Highlight Card ─── */
//         .wcb-card-highlight {
//           background: var(--theme-color1);
//         }
//         .wcb-card-highlight .wcb-stat-value,
//         .wcb-card-highlight .wcb-stat-label,
//         .wcb-card-highlight .wcb-stat-desc { color: #fff; }
//         .wcb-card-highlight .wcb-stat-value span { color: rgba(255,255,255,0.75); }
//         .wcb-card-highlight::before { background: #fff; }

//         /* ─── Grid Spans ─── */
//         .wcb-card:nth-child(1)  { grid-column: span 1; }
//         .wcb-card:nth-child(2)  { grid-column: span 2; }
//         .wcb-card:nth-child(3)  { grid-column: span 1; }
//         .wcb-card:nth-child(4)  { grid-column: span 1; }
//         .wcb-card:nth-child(5)  { grid-column: span 1; }
//         .wcb-card:nth-child(6)  { grid-column: span 1; }
//         .wcb-card:nth-child(7)  { grid-column: span 1; }
//         .wcb-card:nth-child(8)  { grid-column: span 1; }
//         .wcb-card:nth-child(9)  { grid-column: span 1; }
//         .wcb-card:nth-child(10) { grid-column: span 2; }
//         .wcb-card:nth-child(11) { grid-column: span 1; }
//         .wcb-card:nth-child(12) { grid-column: span 3; }

//         /* ─── Responsive ─── */
//         @media (max-width: 1100px) {
//           .wcb-grid { grid-template-columns: repeat(3, 1fr); }
//           .wcb-card:nth-child(n)  { grid-column: span 1 !important; }
//           .wcb-card:nth-child(2), .wcb-card:nth-child(10), .wcb-card:nth-child(12) { grid-column: span 2 !important; }
//         }
//         @media (max-width: 768px) {
//           .wcb-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
//           .wcb-card:nth-child(n)  { grid-column: span 1 !important; }
//           .wcb-card:nth-child(2), .wcb-card:nth-child(10), .wcb-card:nth-child(12) { grid-column: span 2 !important; }
//         }
//         @media (max-width: 480px) {
//           .wcb-grid { grid-template-columns: 1fr; gap: 10px; }
//           .wcb-card:nth-child(n) { grid-column: span 1 !important; }
//         }
//       `}</style>

//       <section className="wcb-section">
//         <div className="auto-container">
//           <div className="wcb-header">
//             {/* <h3>
//               Why Choose <span>Brandmingo</span> for Top-Tier ReactJS <br />
//               Development Services
//             </h3> */}

//             <h3>
//               Why Choose Brandmingo for Top-Tier ReactJS <br />
//               Development Services
//             </h3>
//             <p className="wcb-subtitle">
//               As a trusted ReactJS development firm, we turn ideas into
//               high-performance, scalable web, mobile, and enterprise apps,
//               combining innovation, seamless UX, and technology that drives real
//               business results.
//             </p>
//           </div>

//           <div className="wcb-grid">
//             <div className="wcb-card">
//               <div className="wcb-stat-value">
//                 8<span>+</span>
//               </div>
//               <div className="wcb-stat-label">Years of Proven Expertise</div>
//               <p className="wcb-stat-desc">
//                 Pioneering brands that dominate markets and create lasting
//                 impressions.
//               </p>
//             </div>

//             <div className="wcb-card">
//               <div className="wcb-feat-icon">
//                 <i className="fas fa-award" />
//               </div>
//               <div className="wcb-feat-title">Certified Brand Strategists</div>
//               <p className="wcb-feat-desc">
//                 Deep expertise in brand identity and growth-focused marketing
//                 frameworks that deliver measurable impact.
//               </p>
//             </div>

//             <div className="wcb-card">
//               <div className="wcb-stat-value">
//                 500<span>+</span>
//               </div>
//               <div className="wcb-stat-label">Projects Delivered</div>
//               <p className="wcb-stat-desc">
//                 High-impact brand solutions for startups to established
//                 enterprises.
//               </p>
//             </div>

//             <div className="wcb-card">
//               <div className="wcb-stat-value">
//                 98<span>%</span>
//               </div>
//               <div className="wcb-stat-label">Client Satisfaction Rate</div>
//               <p className="wcb-stat-desc">
//                 Creative excellence that consistently exceeds expectations.
//               </p>
//             </div>

//             <div className="wcb-card">
//               <div className="wcb-feat-icon">
//                 <i className="fas fa-bolt" />
//               </div>
//               <div className="wcb-feat-title">Agile-Driven Delivery</div>
//               <p className="wcb-feat-desc">
//                 Rapid iterations, clear milestones, and transparent workflows
//                 that keep every project on track.
//               </p>
//             </div>

//             <div className="wcb-card">
//               <div className="wcb-feat-icon">
//                 <i className="fas fa-headset" />
//               </div>
//               <div className="wcb-feat-title">24×7 Expert Support</div>
//               <p className="wcb-feat-desc">
//                 Round-the-clock support with rapid issue resolution whenever
//                 your brand needs us most.
//               </p>
//             </div>

//             <div className="wcb-card wcb-card-highlight">
//               <div className="wcb-stat-value">
//                 100<span>%</span>
//               </div>
//               <div className="wcb-stat-label">In-House Creative Team</div>
//               <p className="wcb-stat-desc">
//                 No outsourcing—every pixel crafted by our dedicated in-house
//                 designers.
//               </p>
//             </div>

//             <div className="wcb-card">
//               <div className="wcb-feat-icon">
//                 <i className="fas fa-shield-alt" />
//               </div>
//               <div className="wcb-feat-title">Quality Assurance</div>
//               <p className="wcb-feat-desc">
//                 Rigorous brand consistency audits and performance benchmarks
//                 built into every deliverable.
//               </p>
//             </div>

//             <div className="wcb-card">
//               <div className="wcb-stat-value">
//                 99<span>%</span>
//               </div>
//               <div className="wcb-stat-label">On-Time Delivery</div>
//               <p className="wcb-stat-desc">
//                 On schedule without ever compromising on quality or strategic
//                 depth.
//               </p>
//             </div>

//             <div className="wcb-card">
//               <div className="wcb-feat-icon">
//                 <i className="fas fa-chart-line" />
//               </div>
//               <div className="wcb-feat-title">
//                 Optimized for Performance & Growth
//               </div>
//               <p className="wcb-feat-desc">
//                 Brand systems engineered for scalability—built to grow with your
//                 business and captivate your audience.
//               </p>
//             </div>

//             <div className="wcb-card">
//               <div className="wcb-stat-value">
//                 90<span>%</span>
//               </div>
//               <div className="wcb-stat-label">Client Retention Rate</div>
//               <p className="wcb-stat-desc">
//                 Reflecting our commitment to delivering value and lasting
//                 partnerships.
//               </p>
//             </div>

//             <div className="wcb-card">
//               <div className="wcb-feat-icon">
//                 <i className="fas fa-layer-group" />
//               </div>
//               <div className="wcb-feat-title">Flexible Engagement Models</div>
//               <p className="wcb-feat-desc">
//                 Dedicated teams or project-based models tailored to suit your
//                 unique branding and business needs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default WhyChooseBrandmingo;

import React from "react";

const WhyChooseBrandmingo = () => {
  return (
    <>
      <style>{`
        .wcb-section {
          background-color: var(--body-bg);
          padding: 110px 0 120px;
          position: relative;
          overflow: hidden;
        }

        .wcb-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .wcb-header h3 {
          font-family: var(--heading-font-family);
          color: var(--headings-color);
          line-height: var(--line-height-heading);
          margin-bottom: 22px;
        }

        .wcb-header h3 span {
          color: var(--theme-color1);
        }

        .wcb-subtitle {
          font-family: var(--body-font-family);
          font-size: var(--body-font-size);
          color: var(--text-color);
          opacity: 0.6;
          max-width: 620px;
          margin: 0 auto;
          line-height: var(--body-line-height);
        }

        .wcb-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          align-items: stretch;
        }

        .wcb-card {
          background: var(--theme-color-white);
          border-radius: 20px;
          padding: 32px 28px;
          transition: transform 0.32s cubic-bezier(0.22,0.61,0.36,1),
                      box-shadow 0.32s cubic-bezier(0.22,0.61,0.36,1);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.05);
          height: 100%;
          box-sizing: border-box;
        }

        .wcb-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          border-color: var(--theme-color1);
        }

        .wcb-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--theme-color1);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .wcb-card:hover::before { transform: scaleX(1); }

        .wcb-stat-value {
          font-family: var(--heading-font-family);
          font-size: 56px;
          font-weight: 700;
          color: var(--theme-color-black);
          line-height: 1;
          margin-bottom: 6px;
          letter-spacing: -2px;
        }
        .wcb-stat-value span { color: var(--theme-color1); }

        .wcb-stat-label {
          font-family: var(--heading-font-family);
          font-size: 16px;
          font-weight: 700;
          color: var(--theme-color-black);
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .wcb-stat-desc {
          font-family: var(--body-font-family);
          font-size: 14px;
          color: rgba(0,0,0,0.6);
          line-height: 1.7;
          margin: 0;
        }

        .wcb-feat-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: rgba(255, 107, 30, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: var(--theme-color1);
          margin-bottom: 18px;
          transition: all 0.3s ease;
        }
        .wcb-card:hover .wcb-feat-icon {
          background: var(--theme-color1);
          color: #fff;
          transform: rotate(-6deg) scale(1.08);
        }

        .wcb-feat-title {
          font-family: var(--heading-font-family);
          font-size: 17px;
          font-weight: 700;
          color: var(--theme-color-black);
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .wcb-feat-desc {
          font-family: var(--body-font-family);
          font-size: 14px;
          color: rgba(0,0,0,0.6);
          line-height: 1.75;
          margin: 0;
        }

        .wcb-card-highlight {
          background: var(--theme-color1);
        }
        .wcb-card-highlight .wcb-stat-value,
        .wcb-card-highlight .wcb-stat-label,
        .wcb-card-highlight .wcb-stat-desc { color: #fff; }
        .wcb-card-highlight .wcb-stat-value span { color: rgba(255,255,255,0.75); }
        .wcb-card-highlight::before { background: #fff; }

        .wcb-card:nth-child(1)  { grid-column: span 1; }
        .wcb-card:nth-child(2)  { grid-column: span 2; }
        .wcb-card:nth-child(3)  { grid-column: span 1; }
        .wcb-card:nth-child(4)  { grid-column: span 1; }
        .wcb-card:nth-child(5)  { grid-column: span 1; }
        .wcb-card:nth-child(6)  { grid-column: span 1; }
        .wcb-card:nth-child(7)  { grid-column: span 1; }
        .wcb-card:nth-child(8)  { grid-column: span 1; }
        .wcb-card:nth-child(9)  { grid-column: span 1; }
        .wcb-card:nth-child(10) { grid-column: span 2; }
        .wcb-card:nth-child(11) { grid-column: span 1; }
        .wcb-card:nth-child(12) { grid-column: span 3; }

        @media (max-width: 1100px) {
          .wcb-grid { grid-template-columns: repeat(3, 1fr); }
          .wcb-card:nth-child(n)  { grid-column: span 1 !important; }
          .wcb-card:nth-child(2), .wcb-card:nth-child(10), .wcb-card:nth-child(12) { grid-column: span 2 !important; }
        }
        @media (max-width: 768px) {
          .wcb-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .wcb-card:nth-child(n)  { grid-column: span 1 !important; }
          .wcb-card:nth-child(2), .wcb-card:nth-child(10), .wcb-card:nth-child(12) { grid-column: span 2 !important; }
        }
        @media (max-width: 480px) {
          .wcb-grid { grid-template-columns: 1fr; gap: 10px; }
          .wcb-card:nth-child(n) { grid-column: span 1 !important; }
        }
      `}</style>

      <section className="wcb-section">
        <div className="auto-container">
          <div className="wcb-header">
            <h3>
              Why Choose Brandmingo for Top-Tier ReactJS <br />
              Development Services
            </h3>
            <p className="wcb-subtitle">
              As a trusted ReactJS development firm, we turn ideas into
              high-performance, scalable web, mobile, and enterprise apps,
              combining innovation, seamless UX, and technology that drives real
              business results.
            </p>
          </div>

          <div className="wcb-grid">
            <div className="wcb-card">
              <div className="wcb-stat-value">
                8<span>+</span>
              </div>
              <div className="wcb-stat-label">Years of Proven Expertise</div>
              <p className="wcb-stat-desc">
                Pioneering brands that dominate markets and create lasting
                impressions.
              </p>
            </div>

            <div className="wcb-card">
              <div className="wcb-feat-icon">
                <i className="fas fa-award" />
              </div>
              <div className="wcb-feat-title">Certified Brand Strategists</div>
              <p className="wcb-feat-desc">
                Deep expertise in brand identity and growth-focused marketing
                frameworks that deliver measurable impact.
              </p>
            </div>

            <div className="wcb-card">
              <div className="wcb-stat-value">
                500<span>+</span>
              </div>
              <div className="wcb-stat-label">Projects Delivered</div>
              <p className="wcb-stat-desc">
                High-impact brand solutions for startups to established
                enterprises.
              </p>
            </div>

            <div className="wcb-card">
              <div className="wcb-stat-value">
                98<span>%</span>
              </div>
              <div className="wcb-stat-label">Client Satisfaction Rate</div>
              <p className="wcb-stat-desc">
                Creative excellence that consistently exceeds expectations.
              </p>
            </div>

            <div className="wcb-card">
              <div className="wcb-feat-icon">
                <i className="fas fa-bolt" />
              </div>
              <div className="wcb-feat-title">Agile-Driven Delivery</div>
              <p className="wcb-feat-desc">
                Rapid iterations, clear milestones, and transparent workflows
                that keep every project on track.
              </p>
            </div>

            <div className="wcb-card">
              <div className="wcb-feat-icon">
                <i className="fas fa-headset" />
              </div>
              <div className="wcb-feat-title">24×7 Expert Support</div>
              <p className="wcb-feat-desc">
                Round-the-clock support with rapid issue resolution whenever
                your brand needs us most.
              </p>
            </div>

            <div className="wcb-card wcb-card-highlight">
              <div className="wcb-stat-value">
                100<span>%</span>
              </div>
              <div className="wcb-stat-label">In-House Creative Team</div>
              <p className="wcb-stat-desc">
                No outsourcing—every pixel crafted by our dedicated in-house
                designers.
              </p>
            </div>

            <div className="wcb-card">
              <div className="wcb-feat-icon">
                <i className="fas fa-shield-alt" />
              </div>
              <div className="wcb-feat-title">Quality Assurance</div>
              <p className="wcb-feat-desc">
                Rigorous brand consistency audits and performance benchmarks
                built into every deliverable.
              </p>
            </div>

            <div className="wcb-card">
              <div className="wcb-stat-value">
                99<span>%</span>
              </div>
              <div className="wcb-stat-label">On-Time Delivery</div>
              <p className="wcb-stat-desc">
                On schedule without ever compromising on quality or strategic
                depth.
              </p>
            </div>

            <div className="wcb-card">
              <div className="wcb-feat-icon">
                <i className="fas fa-chart-line" />
              </div>
              <div className="wcb-feat-title">
                Optimized for Performance & Growth
              </div>
              <p className="wcb-feat-desc">
                Brand systems engineered for scalability—built to grow with your
                business and captivate your audience.
              </p>
            </div>

            <div className="wcb-card">
              <div className="wcb-stat-value">
                90<span>%</span>
              </div>
              <div className="wcb-stat-label">Client Retention Rate</div>
              <p className="wcb-stat-desc">
                Reflecting our commitment to delivering value and lasting
                partnerships.
              </p>
            </div>

            <div className="wcb-card">
              <div className="wcb-feat-icon">
                <i className="fas fa-layer-group" />
              </div>
              <div className="wcb-feat-title">Flexible Engagement Models</div>
              <p className="wcb-feat-desc">
                Dedicated teams or project-based models tailored to suit your
                unique branding and business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseBrandmingo;
