"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative px-4 md:px-6 pt-[80px] pb-12 bg-gradient-to-br from-pink-100 via-white to-blue-100 dark:from-[#0c0c0c] dark:via-black dark:to-[#0c0c0c]">
      <div className="max-w-screen-xl mx-auto">
        <div className="p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500">
          <div
            className="relative overflow-hidden rounded-[calc(1rem-2px)] shadow-md"
            ref={emblaRef}
          >
            <div className="flex">
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full flex-shrink-0">
                  <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 bg-gradient-to-br from-pink-100 via-white to-blue-100 dark:from-[#0c0c0c] dark:via-black dark:to-[#0c0c0c] rounded-[calc(1rem-2px)] w-full">
                    <div className="max-w-xl text-center md:text-left space-y-4">
                      <h1
                        className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight"
                        style={{
                          fontFamily: index === 0 ? "Poppins" : "Montserrat",
                        }}
                      >
                        {slide.title}
                      </h1>
                      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
                        {slide.description}
                      </p>
                      <p className="italic text-sm text-gray-500 dark:text-gray-400">
                        {slide.subText}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px]"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-500 via-green-400 via-blue-500 to-purple-500 transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-full z-0"></span>
                        <span className="relative z-10 inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-2">
                          {slide.buttonText}
                        </span>
                      </motion.button>
                    </div>

                    <div className="w-full md:w-[400px] h-[400px] relative mt-10 md:mt-0">
                      <Image
                        src={slide.image}
                        alt={`Slide ${index}`}
                        width={400}
                        height={400}
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dot Indicators - now inside carousel */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-black dark:bg-white"
                      : "w-3 bg-gray-400 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
