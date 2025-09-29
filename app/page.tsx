import Bank from "@/components/Bank";
import Banner from "@/components/Banner";
import LoanCalculator from "@/components/Contact";
import FinancialBanner from "@/components/FinancialBanner";
import ServicesSection from "@/components/ServicesSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <FinancialBanner />
      <ServicesSection />
      <Bank />
      <LoanCalculator />
    </div>
  );
};

export default Home;
