"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Binoculars, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import styles from "@/app/styles.module.css";

type TSideBarItemProps = {
  name: string;
  path: string;
  iconName: keyof typeof icons;
};

export const icons = {
  Binoculars,
  Sparkle,
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
    <Link href={path} className="group flex items-center gap-x-2 p-2">
      <IconWrapper isActive={isActive}>
        <Icon
          className={cn(
            "text-gray-9 group-hover:text-gray-12 transition-colors duration-300 ease-out",
            { "text-gray-12": isActive },
          )}
          size={20}
        />
      </IconWrapper>
      <span
        className={cn(
          "text-gray-9 group-hover:text-gray-12 transition-colors duration-150 ease-out",
          { "text-gray-12": isActive },
        )}
      >
        {name}
      </span>
    </Link>
  );
}

function IconWrapper({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <div
      className={cn(
        "inset-shadow-icon-bottom inset-shadow-gray-12/15 bg-gray-1 shadow-gray-12/20 group-hover:inset-shadow-gray-12/30 rounded-xl transition-all duration-300 ease-out group-hover:shadow",
        {
          "inset-shadow-gray-12/30 shadow": isActive,
        },
      )}
    >
      <div
        className={cn(
          "inset-shadow-gray-12/90 group-hover:inset-shadow-icon-highlight rounded-xl transition-all duration-300 ease-out",
          {
            "inset-shadow-icon-highlight": isActive,
          },
        )}
      >
        <div
          className={cn(
            "inset-shadow-icon-top inset-shadow-gray-12/15 group-hover:inset-shadow-gray-12/30 rounded-xl transition-colors duration-300 ease-out",
            {
              "inset-shadow-gray-12/30": isActive,
            },
          )}
        >
          <div
            className={cn(
              "border-gray-12/10 group-hover:border-gray-12/25 rounded-xl border p-1.5 transition-colors duration-300 ease-out",
              {
                "border-gray-12/25": isActive,
              },
            )}
          >
            <div className={isActive ? styles.iconMask : ""}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
