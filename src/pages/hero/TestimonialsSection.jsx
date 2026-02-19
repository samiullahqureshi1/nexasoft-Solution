import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Social Network",
    role: "CEO",
    text: "Timely and efficient. The team delivered exactly what we needed and exceeded expectations. Excellent to work with.",
  },
  {
    name: "Ecommerce Brand",
    role: "Founder",
    text: "Professional service and great communication. Our revenue improved significantly after launch.",
  },
  {
    name: "Tech Startup",
    role: "CTO",
    text: "Highly skilled developers. Clean code, scalable architecture and smooth delivery.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-[#F1F3F5] py-28 border-b border-[#D9DADB] overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 px-6">

        {/* LEFT SIDE */}
        <div>
          <p className="text-xs tracking-[4px] text-gray-500 font-body mb-4 uppercase">
            Testimonials
          </p>

          <h2 className="font-heading text-4xl mb-6">
            Real Feedback on Our <br />
            Digital Marketing Services
          </h2>

          <p className="text-gray-600 font-body mb-8">
            Don’t take our word for it. Here’s what brands say after partnering with our digital team.
          </p>

          <div className="border-b border-black/10 mb-8"></div>

          <div className="flex gap-12">
            <div>
              <h3 className="text-3xl font-heading">12k</h3>
              <p className="text-red-600 text-sm font-body mt-2">
                Happy Users Around World
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-heading">17k</h3>
              <p className="text-red-600 text-sm font-body mt-2">
                Projects Already Done
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Vertical Marquee) */}
        <div className="relative h-[500px] overflow-hidden">

          <div className="flex flex-col animate-verticalMarquee">

            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl mb-8 shadow-sm"
              >
                {/* Stars */}
                <div className="flex text-red-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-gray-600 font-body mb-6 leading-relaxed">
                  {item.text}
                </p>

                <div>
                  <h4 className="font-heading text-lg">
                    {item.name}
                  </h4>
                  <p className="text-red-500 text-sm font-body">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default TestimonialsSection;
