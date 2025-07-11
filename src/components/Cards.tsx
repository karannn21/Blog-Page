import { Clock } from "lucide-react";

const blogData = [
  {
    title: "Why Every Company Needs an ATS",
    tag: "AI",
    image: "https://picsum.photos/id/1011/600/300",
    date: "18 Feb 2025",
    readTime: "5 min read",
  },
  {
    title: "AI in Modern Recruitment",
    tag: "Tech",
    image: "https://picsum.photos/id/1005/600/300",
    date: "17 Feb 2025",
    readTime: "4 min read",
  },
  {
    title: "The Role of AI in Hiring Decisions",
    tag: "AI",
    image: "https://picsum.photos/id/1012/600/300",
    date: "16 Feb 2025",
    readTime: "6 min read",
  },
  {
    title: "Human-Centric AI Assessment",
    tag: "HR",
    image: "https://picsum.photos/id/1020/600/300",
    date: "15 Feb 2025",
    readTime: "5 min read",
  },
  {
    title: "Building Teams with Data Insights",
    tag: "Analytics",
    image: "https://picsum.photos/id/1021/600/300",
    date: "14 Feb 2025",
    readTime: "4 min read",
  },
  {
    title: "Talent Scoring with Machine Learning",
    tag: "AI",
    image: "https://picsum.photos/id/1024/600/300",
    date: "13 Feb 2025",
    readTime: "5 min read",
  },
  {
    title: "Recruitment Analytics Dashboard",
    tag: "Tech",
    image: "https://picsum.photos/id/1035/600/300",
    date: "12 Feb 2025",
    readTime: "5 min read",
  },
  {
    title: "AI-Powered Hiring Predictions",
    tag: "Future",
    image: "https://picsum.photos/id/1040/600/300",
    date: "11 Feb 2025",
    readTime: "4 min read",
  },
  {
    title: "Skill-Based Candidate Screening",
    tag: "HR",
    image: "https://picsum.photos/id/1045/600/300",
    date: "10 Feb 2025",
    readTime: "3 min read",
  },
  {
    title: "AI Ethics in Hiring",
    tag: "Legal",
    image: "https://picsum.photos/id/1050/600/300",
    date: "9 Feb 2025",
    readTime: "5 min read",
  },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogData.map((card, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden border-2 border-transparent hover:border-purple-500 transition-all shadow-md 
          bg-white dark:bg-gray-900 dark:border-gray-700"
        >
          <div className="h-[200px] w-full overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="p-4">
            <p className="text-xs text-pink-600 font-semibold mb-1">
              {card.tag}
            </p>
            <h2 className="text-md font-semibold text-gray-800 dark:text-gray-100 leading-snug mb-2">
              {card.title}
            </h2>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <img src="/logo.png" alt="logo" width={18} height={18} />
              <span className="text-[13px] font-medium">
                EverythingTalent Team
              </span>
              <Clock size={14} className="ml-2" />
              <span className="text-[13px]">{card.readTime}</span>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {card.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
