import heroBg from "../../assets/images/banner/hero-bg-1-1.jpg";
import obj1 from "../../assets/images/icons/hero-object-1-1.png";
import obj2 from "../../assets/images/icons/hero-object-1-2.png";
import circle from "../../assets/images/banner/circle1-1.png";
import arrow from "../../assets/images/icons/right-arrow-1-1.png";
import btnArrow from "../../assets/images/icons/right-arrow-1-2.png";

const Hero = () => {
  return (
    <section
      className="hero-section hero-1 bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-oboject-1">
        <img src={obj1} alt="" />
      </div>

      <div className="hero-oboject-2">
        <img src={obj2} alt="" />
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-up">
            <span>We Build Digital</span> Experiences That Grow Your Business
          </h1>

          <div className="content-items">
            <div className="circle-box" data-aos="fade-up">
              <img className="ani-circle" src={circle} alt="" />
              <a href="#" className="arrow-icon">
                <img src={arrow} alt="" />
              </a>
            </div>

            <div className="content" data-aos="fade-up">
              <div className="hero-text">
                From startups to established companies, we create high-impact
                digital solutions that attract, engage, and convert customers.
              </div>

              <a href="#" className="btn-style-one">
                <span className="btn-arrow-left">
                  <img src={btnArrow} alt="" />
                </span>
                <span className="btn-title">Discover More</span>
                <span className="btn-arrow-right">
                  <img src={btnArrow} alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
