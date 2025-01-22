import "./App.css";
import Header from "./components/Header";
import PaymentButton from "./components/PaymentButton";
import BillSummary from "./components/BillSummary";
import DiscountSection from "./components/DiscountSection";
import Features from "./components/Features";
import PricingPlan from "./components/PricingPlan";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="root">
      <Header />
      <div className="content">
        <div className="inner-content">
          <Features />
          <PricingPlan />
        </div>
        <div className="inner-content">
          <DiscountSection />
          <BillSummary />
          <PaymentButton />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
