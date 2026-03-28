import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "@fortawesome/fontawesome-free/css/all.min.css";
// CSS IMPORTS
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "aos/dist/aos.css";

// PAGES
import Home from "./pages/Home/Home";
import Preloader from "./components/Preloader/Preloader";
import BackToTop from "./components/BackToTop/BackToTop";
import Cursor from "./components/Cursor/Cursor";

function App() {
  // AOS INIT (Animation)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {" "}
      <Cursor />
      <BrowserRouter>
        <Preloader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <BackToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
