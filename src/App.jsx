import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/componnt/Navbar";
import Footer from "./pages/componnt/Footer";
import HeroSection from "./pages/HeroSection";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import CaseStudiesPage from "./pages/CaseStudy";
import { FaWhatsapp } from "react-icons/fa";
import Websitedesign from "./pages/Websitedesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import CustomSoftware from "./pages/CustomSoftware";
import Blog from "./pages/Blog";
import BlogDetail from "./Blogs/BlogDetail";
import ScrollToTop from "./pages/componnt/ScrollToTop";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

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
        <Route path="/blog" element={<Blog />} />

        {/* 404 — catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* WhatsApp floating CTA — uncomment to activate */}
      {/* <div className="fixed bottom-5 right-10 z-50 flex flex-col items-end gap-2">
        <div className="bg-white text-black text-[9px] font-black px-4 py-1.5 rounded-full shadow-xl animate-bounce tracking-tighter">
          WE ARE HERE!
        </div>
        <a
          href="https://wa.me/your-number-here"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Nexasoft Solutions on WhatsApp"
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform"
        >
          <FaWhatsapp size={32} color="white" />
        </a>
      </div> */}

      <Footer />
    </>
  );
}

export default App;
