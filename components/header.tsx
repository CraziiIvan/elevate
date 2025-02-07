import Image from "next/image";
import { Button } from "@/components/ui/button";
import MenuButton from "@/components/ui/menu-button";
import headerLogo from "@/public/logo-header.svg";
import githubLogo from "@/public/github.svg";
import Link from "next/link";

// const navLinks = [
//   { name: "Tools", path: "/" },
//   { name: "Blogs", path: "/blogs" },
// ];

export default function Header() {
  return (
    <header className="border-b-gray-3 flex h-12 items-center justify-between border-b px-6 lg:h-14">
      <div className="flex items-center gap-x-6">
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
          className="hidden opacity-75 duration-200 ease-out hover:opacity-100 lg:block"
        >
          <Image src={githubLogo} alt="Github" height={24} width={24} />
        </Link>
        <Link
          href={"https://github.com/kaungthantneung"}
          className="opacity-75 duration-200 ease-out hover:opacity-100 lg:hidden"
        >
          <Image src={githubLogo} alt="Github" height={20} width={20} />
        </Link>
        <Button variant="outline" className="hidden lg:block">
          Submit
        </Button>
        <MenuButton className="lg:hidden" />
      </div>
    </header>
  );
}
