import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dental from "./pages/Dental";
import Plumbing from "./pages/Plumbing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dental" element={<Dental />} />
      <Route path="/plumbing" element={<Plumbing />} />
    </Routes>
  );
}
