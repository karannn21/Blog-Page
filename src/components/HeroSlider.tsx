"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/img1.png", "/img3.png"];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full px-4 md:px-12 py-10 
      bg-gradient-to-r from-purple-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 
      rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between transition-colors duration-500"
    >
      <div className="max-w-xl text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight">
          Streamline Hiring with <br />
          AI-Powered Applicant Tracking
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
          Enhance recruitment efficiency, spot top talent faster, and make
          smarter hiring decisions with AI-driven applicant tracking solutions.
        </p>
        <button className="mt-4 px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition">
          Start for Free Today →
        </button>
      </div>

      <div className="w-full md:w-[400px] h-[400px] relative mt-10 md:mt-0">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index}`}
            fill
            className={`object-contain absolute transition-opacity duration-1000 rounded-lg ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-black dark:bg-white scale-110"
                  : "bg-gray-400 dark:bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
