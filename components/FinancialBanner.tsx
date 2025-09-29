"use client";
import type React from "react";

const FinancialBanner: React.FC = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-lg md:text-xl font-semibold text-red-500  tracking-wide uppercase drop-shadow-md">
          The last Stop for your
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-3 drop-shadow-lg">
          <span className="bg-gradient-to-r text-black bg-clip-text ">
            Financial need
          </span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-center text-black drop-shadow-md max-w-3xl mx-auto leading-relaxed">
          We offer loan services from Banks, NBFC and other financers including
          consultancy, documentation, and co-ordination for legal procedures as
          per RBI guidelines.
        </p>
        <div className=" mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Faster Loan Approvals",
              desc: "We process customer files with all required documents at a single go. This saves your timing of preliminary approvals and bank visits/load.",
            },
            {
              title: "We Value & Save Your Time",
              desc: "Frequent visits to Banks and Financial Institutions / NBFC for Documentation and Rate Negotiation is no more a Pain!",
            },
            {
              title: "We Can Negotiate",
              desc: "We negotiate & bargain across a wide range of Banks/NBFCs on behalf of customers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-black/70 rounded-2xl shadow-lg p-6 md:p-8 text-center md:text-left hover:scale-105 transition-transform duration-300 text-white"
            >
              <h3 className="text-center font-bold text-lg md:text-xl mb-3 text-yellow-300">
                {item.title}
              </h3>
              <p className="text-sm text-center md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialBanner;
