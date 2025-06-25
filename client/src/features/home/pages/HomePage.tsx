import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-[#fff7e6] via-[#ffd180] to-[#ffb74d]">
      <Hero />
      <CallToAction />
    </div>
  );
}