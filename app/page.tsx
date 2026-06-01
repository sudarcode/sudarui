import { getTotalComponentCount } from "@/lib/data/components";
import HeroSection from "./components/landing/HeroSection";
import CodeShowcaseSection from "./components/landing/CodeShowcaseSection";
import HowItWorksSection from "./components/landing/HowItWorksSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import CategoriesSection from "./components/landing/CategoriesSection";
import TechStackSection from "./components/landing/TechStackSection";
import FaqSection from "./components/landing/FaqSection";

export default function Home() {
  const totalComponents = getTotalComponentCount();

  return (
    <div className="relative" suppressHydrationWarning>
      <HeroSection totalComponents={totalComponents} />
      <CodeShowcaseSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CategoriesSection />
      <TechStackSection />
      <FaqSection />
    </div>
  );
}
