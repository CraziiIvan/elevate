import SideBarItem, { icons } from "./side-bar-item";

type TCategorieLink = {
  name: string;
  path: string;
  iconName: keyof typeof icons;
};

const categorieLinks: TCategorieLink[] = [
  { name: "Explore", path: "/", iconName: "Binoculars" },
  { name: "Ai", path: "/ai", iconName: "Sparkle" },
];

export default function SideBar() {
  return (
    <aside className="border-r-gray-2 h-full max-w-80 flex-1 border-r px-4 py-3">
      {categorieLinks.map(({ name, path, iconName }) => (
        <SideBarItem key={name} name={name} path={path} iconName={iconName} />
      ))}
    </aside>
  );
}
