import Image from "next/image";
import NavLink from "@/components/nav-link";
import { Button } from "@/components/ui/button";
import headerLogo from "@/public/logo-header.svg";

const navLinks = [
  { name: "Tools", path: "/" },
  { name: "Blogs", path: "/blogs" },
];

export default function Header() {
  return (
    <header className="border-b-gray-3 flex h-13 items-center justify-between border-b px-6">
      <div className="flex items-center gap-x-6">
        <Image src={headerLogo} alt="Elevate" height={20} width={33.35} />
        {navLinks.map(({ name, path }) => (
          <NavLink key={name} name={name} path={path} />
        ))}
      </div>
      <div className="flex items-center gap-x-4">
        <Button variant="outline">Submit</Button>
        <Button>Subscribe</Button>
      </div>
    </header>
  );
}
