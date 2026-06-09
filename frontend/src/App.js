import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import ComingSoon from "@/pages/ComingSoon";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roofing/" element={<ServicePage slug="roofing" />} />
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
      <div className="grain-overlay" aria-hidden="true" />
    </div>
  );
}

export default App;
