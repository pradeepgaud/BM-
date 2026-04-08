
import React from "react";
import { Link } from "react-router-dom";
import pageTitleBg from "../../assets/images/background/page-title.jpg";

const ServicePageHero = ({ title = "Services" }) => {
  return (
    <section
      className="page-title"
      style={{
        backgroundImage: `url(${pageTitleBg})`,
      }}
    >
      <div className="auto-container">
        <div className="title-outer text-center">
          <h1 className="title">{title}</h1>

          <ul className="page-breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicePageHero;
