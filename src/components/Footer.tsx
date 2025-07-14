import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 px-6 md:px-20 relative overflow-hidden">
      <div className="grid md:grid-cols-4 gap-10 relative z-10">
        {/* Brand & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/logo2.png" alt="Logo" width={40} height={40} />
            <div className="text-2xl font-bold">Everything Talent</div>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            Enhancing Hiring with AI-powered assessment and tracking for
            accurate recruitment.
          </p>
          <div className="flex space-x-4 mt-6">
            <Link href="#">
              <Twitter size={20} />
            </Link>
            <Link href="#">
              <Linkedin size={20} />
            </Link>
            <Link href="#">
              <Youtube size={20} />
            </Link>
            <Link href="#">
              <Facebook size={20} />
            </Link>
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

      {/* Skyline Image */}
      <div className="w-full mt-12 relative z-10">
        <Image
          src="/footer.png"
          alt="Skyline"
          width={1600}
          height={300}
          className="w-full object-cover"
        />
      </div>

      <p className="text-gray-500 text-xs mt-4 text-center relative z-10">
        © 2025 Everything Talent Labs, LLC. All Rights Reserved.
      </p>
    </footer>
  );
}
