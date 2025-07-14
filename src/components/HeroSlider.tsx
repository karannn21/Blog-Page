"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

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
    <section className="relative px-4 md:px-6 pt-[80px] pb-12 bg-gradient-to-br from-pink-100 via-white to-blue-100 dark:from-[#0c0c0c] dark:via-black dark:to-[#0c0c0c]">
      <div className="max-w-screen-xl mx-auto">
        <div className="p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500">
          <div className="relative rounded-[calc(1rem-2px)] shadow-md flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 bg-gradient-to-br from-pink-100 via-white to-blue-100 dark:from-[#0c0c0c] dark:via-black dark:to-[#0c0c0c]">
            <div className="max-w-xl text-center md:text-left space-y-4">
              <h1
                className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight"
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

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px]"
              >
                {/* Outer gradient border */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-500 via-green-400 via-blue-500 to-purple-500 transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-full z-0"></span>

                {/* Inner solid mask */}
                <span className="relative z-10 inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-2">
                  {buttonText}
                </span>
              </motion.button>
            </div>

            <div className="w-full md:w-[400px] h-[400px] relative mt-10 md:mt-0">
              {slides.map((slide, index) => (
                <Image
                  key={index}
                  src={slide.image}
                  alt={`Slide ${index}`}
                  fill
                  className={twMerge(
                    clsx(
                      "object-contain absolute rounded-lg transition-opacity duration-1000",
                      currentIndex === index ? "opacity-100 z-10" : "opacity-0"
                    )
                  )}
                />
              ))}
            </div>

            {/* Slide nav buttons */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentIndex(index)}
                  className={twMerge(
                    clsx(
                      "h-3 transition-all duration-300 rounded-full",
                      currentIndex === index
                        ? "w-8 bg-black dark:bg-white"
                        : "w-3 bg-gray-400 dark:bg-gray-600"
                    )
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
