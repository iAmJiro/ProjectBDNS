import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home.jsx";
import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Forms from "./Components/Forms";
import Gallery from "./Components/Gallery.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Social from "./Components/Social.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/ProjectBDNS" element={<Home />} />
        <Route path="/ProjectBDNS/Forms" element={<Forms />} />
        <Route path="/ProjectBDNS/Gallery" element={<Gallery />} />
      </Routes>
      <Social />
    </Router>
  </React.StrictMode>
);
