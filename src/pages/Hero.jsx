import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import {
  MessageSquare,
  Settings,
  Wrench,
  Bot,
  Palette,
  Rocket,
  Star,
  Link as LinkIcon,
  Building2,
  ArrowUpRight,
  RefreshCw,
  Sparkles,
  GraduationCap,
  Gem,
} from "lucide-react";
import {
  FiRefreshCw,
  FiCpu,
  FiBookOpen,
  FiPenTool,
  FiArrowUpRight,
  FiChevronDown,
} from "react-icons/fi";
import Contact from "./componnt/Contact";
import Footer from "./componnt/Footer";

const HeroPage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [active, setActive] = useState(null);

  const steps = [
    {
      title: "01 Discovery",
      desc: "We start with your vision: What do you want to build? How can we accelerate your company’s growth to outpace the competition?",
    },
    {
      title: "02 Kickoff",
      desc: "We align teams, define milestones, and establish a roadmap to ensure smooth execution from day one.",
    },
    {
      title: "03 Execute",
      desc: "Our engineers and designers collaborate to build, iterate, and optimize your solution with precision.",
    },
    {
      title: "04 Deliver",
      desc: "We deploy, monitor, and continuously improve your product to guarantee long-term success.",
    },
  ];
  const images = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  ];
  const cards = [
    {
      icon: <FiRefreshCw size={26} />,
      text: "Streamline apps for cost savings and cloud efficiency.",
      btn: "Application Modernization",
    },
    {
      icon: <FiCpu size={26} />,
      text: "Leverage AI to gain insights, automate processes, and drive innovation.",
      btn: "Artificial Intelligence",
    },
    {
      icon: <FiBookOpen size={26} />,
      text: "Define clear project scopes, achieve clarity and develop a reliable execution strategy.",
      btn: "Discovery Workshop",
    },
    {
      icon: <FiPenTool size={26} />,
      text: "Meaningful digital experiences rooted in user needs.",
      btn: "UI/UX Design",
    },
  ];
  const videoSource =
    "https://cdn.prod.website-files.com/67f669048faf16f05119c4ce%2F6939e1af6f10f6a0859abbdd_Cheetah%20Running_mp4.mp4";

  return (
    <>
      <div
        className={`relative min-h-screen w-full font-body transition-all duration-500 ${
          openMenu ? "bg-white text-black" : "text-white"
        }`}
      >
        {!openMenu && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://cdn.prod.website-files.com/67f669048faf16f05119c4ce/6939962464e43d68899ac106_hero-bg-image.webp')",
              }}
            />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            >
              <source src={videoSource} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff67011a] to-[#ffffff1a]" />
          </>
        )}

       <nav
  className={`relative z-50 flex items-center justify-between px-12 py-6 transition-all duration-500 ${
    openMenu ? "bg-white text-black" : ""
  }`}
>
  {/* ================= LOGO ================= */}
  <div className="flex items-center gap-2 text-2xl font-semibold">
    <span className="text-orange-500 text-3xl font-bold">//</span>
    <span>
      <span className="text-orange-500">NexaSoft</span>
      <span className={`font-light ${openMenu ? "text-black" : "text-white"}`}>
        Solutions
      </span>
    </span>
  </div>

  {/* ================= CENTER MENU ================= */}
  <div
    className={`hidden md:flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-300 ${
      openMenu
        ? "bg-transparent"
        : "bg-white/90 text-black border border-gray-200 shadow-xl"
    }`}
  >
    {/* Service */}
    <button
      onClick={() => setOpenMenu(!openMenu)}
      className="group flex items-center gap-2 px-8 py-2 rounded-full border border-black/10 transition-all duration-300 hover:bg-[#FF9C5A] hover:text-white"
    >
      <span>Service</span>
      <FiChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180" />
    </button>

    {/* Magic Work */}
    <button className="px-8 py-2 rounded-full border border-black/10 hover:bg-[#FF9C5A] hover:text-white transition">
      Magic Work
    </button>

    {/* Company */}
    <button className="px-8 py-2 rounded-full border border-black/10 hover:bg-[#FF9C5A] hover:text-white transition">
      Company
    </button>
  </div>

  {/* ================= CTA ================= */}
  <button className="flex items-center gap-2 border border-gray-400 px-6 py-2.5 rounded-full hover:bg-[#FF6701] hover:text-white transition-all duration-300">
    <span>Get in Touch</span>

    <div className="w-7 h-7 flex items-center justify-center border border-gray-400 rounded-full">
      <FiArrowUpRight size={14} />
    </div>
  </button>
