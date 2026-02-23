import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/componnt/Navbar";
import Footer from "./pages/componnt/Footer";
import HeroSection from "./pages/HeroSection";
import ContactPage from "./pages/ContactPage";
import AboutSection from "./pages/hero/AboutSection";
import AboutUs from "./pages/AboutUs";
import { FiMessageCircle } from "react-icons/fi";
import CaseStudiesPage from "./pages/CaseStudy";
import { FaWhatsapp } from "react-icons/fa";
import Websitedesign from "./pages/Websitedesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import CustomSoftware from "./pages/CustomSoftware";
import Blog from "./pages/Blog";
import BlogDetail from "./Blogs/BlogDetail";

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
        <Route path="/case-study" element={<CaseStudiesPage />} />
        <Route
          path="/services/web-design-development"
          element={<Websitedesign />}
        />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route
          path="/services/custom-software-development"
          element={<CustomSoftware />}
        />
                <Route path="/blogs/:slug" element={<BlogDetail />} />

          <Route
          path="/blog"
          element={<Blog />}
        />
      </Routes>
      <div className="fixed bottom-5 right-10 z-50 flex flex-col items-end gap-2">
        <div className="bg-white text-black text-[9px] font-black px-4 py-1.5 rounded-full shadow-xl animate-bounce tracking-tighter">
          WE ARE HERE!
        </div>
        <div className="w-16 h-16 bg-[#9C0000] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(236,72,153,0.4)] cursor-pointer hover:scale-105 transition-transform">
          <div className="relative">
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-[10px] text-black font-bold flex items-center justify-center rounded-full">
              1
            </span>
            <FaWhatsapp size={32} color="white" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
