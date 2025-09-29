"use client";
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
      <div className="flex items-center justify-center h-screen bg-gray-50 bg-[url('/bg.png')] bg-cover bg-center">
        <h2 className="text-2xl font-bold text-red-500">
          Loan type not found ❌
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[url('/bg.png')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto p-6 lg:p-10 space-y-8">
        {/* Header */}
        <Card className="shadow-lg rounded-2xl border border-gray-200 bg-gradient-to-r from-indigo-50/90 to-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-4xl font-extrabold text-indigo-700">
              {loan.type}
            </CardTitle>
            <p className="text-gray-600 mt-3 leading-relaxed text-lg">
              {loan.description}
            </p>
            {loan.provider && (
              <span className="inline-block mt-4 px-4 py-1 text-sm font-semibold rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                Provider: {loan.provider}
              </span>
            )}
          </CardHeader>
        </Card>

        {/* Loan Info Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-md hover:shadow-lg transition bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-indigo-700">
                Loan Limits
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-1">
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

          <Card className="rounded-2xl shadow-md hover:shadow-lg transition bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-indigo-700">
                Duration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p>{loan.duration}</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-lg transition bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-indigo-700">
                Type
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p>{loan.type}</p>
            </CardContent>
          </Card>
        </div>

        {/* Documents Section */}
        <Card className="rounded-2xl shadow-md hover:shadow-lg transition bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-indigo-700">
              Required Documents
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(loan.documents).map(([category, docs]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold capitalize text-gray-800 mb-2">
                  {category.replace(/_/g, " ")}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {docs.map((doc) => (
                    <li key={doc} className="hover:text-indigo-600 transition">
                      {doc}
                    </li>
                  ))}
                </ul>
                <Separator className="my-4" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoanDetail;
