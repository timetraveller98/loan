"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import type React from "react";

const Banner: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 text-white p-6 md:p-12 flex flex-col lg:flex-row items-center justify-between shadow-lg relative overflow-hidden">
      {/* Left Content */}
      <div className="w-full lg:w-2/3 space-y-6 z-10 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Secure Your Financial Future with Expert Guidance
        </h2>
        <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
          Achieve your financial goals with personalized advice from experienced
          professionals
        </p>

        {/* Services */}
        <div>
          <h3 className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold inline-block mb-4 text-sm sm:text-base">
            Our Services:
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* List */}
            <ul className="space-y-3 text-gray-200 text-sm md:text-base flex-1">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-yellow-400 w-5 h-5" /> Home / LAP
                Loan
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-yellow-400 w-5 h-5" /> Education /
                Travel Loan
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-yellow-400 w-5 h-5" /> Business /
                Project Loan
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-yellow-400 w-5 h-5" /> Personal
                Loan
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-yellow-400 w-5 h-5" /> Vehicle Loan
              </li>
            </ul>

            {/* Small Loan Image */}
            <div className="flex justify-center sm:justify-end">
              <Image
                src="/loan.png"
                alt="Loan Meeting"
                width={220}
                height={220}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        {/* <button
          type="button"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-lg mt-6 transition duration-300 w-full sm:w-auto"
        >
          CALL US →
        </button> */}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center relative mt-10 lg:mt-0">
        <div className="relative rounded-full border-8 border-white shadow-xl overflow-hidden w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80 flex items-center justify-center bg-gray-200">
          <Image
            src="/loan.jpg"
            alt="Loan Meeting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="mt-4 sm:mt-6">
          <Image
            src="/cibil.png"
            alt="CIBIL"
            width={120}
            height={120}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
