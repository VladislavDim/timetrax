export default function CallToAction() {
  return (
    <section className="bg-[#ffe0b2] text-[#4e342e] py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to take control of your time?
        </h2>
        <p className="mb-6 text-md md:text-lg">
          Join thousands of professionals and clients who simplify scheduling with TimetraX.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/register"
            className="px-6 py-3 rounded-md text-white bg-[#f57c00] hover:bg-[#ef6c00] transition font-semibold"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="px-6 py-3 rounded-md text-[#4e342e] border border-[#a1887f] hover:bg-[#ffcc80] transition font-semibold"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
}