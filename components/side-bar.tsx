"use client";

import SideBarItem, { icons } from "./side-bar-item";
import { useAtom } from "jotai";
import { mobileMenuAtom } from "@/state/mobile-menu";
import { cn } from "@/lib/utils";

type TCategorieLink = {
  name: string;
  path: string;
  iconName: keyof typeof icons;
};

const categorieLinks: TCategorieLink[] = [
  { name: "Explore", path: "/", iconName: "Binoculars" },
  { name: "Ai", path: "/ai", iconName: "Sparkle" },
  { name: "Productivity", path: "/productivity", iconName: "Lightning" },
  { name: "Development", path: "/development", iconName: "Code" },
  { name: "Design", path: "/design", iconName: "Palette" },
];

export default function SideBar() {
  const [isOpen] = useAtom(mobileMenuAtom);

  return (
    <aside
      className={cn(
        "border-r-gray-3 h-full w-full max-w-60 flex-1 border-r px-4 py-3 transition-all duration-300 ease-in-out lg:max-w-64",
        "bg-gray-1 fixed top-13 left-0 z-40 lg:static",
        !isOpen && "-translate-x-full lg:translate-x-0",
      )}
    >
      {categorieLinks.map(({ name, path, iconName }) => (
        <SideBarItem key={name} name={name} path={path} iconName={iconName} />
      ))}
    </aside>
  );
}
