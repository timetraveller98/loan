"use client";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import type React from "react";

const Banner: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 text-white p-6 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg relative overflow-hidden">
      <div className="md:w-2/3 space-y-6 z-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Secure Your Financial Future with Expert Guidance
        </h2>
        <p className="text-gray-300 max-w-md mx-auto md:mx-0">
          Achieve your financial goals with personalized advice from experienced
          professionals
        </p>
        <div>
          <h3 className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold inline-block mb-4">
            Our Services:
          </h3>
          <ul className="space-y-3 text-gray-200 text-sm md:text-base">
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
              <CheckCircle className="text-yellow-400 w-5 h-5" /> Personal Loan
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-yellow-400 w-5 h-5" /> Vehicle Loan
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-lg mt-4 transition duration-300"
        >
          CALL US →
        </button>
      </div>
      <div className="md:w-1/2 flex flex-col items-center relative mt-10 md:mt-0">
        <div className="relative rounded-full border-8 border-white shadow-xl overflow-hidden w-60 h-60 md:w-90 md:h-90 flex items-center justify-center bg-gray-200">
          <Image
            src="/loan.jpg"
            alt="Loan Meeting"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="bg-yellow-400 text-gray-900 font-bold px-6 py-4 rounded-xl shadow-md mt-6 text-center w-full max-w-xs">
          <p className="italic text-lg">CIBIL</p>
          <p className="text-2xl">ISSUE NO PROBLEM</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
