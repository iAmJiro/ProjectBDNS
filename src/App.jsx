import React from "react";
import Social from "./components/Social";
// import "./input.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
function App() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //     setTimeout(() => setLoading(false), 3300);
  // }, []);
  // if (loading) {
  //     return <Loading />;
  // }
  return (
    <div>
      <div className="">
        <Router> 
          <AnimatedRoutes />
        </Router>
        <Social />
      </div>
    </div>
  );
}

export default App;
