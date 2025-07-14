"use client";

import { Clock } from "lucide-react";

const blogData = [
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

export default function Cards() {
  return (
    <div className="container mx-auto max-w-screen-xl px-2 md:px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {blogData.map((card, index) => (
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
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover rounded"
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
    </div>
  );
}
