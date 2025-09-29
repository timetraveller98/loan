import Bank from "@/components/Bank";
import Banner from "@/components/Banner";
import LoanCalculator from "@/components/Contact";
import FinancialBanner from "@/components/FinancialBanner";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <FinancialBanner />
      <ServicesSection />
      <Bank />
      <LoanCalculator />
      <Footer />
    </div>
  );
};

export default Home;