</nav>


        {!openMenu && (
          <main className="relative z-50 flex flex-col justify-center h-[70vh] px-12">
            <h1 className="font-heading text-5xl md:text-7xl font-medium max-w-4xl leading-tight">
              Replacing Manual Labor <br />
              with AI Employees.
            </h1>

            <button className="mt-8 flex items-center gap-3 bg-[#2A2A2A] backdrop-blur-sm border border-white/10 w-fit px-5 py-2 rounded-full hover:bg-[#FF6701] hover:text-white transition group">
              <span>Let's Talk Growth</span>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 transition">
                <GoArrowUpRight />
              </div>
            </button>
          </main>
        )}
        {!openMenu && (
          <footer className="absolute bottom-0 left-0 w-full z-50 overflow-hidden bg-gradient-to-t from-black/90 to-transparent py-8">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-6 text-xs tracking-[0.3em] uppercase text-white font-body">
                <span>• AWARDS</span>
                <span>• FEATURED CLIENTS</span>
              </div>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="marquee-content">
                <div className="flex items-center gap-16 min-w-full justify-around">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                    className="h-6 brightness-0 invert"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                    className="h-6 brightness-0 invert"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    className="h-6 brightness-0 invert"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg"
                    className="h-6 brightness-0 invert"
                  />
                </div>

                <div className="flex items-center gap-16 min-w-full justify-around">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                    className="h-6 brightness-0 invert"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                    className="h-6 brightness-0 invert"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    className="h-6 brightness-0 invert"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg"
                    className="h-6 brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </footer>
        )}
        {openMenu && (
          <div
            onClick={() => setOpenMenu(false)}
            className="w-full px-12 bg-white"
          >
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-3 bg-[#f4f5f7] rounded-3xl p-8 grid grid-cols-3 gap-0 overflow-hidden border border-gray-200">
                <div className="p-8 border-b border-r border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <MessageSquare size={20} className="text-gray-700" />
                  </div>
                  <h3 className="font-semibold mb-3">Advisory</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Market Research</li>
                    <li>Discovery Workshop</li>
                    <li>Digital Transformation</li>
                    <li>Product Strategy</li>
                    <li>UX Consulting</li>
                  </ul>
                </div>

                <div className="p-8 border-b border-r border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <Settings size={20} className="text-gray-700" />
                  </div>
                  <h3 className="font-semibold mb-3">Engineering</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>POC Development</li>
                    <li>Web & Mobile Apps</li>
                    <li>AI Development</li>
                    <li>Cloud Migration</li>
                  </ul>
                </div>

                <div className="p-8 border-b border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <Wrench size={20} className="text-gray-700" />
                  </div>
                  <h3 className="font-semibold mb-3">Optimization</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Maintenance</li>
                    <li>QA & Testing</li>
                    <li>Architecture Review</li>
                  </ul>
                </div>

                <div className="p-8 border-r border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <Bot size={20} className="text-gray-700" />
                  </div>
                  <h3 className="font-semibold mb-3">
                    Artificial Intelligence
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Machine Learning</li>
                    <li>AI POC & MVP</li>
                    <li>Generative AI</li>
                  </ul>
                </div>

                <div className="p-8 border-r border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <Palette size={20} className="text-gray-700" />
                  </div>
                  <h3 className="font-semibold mb-3">Design Services</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>UI/UX Design</li>
                    <li>SaaS Product Design</li>
                    <li>Branding</li>
                  </ul>
                </div>

                <div className="p-8">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <Rocket size={20} className="text-gray-700" />
                  </div>
                  <h3 className="font-semibold mb-3">Emerging Tech</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>AR/VR</li>
                    <li>IoT</li>
                    <li>Blockchain</li>
                  </ul>
                </div>

                <div className="p-8 border-t border-r border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <Star size={20} className="text-gray-700" />
                  </div>
                  <h3 className="font-semibold mb-3">Engagement Models</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Dedicated Team</li>
                    <li>ODC</li>
                  </ul>
                </div>

                <div className="p-8 border-t border-r border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <LinkIcon size={20} className="text-gray-700" />
                  </div>
                  <h3 className="font-semibold mb-3">Systems & Integrations</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>BI & Analytics</li>
                    <li>ERP & CRM</li>
                  </ul>
                </div>

                <div className="p-8 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                    <Building2 size={20} className="text-gray-700" />
                  </div>
                  <h3 className="font-semibold mb-3">Business Enablement</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>HR Platforms</li>
                    <li>Marketing & Branding</li>
                  </ul>
                </div>
              </div>

              <div className="col-span-1">
                <div className="rounded-3xl overflow-hidden shadow-xl h-full">
                  <img
                    src="https://cdn.prod.website-files.com/67f669048faf16f05119c4ce/6839afa37fd7f99b8b82fd25_default.svg"
                    alt="Service Visual"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!openMenu && (
        <section className="w-full bg-[#f3f3f3] px-12 py-20">
          <div className="grid grid-cols-3 gap-12 items-stretch">
            {/* ================= LEFT IMAGE ================= */}
            <div className="relative rounded-3xl overflow-hidden col-span-1 h-[675px]">
              <img
                src={images[activeCard]}
                alt="Dynamic"
                className="w-full h-full object-cover transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-10 left-10 text-white max-w-xs">
                <h2 className="text-3xl font-semibold leading-snug mb-6">
                  From where would you like to start your growth.
                </h2>

                <button className="group bg-[#FF6701] text-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300">
                  Let’s Talk Growth
                  <FiArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>
            </div>

            {/* ================= RIGHT GRID ================= */}
            <div className="col-span-2 grid grid-cols-2 gap-10 h-[600px]">
              {cards.map((card, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveCard(index)}
                  className="p-10 rounded-3xl bg-transparent transition-all duration-100 cursor-pointer hover:bg-[#2b2b2b] hover:text-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-full bg-[#FF6701] flex items-center justify-center mb-6 text-white">
                      {card.icon}
                    </div>

                    <p className="text-lg mb-4 leading-relaxed">{card.text}</p>

                    <div className="w-8 h-1 bg-[#FF6701] rounded-full mb-8"></div>
                  </div>

                  <button className="w-full py-3 rounded-full font-medium flex items-center justify-center gap-2 bg-[#2A2A2A] text-white hover:bg-white hover:text-black transition-all duration-300">
                    {card.btn}
                    <FiArrowUpRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {!openMenu && (
        <section className="w-full bg-[#f3f3f3] px-12 pb-24">
          <div className="bg-[#efefef] rounded-3xl p-16 border border-gray-300">
            {/* Top Text */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl leading-snug text-gray-800 max-w-5xl">
                With 20+ years of software development experience for
                technological enterprises, successful startups, and AI-empowered
                companies worldwide, our developers demonstrate exceptional
                efficiency and expertise.
              </h2>

              <p className="mt-6 text-gray-600">
                On average,{" "}
                <span className="text-[#FF6701] font-semibold">
                  NexaSoft clients benefit
                </span>{" "}
                by{" "}
                <span className="text-[#FF6701] font-semibold">$600,000+</span>{" "}
                from annual savings as a result of our collaboration.
              </p>
            </div>

            <hr className="border-gray-300 mb-12" />

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-12">
              <div>
                <h3 className="text-[#FF6701] text-5xl font-semibold">36</h3>
                <p className="text-gray-600 mt-2">month average engagement</p>
              </div>

              <div>
                <h3 className="text-[#FF6701] text-5xl font-semibold">94%</h3>
                <p className="text-gray-600 mt-2">in client acquisitions</p>
              </div>

              <div>
                <h3 className="text-[#FF6701] text-5xl font-semibold">20+</h3>
                <p className="text-gray-600 mt-2">years of experience</p>
              </div>

              <div>
                <h3 className="text-[#FF6701] text-5xl font-semibold">3K+</h3>
                <p className="text-gray-600 mt-2">world-class engineers</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {!openMenu && (
        <section className="relative w-full h-[550px] overflow-hidden">
          {/* Background Image */}
          <img
            src="https://cdn.prod.website-files.com/67f669048faf16f05119c4ce/67fe50b62e68b3cf64092e4f_stats-bg.svg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Gradient Overlay (Left Fade) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-16 max-w-6xl text-white">
            {/* Small Top Text */}
            <p className="text-sm text-gray-300 mb-6 max-w-2xl">
              Spanning 30+ verticals and 25+ technologies, our team has designed
              and implemented innovative solutions to suit even the most unique
              needs.
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-10">
              Wondering how well we know your industry? Curious which tech
              stacks we support?
            </h1>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <button className="group bg-[#FF6701] text-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300">
                Let’s Talk Growth
                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>

          {/* Bottom Glass Category Bar */}
          <div className="absolute bottom-0 left-0 w-full border-t border-white/20 bg-white/10 backdrop-blur-md">
            <div className="marquee-wrapper">
              <div className="marquee-content">
                {/* FIRST SET */}
                <div className="flex items-center gap-24 px-16 py-5 text-white text-sm whitespace-nowrap">
                  <span>Marketing Experts</span>
                  <span>User Experience Designers</span>
                  <span>Data Engineers</span>
                  <span>Software Developers</span>
                  <span>AI Engineers</span>
                </div>

                {/* DUPLICATE SET (important for seamless loop) */}
                <div className="flex items-center gap-24 px-16 py-5 text-white text-sm whitespace-nowrap">
                  <span>Marketing Experts</span>
                  <span>User Experience Designers</span>
                  <span>Data Engineers</span>
                  <span>Software Developers</span>
                  <span>AI Engineers</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {!openMenu && (
        <section className="w-full bg-white  py-20">
          <div className="relative overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/67f669048faf16f05119c4ce/683c069a034dacf2e79358cd_How%20We%20Work%20Image.svg"
              alt="How We Work"
              className="w-full h-[520px] object-cover"
            />

            {/* Blur Glass Overlay */}
            <div className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-xl px-10 py-6 rounded-2xl flex items-center gap-8">
              <h2 className="text-white text-4xl font-light">How We Work</h2>

              <button className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#FF6701] hover:text-white transition-all duration-300">
                Let’s Talk Growth
                <FiArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* ================= PROCESS GRID (Attached to Image) ================= */}
          <div className="grid grid-cols-4 border-t border-gray-200">
            {steps.map((step, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className={`p-12 border-r border-gray-200 transition-all duration-300 cursor-pointer
              ${active === index ? "bg-gray-100" : "bg-white"}
            `}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>

                {/* Show text only on hover */}
                <p
                  className={`text-gray-600 text-sm leading-relaxed transition-all duration-300
                ${active === index ? "opacity-100 mt-4" : "opacity-0 h-0 overflow-hidden"}
              `}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
      {!openMenu && <Contact />}
      {!openMenu && <Footer />}
    </>
  );
};

export default HeroPage;
