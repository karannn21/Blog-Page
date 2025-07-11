"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-transparent text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none border-none">
          {/* Sun icon – visible only in light mode */}
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />

          {/* Moon icon – visible only in dark mode */}
          <Moon className="h-[1.2rem] w-[1.2rem] transition-all hidden dark:block" />

          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
