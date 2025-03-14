"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import MenuButton from "@/components/ui/menu-button";
import headerLogo from "@/public/logo-header.svg";
import githubLogo from "@/public/github.svg";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { headerRefAtom } from "@/state/header";

// const navLinks = [
//   { name: "Tools", path: "/" },
//   { name: "Blogs", path: "/blogs" },
// ];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [, setHeaderRef] = useAtom(headerRefAtom);

  useEffect(() => {
    setHeaderRef(headerRef);
  }, [setHeaderRef]);

  return (
    <header
      ref={headerRef}
      className="border-b-gray-3 bg-gray-1 sticky top-0 z-50 flex h-13 items-center justify-between border-b px-6 lg:h-14"
    >
      <div className="flex items-center gap-x-4">
        <Link href={"/"}>
          <Image src={headerLogo} alt="Elevate" height={16} />
        </Link>
        {/* {navLinks.map(({ name, path }) => (
          <NavLink key={name} name={name} path={path} />
          ))} */}
      </div>
      <div className="flex items-center gap-x-4">
        <Link
          href={"https://github.com/kaungthantneung"}
          className="hidden opacity-75 duration-200 ease-out hover:opacity-100 md:block"
        >
          <Image src={githubLogo} alt="Github" height={20} width={20} />
        </Link>
        <Button variant="outline">
          <span className="px-1">Submit</span>
        </Button>
        <MenuButton className="md:hidden" />
      </div>
    </header>
  );
}
