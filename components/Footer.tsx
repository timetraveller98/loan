import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center text-gray-800"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 space-y-6 lg:space-y-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Option Finance Logo"
              width={170}
              height={80}
              className="object-contain"
            />
          </div>

          <div>
            <p className="text-sm italic text-gray-800">A Venture of :</p>
            <h2 className="text-lg font-semibold text-gray-800">
              Option Finance Pvt. Ltd.
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-gray-800 max-w-md">
            We facilitate complete solutions for all types of finance like home
            loan, personal loan, education loan, project loan, vehicle loan,
            business loan and other financial needs. We are connected with all
            leading banks, NBFCs and financial institutions to assist our valued
            customers.
          </p>
        </div>

        <div className="lg:w-1/2 flex flex-col sm:flex-row lg:gap-16 gap-10 justify-between">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2 font-semibold text-sm text-gray-800">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/loan-calculator">Loan Calculator</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800">Services</h3>
            <ul className="space-y-2 font-semibold text-sm text-gray-800">
              <li>
                <Link href="/services/education-loan">Education Loan</Link>
              </li>
              <li>
                <Link href="/services/home-loan">Home Loan</Link>
              </li>
              <li>
                <Link href="/services/business-loan">Business Loan</Link>
              </li>
              <li>
                <Link href="/services/personal-loan">Personal Loan</Link>
              </li>
              <li>
                <Link href="/services/project-loan">Project Loan</Link>
              </li>
              <li>
                <Link href="/services/vehicle-loan">Vehicle Loan</Link>
              </li>
              <li>
                <Link href="/services/travel-loan">Travel Loan</Link>
              </li>
              <li>
                <Link href="/services/loan-against-property">
                  Loan Against Property
                </Link>
              </li>
              <li>
                <Link href="/services/private-funding-loan">
                  Private Funding Loan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-10 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 text-sm text-gray-800">
        <div className="text-center lg:text-left flex-1">
          <p className="font-semibold text-gray-800">
            For more details call us:
          </p>
          <p className="text-2xl font-bold text-gray-800 mt-2">
            +91 9876543211
          </p>
        </div>

        <div className="text-center lg:text-right space-y-2 flex-1 max-w-xl">
          <p>
            <span className="font-semibold text-gray-800">
              Corporate Address:
            </span>{" "}
            87, xxxx kjhfkdj, kdjkfjl, Kolkata, West Bengal
          </p>
          <p>
            For more details Email us:{" "}
            <Link
              href="mailto:xxxyyzzz@gmail.com"
              className="text-indigo-600 font-medium"
            >
              xxxyyzzz@gmail.com
            </Link>
          </p>
          <p className="text-gray-800">REGD. OFFICE (CIN: U65990WB19XXXXX)</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
