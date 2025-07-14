"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/img1.png",
    title: "Streamline Hiring with AI-Powered Applicant Tracking",
    description:
      "Enhance recruitment efficiency, spot top talent faster, and make smarter hiring decisions with AI-driven tools.",
    subText: "Empowering HR teams with intelligent automation.",
    buttonText: "Start for Free Today →",
  },
  {
    image: "/img3.png",
    title: "Revolutionize Screening with AI Matching",
    description:
      "Let machine learning shortlist the best talent in seconds. Faster, smarter, more effective hiring starts here.",
    subText: "Make better hires with less effort.",
    buttonText: "Explore Features →",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, description, buttonText, subText } = slides[currentIndex];

  return (
    <section className="relative px-4 md:px-6 pt-[80px] pb-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500">
          <div className="max-w-screen-xl mx-auto">
            <div
              className="relative w-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-gray-900 dark:to-gray-800
            rounded-[calc(1rem-2px)] shadow-md flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 transition-colors duration-500"
            >
              <div className="max-w-xl text-center md:text-left space-y-4 transition-opacity duration-1000 font-sans">
                <h1
                  className={`text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight`}
                  style={{
                    fontFamily: currentIndex === 0 ? "Poppins" : "Montserrat",
                  }}
                >
                  {title}
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
                  {description}
                </p>

                <p className="italic text-sm text-gray-500 dark:text-gray-400">
                  {subText}
                </p>

                <button className="mt-2 px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition">
                  {buttonText}
                </button>
              </div>

              <div className="w-full md:w-[400px] h-[400px] relative mt-10 md:mt-0 transition-opacity duration-1000">
                {slides.map((slide, index) => (
                  <Image
                    key={index}
                    src={slide.image}
                    alt={`Slide ${index}`}
                    fill
                    className={`object-contain absolute transition-opacity duration-1000 rounded-lg ${
                      currentIndex === index ? "opacity-100 z-10" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-black dark:bg-white scale-110"
                        : "bg-gray-400 dark:bg-gray-600"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
