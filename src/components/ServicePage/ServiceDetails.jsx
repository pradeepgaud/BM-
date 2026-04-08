import React, { useState } from "react";
import { Link } from "react-router-dom";
import pageTitleBg from "../../assets/images/background/page-title.jpg";
import bannerImg from "../../assets/images/resource/service-details.jpg";
import "../../assets/css/style.css";


const ServiceDetails = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* ✅ HERO SECTION (ADDED ONLY) */}
      <section
        className="page-title"
        style={{ backgroundImage: `url(${pageTitleBg})` }}
      >
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">Service Details</h1>

            <ul className="page-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Service Details</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ YOUR ORIGINAL CODE (UNCHANGED) */}
      <section className="services-details pt-120 pb-120">
        <div className="container">
          <div className="row">

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">

                  <div className="sidebar-service-list">
                    <ul>
                      <li><a href="#"><i className="fas fa-angle-right"></i><span>App Development</span></a></li>
                      <li className="current"><a href="#"><i className="fas fa-angle-right"></i><span>UI/UX Design</span></a></li>
                      <li><a href="#"><i className="fas fa-angle-right"></i><span>Website Design</span></a></li>
                      <li><a href="#"><i className="fas fa-angle-right"></i><span>Web Development</span></a></li>
                      <li><a href="#"><i className="fas fa-angle-right"></i><span>E-commerce Development</span></a></li>
                      <li><a href="#"><i className="fas fa-angle-right"></i><span>Branding Identity</span></a></li>
                    </ul>
                  </div>

                  <div className="service-details-help">
                    <div className="help-shape-1"></div>
                    <div className="help-shape-2"></div>
                    <h2 className="help-title">
                      Contact with <br /> us for any <br /> advice
                    </h2>
                    <div className="help-icon">
                      <span className="lnr-icon-phone-handset"></span>
                    </div>
                    <div className="help-contact">
                      <p>Need help? Talk to an expert</p>
                      <a href="tel:12463330079">+892 (123) 112 - 9999</a>
                    </div>
                  </div>

                  <div className="sidebar-widget service-sidebar-single mt-4">
                    <div className="service-sidebar-single-btn wow fadeInUp">
                      <a href="#" className="theme-btn btn-style-one d-grid">
                        <span>
                          <i className="fas fa-file-pdf"></i> download pdf file
                        </span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-8">
              <div className="services-details__content">

                <div className="service-details-image fix">
                  <img
                    className="w-100"
                    src={bannerImg} alt="" 
                  />
                </div>

                <h3 className="mt-4 mb-2">Service Overview</h3>

                <p className="text mb-3">
                  Lorem ipsum is simply free text used by copytyping refreshing...
                </p>

                <p className="text mb-3">
                  When an unknown printer took a galley of type...
                </p>

                <div className="content mt-40">
                  <div className="text">
                    <h3 className="mb-2">Service Center</h3>
                    <p className="text mb-3">
                      Lorem ipsum is simply free text used by copytyping refreshing...
                    </p>
                    <blockquote className="blockquote-one mb-3">
                      Lorem ipsum dolor sit amet...
                    </blockquote>
                  </div>

                  {/* ✅ SWIPER PART KEPT */}
                  <div className="swiper project-image-slider pb-0">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img className="w-100" src="/images/resource/service-d1.jpg" alt="" />
                        <p className="text">Lorem ipsum dolor sit amet...</p>
                      </div>
                      <div className="swiper-slide">
                        <img className="w-100" src="/images/resource/service-d2.jpg" alt="" />
                        <p className="text">Lorem ipsum dolor sit amet...</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="faq-content mt-5">
                  <h3 className="mb-3">Frequently Asked Question</h3>

                  <ul className="accordion-box p-0 mt-4">
                    {[
                      "What services does your creative agency offer?",
                      "Do you provide brand guidelines?",
                      "Will my website be mobile-friendly?",
                      "Do you provide digital marketing services?",
                    ].map((q, i) => (
                      <li key={i} className="accordion block">
                        <div
                          className="acc-btn"
                          onClick={() => toggleAccordion(i)}
                        >
                          {q}
                        </div>

                        {activeIndex === i && (
                          <div className="acc-content current">
                            <div className="text">
                              There are many variations of passages...
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;