"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/50 backdrop-blur-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-[54px] w-full items-center justify-between px-4 md:container md:px-8 mx-auto">
        <div className="flex items-center justify-start gap-4 w-full">
          <div className="hidden lg:flex items-center gap-6 rounded-[8px] border-2 border-slate-700/30 dark:border-slate-300/30 backdrop-blur-[7px] bg-slate-200/40 dark:bg-black/40 px-4 py-[1px]">
            <Link href="/" className="flex items-center space-x-2">
              {/* Light mode logo */}
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="block dark:hidden"
              />
              {/* Dark mode logo */}
              <Image
                src="/logo2.png"
                alt="Logo"
                width={40}
                height={40}
                className="hidden dark:block"
              />
            </Link>

            <div className="h-[30px] w-[1px] bg-slate-700/30 dark:bg-slate-300/30" />

            <Link
              href="/"
              className="text-sm font-normal text-slate-950 dark:text-slate-50"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-normal text-slate-950 dark:text-slate-50"
            >
              Products
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center text-sm font-normal text-slate-950 dark:text-slate-50 bg-transparent hover:text-black dark:hover:text-white">
                    Solutions
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/pricing"
              className="text-sm font-normal text-slate-950 dark:text-slate-50"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm font-bold text-[#b100e8] dark:text-[#e879f9]"
            >
              Blog
            </Link>
            <Link
              href="/support"
              className="text-sm font-normal text-slate-950 dark:text-slate-50"
            >
              Support
            </Link>
            <Link
              href="/about"
              className="text-sm font-normal text-slate-950 dark:text-slate-50"
            >
              About
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="group relative hidden lg:flex items-center rounded-[8px] border-2 border-slate-700/30 dark:border-slate-300/30 backdrop-blur-[7px] bg-slate-200/40 dark:bg-black/40 px-4 py-[11px]">
            <span className="flex items-center text-sm font-normal text-slate-950 dark:text-slate-50 whitespace-nowrap">
              Request a Demo
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>

          <div className="group relative hidden lg:flex items-center rounded-[8px] border-2 border-slate-700/30 dark:border-slate-300/30 backdrop-blur-[7px] bg-slate-200/40 dark:bg-black/40 px-2 py-[1.5px]">
            <ModeToggle />
          </div>

          <button className="group relative hidden lg:flex items-center rounded-[8px] border-2 border-slate-700/30 dark:border-slate-300/30 backdrop-blur-[7px] bg-slate-200/40 dark:bg-black/40 px-4 py-[11px]">
            <span className="flex items-center text-sm font-normal text-slate-950 dark:text-slate-50 whitespace-nowrap">
              Login
              <svg
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
