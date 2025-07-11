import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Brand & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text">
              <span className="text-white">Everything Talent</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            Enhancing Hiring with AI-powered assessment and tracking for
            accurate recruitment
          </p>
          <div className="flex space-x-4 mt-6">
            <Twitter size={20} />
            <Linkedin size={20} />
            <Youtube size={20} />
            <Facebook size={20} />
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3">RESOURCES</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#">Blogs</Link>
            </li>
            <li>
              <Link href="#">Success Stories</Link>
            </li>
            <li>
              <Link href="#">Case Studies</Link>
            </li>
            <li>
              <Link href="#">Whitepapers</Link>
            </li>
            <li>
              <Link href="#">FAQs</Link>
            </li>
            <li>
              <Link href="#">Hiring Guides</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h4 className="font-semibold mb-3">GET STARTED</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Hiring Solutions</Link>
            </li>
            <li>
              <Link href="#">Funded Startups</Link>
            </li>
            <li>
              <Link href="#">Free Trial</Link>
            </li>
            <li>
              <Link href="#">Contact Support</Link>
            </li>
            <li>
              <Link href="#">Request Demo</Link>
            </li>
            <li>
              <Link href="#">Trust</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-3">LEGAL</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Cookie Policy</Link>
            </li>
            <li>
              <Link href="#">CCPA Compliance</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
