import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-orange-50 border-t border-orange-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & description */}
        <div>
          <Link to="/" className="text-2xl font-bold text-black">
            timetra<span className="text-[#ff6a00]">X</span>
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Smart appointment system for beauty, wellness, and more.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/explore" className="hover:text-orange-500">Explore Services</Link></li>
            <li><Link to="/business/register" className="hover:text-orange-500">Add Your Business</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/terms" className="hover:text-orange-500">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link></li>
            <li><Link to="/faq" className="hover:text-orange-500">FAQ</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-2">Follow us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-orange-500"><Facebook size={20} /></a>
            <a href="#" className="hover:text-orange-500"><Instagram size={20} /></a>
            <a href="#" className="hover:text-orange-500"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-orange-500"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-100 text-sm text-center py-4 bg-orange-100">
        © {new Date().getFullYear()} TimetraX. All rights reserved.
      </div>
    </footer>
  );
}
