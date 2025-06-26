export default function CallToAction() {
  return (
    <section className="bg-transparent text-[#4e342e] py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to discover the perfect service for you?
        </h2>
        <div className="flex justify-center gap-4">
          <a
            href="/register"
            className="px-8 py-3 rounded-full text-white bg-orange-500 hover:scale-105 transition-transform shadow-md font-semibold text-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}