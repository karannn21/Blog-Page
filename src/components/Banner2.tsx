// components/HeroBanner.tsx

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Banner2() {
  return (
    <section className="bg-[#0d0d1f] text-white rounded-3xl px-6 py-10 md:px-12 md:py-16 shadow-xl">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-5 w-full">
          <h1 className="text-3xl md:text-4xl font-bold">
            Reach for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400">
              Stars in Talent
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-xl">
            Venture into a universe of potential with AI-powered insights,
            guiding you to the software engineering candidates who will propel
            your team to new heights.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
            <Button
              variant="default"
              className="bg-white text-black hover:bg-gray-100 px-6"
            >
              Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10 px-6"
            >
              Start For Free Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
