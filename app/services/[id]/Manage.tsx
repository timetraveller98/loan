"use client";
import { motion } from "framer-motion";
import { CheckCircle, Clock, FileText, Landmark, Wallet } from "lucide-react";
import type React from "react";
import loansData from "@/app/loan.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Loan {
  type: string;
  description: string;
  provider?: string;
  loan_limits: {
    maximum: string;
    minimum: string;
  };
  duration: string;
  documents: Record<string, string[]>;
}
interface DetailsProps {
  details: string;
}

const LoanDetail: React.FC<DetailsProps> = ({ details }) => {
  const loan: Loan | undefined = (loansData as unknown as Loan[]).find(
    (item) => item.type.toLowerCase() === details.toLowerCase(),
  );

  if (!loan) {
    return (
      <div className="flex items-center justify-center h-screen bg-[url('/bg.png')] bg-cover bg-center">
        <h2 className="text-2xl font-bold text-red-500 bg-white/70 px-6 py-3 rounded-xl shadow-md">
          Loan type not found ❌
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-[url('/bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto p-6 lg:p-12 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h2
            className="text-xl text-center sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 
             font-bold text-gray-800  drop-shadow-md 
              py-4 rounded-3xl  bg-white/90 backdrop-blur"
          >
            {loan.type}
          </h2>

          <p className="text-gray-700 rounded-2xl bg-white/90 backdrop-blur text-lg p-8 mx-auto text-justify leading-relaxed">
            {loan.description}
          </p>
          {loan.provider && (
            <span className="inline-block px-6 py-2 text-sm font-semibold rounded-full bg-gray-200 text-gray-700 border border-gray-300 shadow-sm">
              Provided by: {loan.provider}
            </span>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <Card className="rounded-2xl shadow-md hover:shadow-xl transition bg-white/90 backdrop-blur">
            <CardHeader className="flex items-center space-x-2">
              <Wallet className="w-5 h-5 text-gray-600" />
              <CardTitle className="text-lg font-semibold text-gray-800">
                Loan Limits
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-2">
              <p>
                <span className="font-semibold">Minimum:</span>{" "}
                {loan.loan_limits.minimum}
              </p>
              <p>
                <span className="font-semibold">Maximum:</span>{" "}
                {loan.loan_limits.maximum}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-xl transition bg-white/90 backdrop-blur">
            <CardHeader className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <CardTitle className="text-lg font-semibold text-gray-800">
                Duration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p>{loan.duration}</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-xl transition bg-white/90 backdrop-blur">
            <CardHeader className="flex items-center space-x-2">
              <Landmark className="w-5 h-5 text-gray-600" />
              <CardTitle className="text-lg font-semibold text-gray-800">
                Loan Type
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p>{loan.type}</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <Card className="rounded-2xl shadow-lg hover:shadow-xl transition bg-white/95 backdrop-blur">
            <CardHeader className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-gray-700" />
              <CardTitle className="text-2xl font-bold text-gray-800">
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(loan.documents).map(([category, docs]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold capitalize text-gray-700 mb-2">
                    {category.replace(/_/g, " ")}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {docs.map((doc) => (
                      <li
                        key={doc}
                        className="flex items-center space-x-2 hover:text-gray-800 transition"
                      >
                        <CheckCircle className="w-4 h-4 text-yellow-500" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <Separator className="my-4" />
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default LoanDetail;
