import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import Gallery from "./Components/Gallery.jsx";
import Forms from "./Components/Forms.jsx";
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
import SignIn from "./Admin/SignIn.jsx";
import ImageList from "./Admin/Store/ImageList.jsx";
import SocialTest from "./Components/SocialTest.jsx";
import FAQ2 from "./Components/FAQ2.jsx";
import TermsOfService from "./Components/TermsOfService.jsx";
import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/ProjectBDNS/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Forms" element={<Forms />} />
        {/* <Route path="/Gallery" element={<Gallery />} /> */}
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQ2" element={<FAQ2 />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Gallery" element={<ImageList />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Social />
    </Router>
  </React.StrictMode>
);
