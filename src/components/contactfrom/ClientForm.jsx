import React, { useState } from "react";
import "./ClientForm.css";

const ClientForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    service: "",
    phone: "",
    email: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [logoUrls, setLogoUrls] = useState([
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909136/13_fqkqi8.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909136/15_jtngub.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909136/9_srd63d.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909136/10_rdyqbw.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909136/12_jxfycf.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/7_wltr7h.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/6_xzsqqo.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/3_wehha6.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/5_ulpkjg.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/2_hp07da.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/4_oiqfn4.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909138/1_ebpjkv.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909138/1_ebpjkv.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909137/11_kqv3rp.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910010/19_li2qkj.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910009/14_xe4e63.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910009/17_wwutuv.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910009/8_bf6si8.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910009/18_mckzrw.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910007/16_qzhyjb.png",
  ]);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [logoInput, setLogoInput] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitMessage("Message sent successfully!");
      setIsSubmitting(false);
    }, 1500);
  };

  const applyLogo = () => {
    if (selectedLogo !== null && logoInput.trim()) {
      const updated = [...logoUrls];
      updated[selectedLogo] = logoInput.trim();
      setLogoUrls(updated);
      setSelectedLogo(null);
      setLogoInput("");
    }
  };

  return (
    <section className="client-form-section">
      <div className="container">
        <div className="cf-heading text-center">
          <h2 className="cf-title" style={{ gap: "20px" }}>
            Let's Create
            <span className="sun-wrapper">
              <div className="sun">
                <div className="center"></div>
                {[...Array(8)].map((_, i) => (
                  <div className={`ray r-${i + 1}`} key={i}></div>
                ))}
              </div>
            </span>
          </h2>
          <h3>Greatness Together!</h3>
        </div>

        <div className="cf-box">
          <div className="cf-grid">
            {/* LEFT */}
            <div className="cf-form">
              <h4>Discuss Your Project With Us</h4>
              <form onSubmit={handleSubmit}>
                <div className="cf-row">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="service"
                    placeholder="Service *"
                    onChange={handleChange}
                  />
                </div>
                <div className="cf-row">
                  <input
                    type="text"
                    name="phone"
                    placeholder="+91   Phone Number"
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="project"
                  placeholder="About Your Project *"
                  onChange={handleChange}
                ></textarea>
                <p className="cf-privacy">
                  By sending this form, I confirm that I have read & accept the{" "}
                  <span>privacy policy</span>.
                </p>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send A Message →"}
                </button>
                {submitMessage && <p className="cf-msg">{submitMessage}</p>}
              </form>
            </div>

            {/* RIGHT */}
            <div className="cf-right">
              <h4>Driven by Trust, Backed by Results</h4>
              <p>
                Our work speaks through the trust placed in us by top brands.
              </p>
              <div className="cf-clients">
                {logoUrls.map((url, i) => (
                  <div
                    className={`cf-client-box ${selectedLogo === i ? "selected" : ""}`}
                    key={i}
                    onClick={() => setSelectedLogo(i)}
                    title="Click to set logo"
                  >
                    {url ? (
                      <img src={url} alt={`Logo ${i + 1}`} />
                    ) : (
                      <span>LOGO</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientForm;
