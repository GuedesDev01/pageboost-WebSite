import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FitLife from "./pages/FitLife";
import AutoPrime from "./pages/AutoPrime";
import TechFlow from "./pages/TechFlow";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/fitlive" element={<FitLife />} />
        <Route path="/projetos/autoprime" element={<AutoPrime />} />
        <Route path="/projetos/techflow" element={<TechFlow />} />
      </Routes>
    </BrowserRouter>
  );
}
