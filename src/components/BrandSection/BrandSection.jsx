import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import brand1 from "../../assets/images/icons/brand1-1.png";
import brand2 from "../../assets/images/icons/brand1-2.png";
import brand3 from "../../assets/images/icons/brand1-3.png";
import brand4 from "../../assets/images/icons/brand1-4.png";
import brand5 from "../../assets/images/icons/brand1-5.png";

const BrandSection = () => {
  useEffect(() => {
    const swiper = new Swiper(".brand-slider", {
      modules: [Autoplay],

      loop: true,
      slidesPerView: 5,
      spaceBetween: 30,

      autoplay: {
        delay: 0, // 🔥 continuous scroll
        disableOnInteraction: false,
      },

      speed: 4000, // 🔥 smooth continuous movement

      breakpoints: {
        320: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  const brands = [brand1, brand2, brand3, brand4, brand5];

  return (
    <div className="brand-section">
      <div className="swiper brand-slider">
        <div className="swiper-wrapper">
          {brands.map((img, index) => (
            <div className="swiper-slide" key={index}>
              <div className="brand-box-1">
                <span className="brand-img-1">
                  <img src={img} alt="" />
                </span>
                <span className="brand-img-1">
                  <img src={img} alt="" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
