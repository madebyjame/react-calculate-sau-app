import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Bmi from "./pages/bmi";
import Bmr from "./pages/bmr";
import Car from "./pages/car";
import Footer from "./components/footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmr" element={<Bmr />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/car" element={<Car />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
