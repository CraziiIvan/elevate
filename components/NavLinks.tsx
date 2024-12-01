"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Tools", path: "/" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <nav className="space-x-5">
      {navLinks.map(({ name, path }) => (
        <Link
          key={name}
          className={cn("text-gray-9 hover:text-gray-12 transition-colors duration-75 ease-out", { "text-gray-12": pathname === path })}
          href="/"
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
