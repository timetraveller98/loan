"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type React from "react";
import CountUp from "react-countup";

const services = [
  { name: "Property Loan", id: "property-loan" },
  { name: "Business Loan", id: "business-loan" },
  { name: "Private Loan", id: "private-loan" },
  { name: "Vehicle Loan", id: "vehicle-loan" },
  { name: "Travel Loan", id: "travel-loan" },
  { name: "Personal Loan", id: "personal-loan" },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-16 md:py-20"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <div className="px-5 py-3 bg-gradient-to-b from-gray-100 to-gray-200 rounded-full shadow-md border border-gray-300 text-gray-800 font-medium text-sm md:text-base hover:scale-105 transition-transform duration-300">
                {service.name}
              </div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 bg-black text-white rounded-2xl shadow-xl py-10 px-6 md:px-12 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center border-b md:border-b-0 md:border-r border-gray-600 pb-6 md:pb-0"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
              <CountUp start={2000} end={2250} duration={3} suffix="+" />
            </h3>
            <p className="mt-2 text-sm md:text-base text-yellow-400 font-medium">
              Happy Customers
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center border-b md:border-b-0 md:border-r border-gray-600 py-6 md:py-0"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
              <CountUp start={1500} end={1850} duration={3} suffix="+" />
            </h3>
            <p className="mt-2 text-sm md:text-base text-yellow-400 font-medium">
              Sanctioned Cases
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center pt-6 md:pt-0"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
              <CountUp start={10} end={22} duration={3} suffix="+" />
            </h3>
            <p className="mt-2 text-sm md:text-base text-yellow-400 font-medium">
              Associates Banks/NBFC
            </p>
          </motion.div>
        </motion.div>
        <p className="text-gray-800 font-bold text-[20px]">
          <span className="text-red-700">Trusted</span> Associates of NBFC /
          BANKS
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
