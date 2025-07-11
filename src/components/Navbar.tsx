import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="inline-flex items-center gap-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-[#f9f9f9] dark:bg-[#1a1a1a] shadow-sm px-6 py-1 ml-20">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <div className="h-9 w-px bg-gray-400 dark:bg-gray-600"></div>

          <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Home
          </button>
          <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Products
          </button>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                  Solutions
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Pricing
          </button>
          <button className="text-sm font-medium text-[#b100e8] dark:text-[#e879f9] font-semibold">
            Blog
          </button>
          <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Support
          </button>
          <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            About
          </button>
        </div>

        <div className="inline-flex items-center gap-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-[#f9f9f9] dark:bg-[#1a1a1a] shadow-sm px-6 py-3 relative -top-2.5 ml-50">
          <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Request a Demo
          </button>
        </div>

        <div className="inline-flex items-center gap-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-[#f9f9f9] dark:bg-[#1a1a1a] shadow-sm px-1 py-0.5 relative -top-1.5 ml-4">
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
