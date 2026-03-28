import star from "../../assets/images/icons/star.png";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";
import arrowIcon from "../../assets/images/icons/arrow-icon.png";
import shape from "../../assets/images/icons/ellipse1-1.png";

import project1 from "../../assets/images/resource/project1-1.jpg";
import project2 from "../../assets/images/resource/project1-2.jpg";
import project3 from "../../assets/images/resource/project1-3.jpg";

const projects = [
  {
    img: project1,
    title: "E-Commerce Growth Platform",
  },
  {
    img: project2,
    title: "Brand & Website Redesign",
  },
  {
    img: project3,
    title: "Local Business SEO Campaign",
  },
];

const ProjectSection = () => {
  return (
    <section className="project-section section-padding">
      {/* SHAPE */}
      <div className="light-shape">
        <img src={shape} alt="" />
      </div>

      <div className="container">
        {/* HEADER */}
        <div className="sec-title text-center text-lg-start">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-xl-7 col-lg-8">
              <span className="sub-title">
                <img src={star} alt="" />
                Case Study
              </span>

              <h2 className="title">
                Our Recently Completed <span>Latest Projects</span>
              </h2>
            </div>

            <div className="col-xl-3 col-lg-4" data-aos="fade-up">
              <div className="project-btn text-center text-lg-end">
                <a href="#" className="btn-style-one">
                  <span className="btn-arrow-left">
                    <img src={arrow} alt="" />
                  </span>

                  <span className="btn-title">View All Project</span>

                  <span className="btn-arrow-right">
                    <img src={arrow} alt="" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="row">
        {projects.map((item, index) => (
          <div
            key={index}
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-delay={300 + index * 200}
          >
            <div className="project-block">
              <div className="inner-block">
                <div className="image-block">
                  {/* DOUBLE IMAGE FOR HOVER */}
                  <img className="hover-img" src={item.img} alt="" />
                  <img className="hover-img" src={item.img} alt="" />

                  {/* ARROW ICON */}
                  <a href="#" className="arrow-icon">
                    <img src={arrowIcon} alt="" />
                  </a>
                </div>

                <div className="content-block">
                  <h4 className="title">
                    <a href="#">{item.title}</a>
                  </h4>

                  <ul>
                    <li>Graphic</li>
                    <li className="dot"></li>
                    <li>Graphic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
