"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Binoculars,
  Sparkle,
  Code,
  Lightning,
  Palette,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type TSideBarItemProps = {
  name: string;
  path: string;
  iconName: keyof typeof icons;
};

export const icons = {
  Binoculars,
  Sparkle,
  Code,
  Lightning,
  Palette,
};

export default function SideBarItem({
  name,
  path,
  iconName,
}: TSideBarItemProps) {
  const pathname = usePathname();

  const isActive = pathname === path;

  const Icon = icons[iconName];

  return (
    <Link
      href={path}
      className={cn(
        "relative flex items-center gap-x-2 rounded-lg px-2.5 py-2",
      )}
    >
      <div>
        <Icon
          className={cn(
            "text-gray-9 group-hover:text-gray-12 transition-colors duration-150 ease-out",
            { "text-gray-12": isActive },
          )}
          size={18}
        />
      </div>
      <span
        className={cn(
          "text-gray-10 group-hover:text-gray-12 transition-colors duration-150 ease-out",
          { "text-gray-12": isActive },
        )}
      >
        {name}
      </span>
      {isActive && (
        <motion.div
          className="bg-gray-2 absolute inset-0 -z-10 rounded-lg"
          layoutId="sidebar-item-bg"
        />
      )}
    </Link>
  );
}
