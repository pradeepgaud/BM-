import star1 from "../../assets/images/icons/star1-2.svg";
import star2 from "../../assets/images/icons/star1-1.svg";

const texts = [
  "Digital Agency",
  "Smart & Efficient",
  "Powerful Performance",
  "Digital Excellence",
  "Growth Platform",
];

const MarqueeSection = () => {
  return (
    <div className="marquee-area2 section-padding pb-0">
      {/* FIRST ROW */}
      <div className="marquee-section style-2">
        <div className="marquee-two">
          {[...Array(5)].map((_, i) => (
            <div className="marquee-group" key={i}>
              {texts.map((text, index) => (
                <div className="text" key={index}>
                  <img src={star1} alt="" />
                  {text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="marquee-section style-3">
        <div className="marquee-two">
          {[...Array(5)].map((_, i) => (
            <div className="marquee-group" key={i}>
              {texts.map((text, index) => (
                <div className="text" key={index}>
                  <img src={star2} alt="" />
                  {text}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
