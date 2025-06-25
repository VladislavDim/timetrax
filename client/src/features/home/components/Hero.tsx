import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-orange-100 via-orange-50 to-white">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-orange-900 leading-tight text-center mb-6 max-w-3xl space-y-2">
        <div className="animate-fade-in-down">All services.</div>
        <div className="animate-fade-in-down delay-100">One place.</div>
        <div className="text-orange-500 animate-fade-in-down delay-200">Your time, your rules.</div>
      </h1>
      <SearchBar size="lg" />
    </section>
  );
}
