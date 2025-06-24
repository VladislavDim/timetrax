import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-[#fff7e6] via-[#ffd180] to-[#ffb74d] min-h-screen">
      <div className="flex flex-col items-center justify-center text-center p-6 min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-[#4e342e]">Welcome to TimetraX</h1>
        <p className="text-[#5d4037] max-w-md mb-8">
          Book appointments, manage your schedule, and connect with trusted professionals – all in one place.
        </p>

        <div className="flex gap-4">
          <Link to="/register">
            <button className="px-6 py-2 bg-[#f57c00] text-white rounded-md hover:bg-[#ef6c00] transition">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-2 border border-[#a1887f] text-[#4e342e] rounded-md hover:bg-[#ffe0b2] transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}