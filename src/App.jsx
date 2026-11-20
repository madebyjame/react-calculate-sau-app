import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Bmi from "./pages/bmi";
import Bmr from "./pages/bmr";
import Car from "./pages/car";
import Footer from "./components/footer.jsx";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/bmr" element={<Bmr />} />
        <Route path="/carinstallment" element={<Car />} />
        <Route path="/car" element={<Car />} />
      </Routes>
      <Footer />
    </>
  );
}
