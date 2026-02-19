import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/componnt/Navbar";
import Footer from "./pages/componnt/Footer";
import HeroSection from "./pages/HeroSection";
import ContactPage from "./pages/ContactPage";
import AboutSection from "./pages/hero/AboutSection";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
            </>
          }
        />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
