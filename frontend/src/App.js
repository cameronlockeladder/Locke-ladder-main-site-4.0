import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Home from "@/pages/Home";
import ComingSoon from "@/pages/ComingSoon";

function App() {
  return (
    <div className="App">
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roofing/" element={<ComingSoon title="Roofing" />} />
            <Route path="/windows-doors/" element={<ComingSoon title="Windows & Doors" />} />
            <Route path="/siding/" element={<ComingSoon title="Siding" />} />
            <Route path="/gutters/" element={<ComingSoon title="Gutters & Gutter Guards" />} />
            <Route path="/cost-scope-index/" element={<ComingSoon title="Cost & Scope Index" />} />
            <Route path="/service-areas/" element={<ComingSoon title="Service Areas" />} />
            <Route path="/project-proof/" element={<ComingSoon title="Project Proof" />} />
            <Route path="/start-here/" element={<ComingSoon title="Start Here" />} />
            <Route path="*" element={<ComingSoon title="Page" />} />
          </Routes>
        </BrowserRouter>
      </MotionConfig>
      <div className="grain-overlay" aria-hidden="true" />
    </div>
  );
}

export default App;
