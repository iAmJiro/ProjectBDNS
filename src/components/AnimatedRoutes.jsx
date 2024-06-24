import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Forms from "./Forms";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Forms" element={<Forms />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
