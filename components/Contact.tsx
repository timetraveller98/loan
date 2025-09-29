"use client";
import { useState } from "react";
export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(250000);
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [tenure, setTenure] = useState<number>(20);

  const monthlyInterest = interestRate / 100 / 12;
  const totalMonths = tenure * 12;
  const emi =
    (loanAmount * monthlyInterest * (1 + monthlyInterest) ** totalMonths) /
    ((1 + monthlyInterest) ** totalMonths - 1);
  const totalPayable = emi * totalMonths;
  const totalInterest = totalPayable - loanAmount;

  return (
    <div className="min-h-screen bg-gray-700 p-4 sm:p-6 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:p-12 items-start">
        <div>
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-xl sm:text-2xl text-yellow-500 font-bold text-center">
              Loan Calculator
            </h2>
          </div>

          <div className="bg-white border-[25px] border-pink-700 shadow-2xl p-6 sm:p-8 text-black ">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Loan Amount
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-pink-600"
                  />{" "}
                </label>
                <p className="mt-1 font-semibold text-lg">
                  ₹{loanAmount.toLocaleString()}
                </p>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Interest Rate (%)
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-pink-600"
                  />{" "}
                </label>
                <p className="mt-1 font-semibold text-lg">{interestRate}%</p>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Tenure (Years)
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full accent-pink-600"
                  />{" "}
                </label>
                <p className="mt-2 font-semibold text-lg">{tenure} Years</p>
              </div>
              <div className="bg-white text-black p-6 rounded-xl shadow-md space-y-4">
                <p className="flex justify-between text-sm sm:text-base">
                  <span>Monthly EMI:</span>
                  <span className="font-bold text-pink-600">
                    ₹ {emi.toFixed(2)}
                  </span>
                </p>
                <p className="flex justify-between text-sm sm:text-base">
                  <span>Total Interest:</span>
                  <span className="font-bold text-pink-600">
                    ₹ {totalInterest.toFixed(2)}
                  </span>
                </p>
                <p className="flex justify-between text-sm sm:text-base">
                  <span>Total Payment:</span>
                  <span className="font-bold text-pink-600">
                    ₹ {totalPayable.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-0 sm:px-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-center text-yellow-500 mb-1">
              Get in Touch with Expert
            </h3>
            <p className="text-center font-semibold text-white mb-1 py-4 text-[18px]">
              Apply for Loan
            </p>
          </div>
          <div className="bg-white border-[25px] border-orange-500 shadow-2xl p-6 sm:p-8 ">
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="p-3 rounded-xl w-full text-black border border-gray-400 focus:ring-2 focus:ring-orange-300"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="p-3 rounded-xl w-full text-black border border-gray-400 focus:ring-2 focus:ring-orange-300"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone no"
                  className="p-3 rounded-xl w-full text-black border border-gray-400 focus:ring-2 focus:ring-orange-300"
                />
                <input
                  type="text"
                  placeholder="State/City"
                  className="p-3 rounded-xl w-full text-black border border-gray-400 focus:ring-2 focus:ring-orange-300"
                />
              </div>

              <select className="p-3 rounded-xl w-full text-black border border-gray-400 focus:ring-2 focus:ring-orange-300">
                <option value="">Select Loan Type</option>
                <option value="home">Home Loan</option>
                <option value="property">Property Loan</option>
                <option value="business">Business Loan</option>
                <option value="private">Private Loan</option>
                <option value="vehicle">Vehicle Loan</option>
                <option value="project">Project Loan</option>
                <option value="travel">Travel Loan</option>
                <option value="personal">Personal Loan</option>
              </select>

              <textarea
                placeholder="Write your message..."
                className="p-3 rounded-xl w-full text-black border border-gray-400 focus:ring-2 focus:ring-orange-300"
                rows={4}
              />

              <button
                type="button"
                className="w-full bg-orange-500 text-white hover:bg-orange-600 py-3 px-4 rounded-xl font-semibold shadow-md transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
