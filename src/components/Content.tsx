"use client";

import { useState } from "react";
import Footer from "./Footer";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Cards from "./Cards";
import BlogFilter from "./BlogFilter";
import { Clock } from "lucide-react";

export default function Content() {
  const recentCards = [
    {
      title: "Why Every Company Needs an Applicant Tracking System (ATS) ?",
      tag: "AI",
      image: "home1.png",
      date: "18 Feb 2025",
      readTime: "5 min read",
    },
    {
      title: "How AI is Transforming the World of Recruitment",
      tag: "Tech",
      image: "home2.png",
      date: "17 Feb 2025",
      readTime: "4 min read",
    },
    {
      title: "Using AI for Skill Assessment: Talent Evaluation",
      tag: "AI",
      image: "home3.png",
      date: "16 Feb 2025",
      readTime: "6 min read",
    },
    {
      title: "Understanding Different Types of Hiring Assessment Tests",
      tag: "HR",
      image: "home4.png",
      date: "15 Feb 2025",
      readTime: "5 min read",
    },
    {
      title: "The Art of Smart Hiring: Next-Generation Skills Assessment",
      tag: "Analytics",
      image: "home5.png",
      date: "14 Feb 2025",
      readTime: "4 min read",
    },
    {
      title: "Top 5 Recruitment Trends in 2024",
      tag: "AI",
      image: "home6.png",
      date: "13 Feb 2025",
      readTime: "5 min read",
    },
    {
      title:
        "AI-Enhanced Candidate Screening in 2024: Revolutionizing Recruitment",
      tag: "Tech",
      image: "home7.png",
      date: "12 Feb 2025",
      readTime: "5 min read",
    },
    {
      title: "Top 10 Best Talent Assessment Tools for Recruiters in 2025",
      tag: "Future",
      image: "home8.png",
      date: "11 Feb 2025",
      readTime: "4 min read",
    },
    {
      title: "AI Tech Assessment Tools: The Ultimate Hiring Solution",
      tag: "HR",
      image: "home9.png",
      date: "10 Feb 2025",
      readTime: "3 min read",
    },
    {
      title: "The Importance of AI in Modern Recruitment",
      tag: "Legal",
      image: "home10.png",
      date: "9 Feb 2025",
      readTime: "5 min read",
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
    <div className="container mx-auto max-w-screen-xl px-4 py-20 flex flex-col gap-16 relative">
      <BlogFilter />

      <div className="relative">
        <div
          className="absolute inset-0 -z-10 h-full w-full bg-white 
          bg-[linear-gradient(to_right,#e879f90a_1px,transparent_1px),linear-gradient(to_bottom,#e879f90a_1px,transparent_1px)] 
          bg-[size:28px_28px]
          dark:bg-black dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"
        >
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
        </div>

        <div className="flex flex-col items-center text-center gap-3">
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
            Featured Voices
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-yellow-400 text-transparent bg-clip-text">
              Blogs
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

      <div className="relative">
        <div
          className="absolute inset-0 -z-10 h-full w-full bg-white 
          bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px]
          dark:bg-black dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"
        />

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
                ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
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
                }`}
            >
              <span className="absolute inset-0 rounded-full p-px bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"></span>
              <span className="relative flex items-center justify-center w-full h-full bg-white dark:bg-black rounded-full">
                <i className="fa fa-chevron-right text-gray-800 dark:text-white text-sm"></i>
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-4 mt-10">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500"
            >
              <a
                href="#"
                className="group flex flex-col w-full max-w-[420px] mx-auto bg-white dark:bg-gray-900 rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full pt-[60%] overflow-hidden p-1 bg-white">
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded"
                    src={card.image}
                    alt={card.title}
                  />
                </div>

                <div className="p-4 flex flex-col gap-2 bg-gray-200 dark:bg-gray-800">
                  <p className="text-xs text-pink-600 font-semibold">
                    {card.tag}
                  </p>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 leading-snug line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
                    {card.title}
                  </h2>
                  <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <img src="/logo.png" alt="logo" width={18} height={18} />
                    <span className="text-[13px] font-medium">
                      EverythingTalent Team
                    </span>
                    <Clock size={14} className="ml-2" />
                    <span className="text-[13px]">{card.readTime}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {card.date}
                  </p>
                </div>
              </a>
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
