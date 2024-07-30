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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/ProjectBDNS">
      <Routes>
        <Route path="/ProjectBDNS/" element={<Home />} />
        <Route path="/ProjectBDNS/Forms" element={<Forms />} />
        <Route path="/ProjectBDNS/Gallery" element={<Gallery />} />
        <Route path="/ProjectBDNS/Testimonials" element={<Testimonials />} />
      </Routes>
      <Social />
    </Router>
  </React.StrictMode>
);
