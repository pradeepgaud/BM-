import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

/* ── Inline SVG icons — no font dependency ── */
const IconPhone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const IconEnvelope = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconClock = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const IconTwitter = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const IconPinterest = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const IconInstagram = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="15"
    height="15"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconChevronDown = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="12"
    height="12"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const IconChevronUp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="12"
    height="12"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();
  const [isMegaOpen, setIsMegaOpen] = useState(false);

  const toggleMobileMenu = () => {
    const next = !mobileMenuOpen;
    setMobileMenuOpen(next);
    if (next) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
      setOpenDropdowns({});
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.classList.remove("mobile-menu-visible");
    setOpenDropdowns({});
  };

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = (path) => (location.pathname === path ? "current" : "");

  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Header */}
      <header className="main-header header-style-one header-1">
        <div className="container">
          <div className="header-lower">
            <div className="main-box">
              {/* Logo */}
              <div className="logo">
                <Link to="/" onClick={closeMobileMenu}>
                  <img
                    src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1774440484/Group-19-2-1024x199_pnnsp8.png"
                    alt="Logo"
                  />
                </Link>
              </div>

              {/* Nav Box */}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <ul className="navigation">
                    {/* Home Dropdown */}
                    <li className={`dropdown ${isActive("/")}`}>
                      <Link to="/">Home</Link>
                      <ul>
                        <li>
                          <Link to="/" onClick={closeMobileMenu}>
                            Digital Agency
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-2" onClick={closeMobileMenu}>
                            SEO Agency
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-3" onClick={closeMobileMenu}>
                            IT Company
                          </Link>
                        </li>
                        <li>
                          <Link to="/index-4" onClick={closeMobileMenu}>
                            Freelancer
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* About */}
                    <li className={isActive("/about")}>
                      <Link to="/about" onClick={closeMobileMenu}>
                        About
                      </Link>
                    </li>

                    {/* Pages Dropdown */}
                    <li className="dropdown">
                      <Link to="#">Pages</Link>
                      <ul>
                        <li className="dropdown">
                          <Link to="#">Project</Link>
                          <ul>
                            <li>
                              <Link to="/projects" onClick={closeMobileMenu}>
                                Project List
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/project-details"
                                onClick={closeMobileMenu}
                              >
                                Project Details
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <Link to="#">Team</Link>
                          <ul>
                            <li>
                              <Link to="/team" onClick={closeMobileMenu}>
                                Team List
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/team-details"
                                onClick={closeMobileMenu}
                              >
                                Team Details
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <Link to="#">Shop</Link>
                          <ul>
                            <li>
                              <Link to="/shop" onClick={closeMobileMenu}>
                                Products
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop-sidebar"
                                onClick={closeMobileMenu}
                              >
                                Products with Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/product-details"
                                onClick={closeMobileMenu}
                              >
                                Product Details
                              </Link>
                            </li>
                            <li>
                              <Link to="/cart" onClick={closeMobileMenu}>
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link to="/checkout" onClick={closeMobileMenu}>
                                Checkout
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/pricing" onClick={closeMobileMenu}>
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link to="/testimonial" onClick={closeMobileMenu}>
                            Testimonials
                          </Link>
                        </li>
                        <li>
                          <Link to="/faq" onClick={closeMobileMenu}>
                            Faq
                          </Link>
                        </li>
                        <li>
                          <Link to="/404" onClick={closeMobileMenu}>
                            Error 404
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Services Mega Dropdown */}
                    <li
                      className={`dropdown has-mega ${isMegaOpen ? "active" : ""}`}
                      onMouseEnter={() => setIsMegaOpen(true)}
                      onMouseLeave={() => setIsMegaOpen(false)}
                    >
                      <Link
                        to="/services"
                        onClick={() => setIsMegaOpen(false)} // 🔥 click pe close
                      >
                        Services
                      </Link>

                      <div className={`mega-menu ${isMegaOpen ? "show" : ""}`}>
                        <div className="mega-container">
                          <div className="mega-column">
                            <h4>
                              <Link to="/web-development">Web Development</Link>
                            </h4>
                            <ul>
                              <li>
                                <Link to="#">Wordpress Website</Link>
                              </li>
                              <li>
                                <Link to="#">Woocommerce Website</Link>
                              </li>
                              <li>
                                <Link to="#">Shopify Website</Link>
                              </li>
                              <li>
                                <Link to="#">React Development</Link>
                              </li>
                            </ul>
                          </div>

                          <div className="mega-column">
                            <h4>Ads And Campaigns</h4>
                            <ul>
                              <li>
                                <Link to="#">Google Ads</Link>
                              </li>
                              <li>
                                <Link to="#">Facebook / Instagram Ads</Link>
                              </li>
                              <li>
                                <Link to="#">Linkedin Ads</Link>
                              </li>
                              <li>
                                <Link to="#">Quora Ads</Link>
                              </li>
                            </ul>
                          </div>

                          <div className="mega-column">
                            <h4>Social Media Management</h4>
                            <ul>
                              <li>
                                <Link to="#">Brand Awareness</Link>
                              </li>
                              <li>
                                <Link to="#">Social Media Engagement</Link>
                              </li>
                              <li>
                                <Link to="#">Social Media Posting</Link>
                              </li>
                              <li>
                                <Link to="#">Social Media Boosting</Link>
                              </li>
                            </ul>
                          </div>

                          <div className="mega-column">
                            <h4>UI/UX And Audits</h4>
                            <ul>
                              <li>
                                <Link to="#">Custom Web Design</Link>
                              </li>
                              <li>
                                <Link to="#">Corporate Branding</Link>
                              </li>
                              <li>
                                <Link to="#">Mobile App Design</Link>
                              </li>
                              <li>
                                <Link to="#">Product Design</Link>
                              </li>
                            </ul>
                          </div>

                          <div className="mega-column">
                            <h4>SEO Optimizing</h4>
                            <ul>
                              <li>
                                <Link to="#">Organic Traffic</Link>
                              </li>
                              <li>
                                <Link to="#">Genuine Inquiries</Link>
                              </li>
                              <li>
                                <Link to="#">Mobile Search</Link>
                              </li>
                              <li>
                                <Link to="#">Local Search Dominance</Link>
                              </li>
                            </ul>
                          </div>

                          <div className="mega-column">
                            <h4>Ecommerce Management</h4>
                            <ul>
                              <li>
                                <Link to="#">Amazon Management</Link>
                              </li>
                              <li>
                                <Link to="#">Flipkart Management</Link>
                              </li>
                              <li>
                                <Link to="#">Shopsy Management</Link>
                              </li>
                              <li>
                                <Link to="#">Snapdeal Management</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* News Dropdown */}
                    <li className="dropdown">
                      <Link to="#">News</Link>
                      <ul>
                        <li>
                          <Link to="/news" onClick={closeMobileMenu}>
                            News Grid
                          </Link>
                        </li>
                        <li>
                          <Link to="/news-details" onClick={closeMobileMenu}>
                            News Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* Contact */}
                    <li className={isActive("/contact")}>
                      <Link to="/contact" onClick={closeMobileMenu}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="outer-box">
                  <div className="ui-btn-outer">
                    <div className="ui-btn-search">
                      <Link
                        to="/contact"
                        className="contact-btn"
                        onClick={closeMobileMenu}
                      >
                        Let's Talk
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Nav Toggler */}
                  <div
                    className={`mobile-nav-toggler${mobileMenuOpen ? " active" : ""}`}
                    onClick={toggleMobileMenu}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`mobile-menu${mobileMenuOpen ? " mobile-menu-visible" : ""}`}
        >
          <div className="menu-backdrop" onClick={closeMobileMenu}></div>
          <nav className="menu-box">
            {/* Header */}
            <div className="upper-box">
              <div className="nav-logo">
                <Link to="/" onClick={closeMobileMenu}>
                  <img
                    src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1774440484/Group-19-2-1024x199_pnnsp8.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="close-btn" onClick={closeMobileMenu}>
                ✕
              </div>
            </div>

            {/* Navigation */}
            <ul className="navigation clearfix">
              {/* Home */}
              <li className={`dropdown ${isActive("/")}`}>
                <div className="mob-nav-row">
                  <Link to="/" onClick={closeMobileMenu}>
                    Home
                  </Link>
                  <span
                    className="mob-arrow"
                    onClick={() => toggleDropdown("home")}
                  >
                    {openDropdowns["home"] ? (
                      <IconChevronUp />
                    ) : (
                      <IconChevronDown />
                    )}
                  </span>
                </div>
                {openDropdowns["home"] && (
                  <ul>
                    <li>
                      <Link to="/" onClick={closeMobileMenu}>
                        Digital Agency
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-2" onClick={closeMobileMenu}>
                        SEO Agency
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-3" onClick={closeMobileMenu}>
                        IT Company
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-4" onClick={closeMobileMenu}>
                        Freelancer
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* About */}
              <li className={isActive("/about")}>
                <Link to="/about" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>

              {/* Pages */}
              <li className="dropdown">
                <div className="mob-nav-row">
                  <Link to="#" onClick={(e) => e.preventDefault()}>
                    Pages
                  </Link>
                  <span
                    className="mob-arrow"
                    onClick={() => toggleDropdown("pages")}
                  >
                    {openDropdowns["pages"] ? (
                      <IconChevronUp />
                    ) : (
                      <IconChevronDown />
                    )}
                  </span>
                </div>
                {openDropdowns["pages"] && (
                  <ul>
                    <li>
                      <Link to="/projects" onClick={closeMobileMenu}>
                        Project List
                      </Link>
                    </li>
                    <li>
                      <Link to="/team" onClick={closeMobileMenu}>
                        Team List
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing" onClick={closeMobileMenu}>
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" onClick={closeMobileMenu}>
                        Faq
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Services */}
              <li className="dropdown">
                <div className="mob-nav-row">
                  <Link to="/services" onClick={(e) => e.preventDefault()}>
                    Services
                  </Link>
                  <span
                    className="mob-arrow"
                    onClick={() => toggleDropdown("services")}
                  >
                    {openDropdowns["services"] ? (
                      <IconChevronUp />
                    ) : (
                      <IconChevronDown />
                    )}
                  </span>
                </div>
                {openDropdowns["services"] && (
                  <ul>
                    <li>
                      <Link to="/services" onClick={closeMobileMenu}>
                        Services List
                      </Link>
                    </li>
                    <li>
                      <Link to="/service-details" onClick={closeMobileMenu}>
                        Services Details
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* News */}
              <li className="dropdown">
                <div className="mob-nav-row">
                  <Link to="#" onClick={(e) => e.preventDefault()}>
                    News
                  </Link>
                  <span
                    className="mob-arrow"
                    onClick={() => toggleDropdown("news")}
                  >
                    {openDropdowns["news"] ? (
                      <IconChevronUp />
                    ) : (
                      <IconChevronDown />
                    )}
                  </span>
                </div>
                {openDropdowns["news"] && (
                  <ul>
                    <li>
                      <Link to="/news" onClick={closeMobileMenu}>
                        News Grid
                      </Link>
                    </li>
                    <li>
                      <Link to="/news-details" onClick={closeMobileMenu}>
                        News Details
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Contact */}
              <li className={isActive("/contact")}>
                <Link to="/contact" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
            <ul className="contact-list-one">
              <li>
                <div className="contact-info-box">
                  <span className="icon">
                    <IconPhone />
                  </span>
                  <span className="title">Call Now</span>
                  <a href="tel:+92880098670">+92 (8800) - 98670</a>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon">
                    <IconEnvelope />
                  </span>
                  <span className="title">Send Email</span>
                  <a href="mailto:help@company.com">help@company.com</a>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon">
                    <IconClock />
                  </span>
                  <span className="title">Working Hours</span>
                  <span>Mon - Sat 8:00 - 6:30, Sunday - CLOSED</span>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <ul className="social-links">
              <li>
                <a href="#" aria-label="Twitter">
                  <IconTwitter />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook">
                  <IconFacebook />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Pinterest">
                  <IconPinterest />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram">
                  <IconInstagram />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Sticky Header */}
        <div className={`sticky-header${isSticky ? " fixed-header" : ""}`}>
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1774440484/Group-19-2-1024x199_pnnsp8.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className={`dropdown ${isActive("/")}`}>
                        <Link to="/">Home</Link>
                      </li>
                      <li className={isActive("/about")}>
                        <Link to="/about">About</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="#">Pages</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="/services">Services</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="#">News</Link>
                      </li>
                      <li className={isActive("/contact")}>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div
                  className={`mobile-nav-toggler${mobileMenuOpen ? " active" : ""}`}
                  onClick={toggleMobileMenu}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
