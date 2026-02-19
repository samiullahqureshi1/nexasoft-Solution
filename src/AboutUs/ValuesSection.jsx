import React from "react";

const values = [
  {
    title: "Vision",
    number: "01",
    desc: "To empower every business to achieve more.",
  },
  {
    title: "Versatility",
    number: "02",
    desc: "To offer a wide range of software products and services for different industries.",
  },
  {
    title: "Value",
    number: "03",
    desc: "To deliver fast, reliable and secure solutions.",
  },
  {
    title: "Vitality",
    number: "04",
    desc: "To foster a culture of collaboration, AI-empowered learning, and growth.",
  },
  {
    title: "Velocity",
    number: "05",
    desc: "To use AI-accelerated agile methodologies for rapid development.",
  },
  {
    title: "Veracity",
    number: "06",
    desc: "To use AI-enhanced security and transparency in every solution.",
  },
  {
    title: "Virtue",
    number: "07",
    desc: "To reduce our environmental footprint by using green technologies.",
  },
];

const ValuesSection = () => {
  return (
    <section className="w-full bg-[#F1F3F5] py-32 border-t border-[#D9DADB]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[4px] text-gray-600 uppercase mb-4">
            Our 7 Values.
          </p>

          <h2 className="font-heading text-4xl">
            The <span className="text-red-600">7V's</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {values.slice(0, 4).map((item, index) => (
            <ValueCard key={index} item={item} />
          ))}

        </div>

        {/* SECOND ROW */}
        <div className="grid md:grid-cols-3 gap-10 mt-16 justify-center">

          {values.slice(4).map((item, index) => (
            <ValueCard key={index} item={item} />
          ))}

        </div>

      </div>
    </section>
  );
};

const ValueCard = ({ item }) => {
  return (
    <div className="border border-black/10 rounded-t-[200px] rounded-b-[40px] p-10 text-center bg-white/40 backdrop-blur-sm hover:border-red-300 transition">

      <h3 className="font-heading text-lg mb-6">
        {item.title}
      </h3>

      <div className="text-6xl font-heading stroke-text-gray text-transparent mb-6">
        {item.number}
      </div>

      <p className="text-gray-600 font-body text-sm leading-relaxed">
        {item.desc}
      </p>

    </div>
  );
};

export default ValuesSection;
