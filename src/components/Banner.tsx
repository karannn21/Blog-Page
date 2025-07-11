import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Banner() {
  return (
    <div
      className="relative w-full py-10 px-6 md:px-12 
      bg-gradient-to-br from-[#e0e7ff] via-white to-[#f3e8ff] 
      dark:from-[#1f2937] dark:via-[#111827] dark:to-[#1f2937] 
      rounded-xl shadow-md overflow-hidden"
    >
      {/* Decorative blobs (optional) */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-30 blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-300 dark:bg-pink-700 rounded-full opacity-30 blur-2xl -z-10" />

      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h2
          className="text-2xl md:text-3xl font-bold text-center md:text-left 
          text-gray-900 dark:text-gray-100"
        >
          Receive the latest Newsletter{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            updates.
          </span>
        </h2>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10 pr-4 py-2 
                bg-white dark:bg-gray-800 
                text-gray-900 dark:text-gray-100 
                placeholder-gray-400 dark:placeholder-gray-400
                border border-gray-300 dark:border-gray-600"
            />
          </div>
          <Button
            className="bg-black text-white hover:bg-gray-800 
              dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
