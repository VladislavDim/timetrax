import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import LatestReviews from "../components/LatestReviews";
import RecommendedServices from "../components/RecommendedServices";

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <RecommendedServices />
      <LatestReviews />
      <CallToAction />
    </div>
  );
}