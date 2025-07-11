"use client";
import { useState } from "react";
import Footer from "./Footer";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Cards from "./Cards";

export default function Content() {
  const recentCards = [
    {
      title: "Remote Hiring Best Practices",
      tag: "Remote",
      image: "https://picsum.photos/id/1050/600/400",
      date: "12 Jul 2025",
      readTime: "4 min read",
    },
    {
      title: "Ethical Use of AI in HR",
      tag: "AI",
      image: "https://picsum.photos/id/1051/600/400",
      date: "11 Jul 2025",
      readTime: "3 min read",
    },
    {
      title: "Gen-Z Friendly Interview Formats",
      tag: "Hiring",
      image: "https://picsum.photos/id/1052/600/400",
      date: "10 Jul 2025",
      readTime: "5 min read",
    },
    {
      title: "Smart Screening Tools",
      tag: "Automation",
      image: "https://picsum.photos/id/1053/600/400",
      date: "09 Jul 2025",
      readTime: "6 min read",
    },
    {
      title: "Hiring Metrics That Matter",
      tag: "Analytics",
      image: "https://picsum.photos/id/1054/600/400",
      date: "08 Jul 2025",
      readTime: "4 min read",
    },
    {
      title: "Cultural Fit vs Skill Match",
      tag: "HR",
      image: "https://picsum.photos/id/1055/600/400",
      date: "07 Jul 2025",
      readTime: "5 min read",
    },
    {
      title: "Why Preboarding is Critical",
      tag: "Onboarding",
      image: "https://picsum.photos/id/1056/600/400",
      date: "06 Jul 2025",
      readTime: "3 min read",
    },
    {
      title: "The Power of Employer Branding",
      tag: "Branding",
      image: "https://picsum.photos/id/1057/600/400",
      date: "05 Jul 2025",
      readTime: "4 min read",
    },
    {
      title: "Reducing Time-to-Hire",
      tag: "Efficiency",
      image: "https://picsum.photos/id/1058/600/400",
      date: "04 Jul 2025",
      readTime: "6 min read",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = recentCards.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < recentCards.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <div className="w-full px-6 py-20 flex flex-col gap-16 relative">
      {/* 🟣 Featured Voices section */}
      <div className="relative">
        {/* PINK GRID BG */}
        <div
          className="absolute inset-0 -z-10 h-full w-full bg-white 
          bg-[linear-gradient(to_right,#e879f90a_1px,transparent_1px),linear-gradient(to_bottom,#e879f90a_1px,transparent_1px)] 
          bg-[size:28px_28px]
          dark:bg-black dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"
        >
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
            Featured Voices
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Recent{" "}
            <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-yellow-400 text-transparent bg-clip-text">
              Featured Blogs
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Insights on AI hiring, machine learning in assessments, and next-gen
            recruitment.
          </p>
        </div>

        <div className="mt-10">
          <Cards />
        </div>
      </div>

      {/* 🟢 Recent Blogs & Banners */}
      <div className="relative">
        {/* DOTTED BG */}
        <div
          className="absolute inset-0 -z-10 h-full w-full bg-white 
          bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px]
          dark:bg-black dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"
        ></div>

        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
            Fresh Perspectives
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Recent{" "}
            <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-yellow-400 text-transparent bg-clip-text">
              Blogs
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Navigate the future of hiring with expert insights and proven
            strategies.
          </p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full border border-transparent bg-white dark:bg-black relative overflow-hidden
                ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}
              `}
            >
              <span className="absolute inset-0 rounded-full p-px bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"></span>
              <span className="relative flex items-center justify-center w-full h-full bg-white dark:bg-black rounded-full">
                <i className="fa fa-chevron-left text-gray-800 dark:text-white text-sm"></i>
              </span>
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + 3 >= recentCards.length}
              className={`w-10 h-10 flex items-center justify-center rounded-full border border-transparent bg-white dark:bg-black relative overflow-hidden
                ${
                  startIndex + 3 >= recentCards.length
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
              `}
            >
              <span className="absolute inset-0 rounded-full p-px bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"></span>
              <span className="relative flex items-center justify-center w-full h-full bg-white dark:bg-black rounded-full">
                <i className="fa fa-chevron-right text-gray-800 dark:text-white text-sm"></i>
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 mt-10">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="max-w-sm bg-white dark:bg-gray-900 rounded overflow-hidden shadow-lg transition-all hover:shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <img
                className="w-full h-48 object-cover"
                src={card.image}
                alt={card.title}
              />
              <div className="px-6 py-4">
                <p className="text-xs text-pink-600 font-semibold mb-1">
                  {card.tag}
                </p>
                <div className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">
                  {card.title}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <img src="/logo.png" alt="logo" width={18} height={18} />
                  <span className="text-[13px] font-medium">
                    EverythingTalent Team
                  </span>
                  <span className="ml-2 text-[13px]">{card.readTime}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {card.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16" />
        <Banner />
        <div className="mt-16" />
        <Banner2 />
        <div className="mt-16" />
        <Footer />
      </div>
    </div>
  );
}
