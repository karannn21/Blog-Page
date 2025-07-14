"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const filters = [
  "All",
  "Recruitment",
  "Youtube",
  "ApplicantTrackingSystem",
  "MachineLearning",
];

export default function BlogFilter() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
      <div className="relative w-full sm:max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search blog posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant="outline"
            className="text-fuchsia-600 border border-fuchsia-100 hover:bg-fuchsia-50 transition"
          >
            {filter}
          </Button>
        ))}
      </div>
    </div>
  );
}
