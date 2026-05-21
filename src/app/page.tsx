import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustSection from "@/components/landing/TrustSection";
import HowItWorks from "@/components/landing/HowItWorks";
import ProblemVsSolution from "@/components/landing/ProblemVsSolution";
import SmartFiltering from "@/components/landing/SmartFiltering";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BusinessBenefits from "@/components/landing/BusinessBenefits";
import DemoVideoSection from "@/components/landing/DemoVideoSection";
import Testimonials from "@/components/landing/Testimonials";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#07070e] text-white overflow-x-hidden">
      {/* Sticky navigation */}
      <Navbar />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust logos marquee */}
      <TrustSection />

      {/* 3. How it works */}
      <HowItWorks />

      {/* 4. Problem vs Solution */}
      <ProblemVsSolution />

      {/* 5. Smart Review Filtering — Most Important */}
      <SmartFiltering />

      {/* 6. Product Features */}
      <FeaturesSection />

      {/* 7. Business Benefits + Animated Counters */}
      <BusinessBenefits />

      {/* 8. Demo Video */}
      <DemoVideoSection />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Pricing */}
      <PricingSection />

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. Final CTA */}
      <FinalCTA />

      {/* 13. Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </div>
  );
}
