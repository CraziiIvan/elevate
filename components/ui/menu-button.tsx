"use client";

import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { mobileMenuAtom } from "@/state/mobile-menu";

const MenuButton = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useAtom(mobileMenuAtom);

  return (
    <button
      className={cn("relative h-8 w-8 focus:outline-none", className)}
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Menu"
    >
      <span
        className={cn(
          "bg-gray-10 absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-200 ease-out",
          isOpen ? "rotate-45" : "-translate-y-1",
        )}
      />
      <span
        className={cn(
          "bg-gray-10 absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-200 ease-out",
          isOpen ? "-rotate-45" : "translate-y-1",
        )}
      />
    </button>
  );
};

export default MenuButton;
