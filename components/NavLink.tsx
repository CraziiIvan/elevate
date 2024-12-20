"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type TNavLinkProps = {
  name: string;
  path: string;
};

export default function NavLink({ name, path }: TNavLinkProps) {
  const pathname = usePathname();

  return (
    <nav className="space-x-5">
      <Link
        className={cn(
          "text-gray-9 hover:text-gray-12 transition-colors duration-75 ease-out",
          { "text-gray-12": pathname === path },
        )}
        href="/"
      >
        {name}
      </Link>
    </nav>
  );
}
