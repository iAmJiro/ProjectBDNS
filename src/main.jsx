import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import AnimatedRoutes from "./Components/AnimatedRoutes.jsx";
import Forms from "./Components/Forms.jsx";
import Gallery from "./Components/Gallery.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Social from "./Components/Social.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import About from "./Components/About.jsx";
import FAQ from "./Components/FAQ.jsx";
import HomeNav from "./Components/HomeNav.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/ProjectBDNS/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Forms" element={<Forms />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
      </Routes>
      <Social />
    </Router>
  </React.StrictMode>
);
