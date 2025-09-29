"use client";
import Image from "next/image";

const images = [
  "/bank/axis.png",
  "/bank/capital.png",
  "/bank/cred.png",
  "/bank/fairgo.png",
  "/bank/getfinanace.png",
  "/bank/kotak.png",
  "/bank/lt.png",
  "/bank/samaan.png",
  "/bank/sand.png",
  "/bank/suryoday.png",
  "/bank/unicredit.png",
  "/bank/vysya.png",
  "/bank/icci.png",
  "/bank/induslnd.png",
];

const Bank = () => {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {images.map((src) => (
            <div
              key={src}
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-32 h-16 md:w-40 md:h-20">
                <Image
                  src={src}
                  alt={`bank-${src}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bank;
