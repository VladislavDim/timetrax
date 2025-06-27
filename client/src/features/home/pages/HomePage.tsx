import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import RecommendedServices from "../components/RecommendedServices";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-[#fff7e6] via-[#ffd180] to-[#ffb74d]">
      <Hero />
      <RecommendedServices />
      <CallToAction />
    </div>
  );
}