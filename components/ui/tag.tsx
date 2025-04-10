import { Hash } from "@phosphor-icons/react/dist/ssr";

type TTagProps = {
  name: string;
};

export default function Tag({ name }: TTagProps) {
  return (
    <div className="text-gray-11 border-gray-2 flex h-6 items-center justify-center gap-x-0.5 rounded-md border pr-2 pl-1.5 text-sm">
      <Hash size={12} className="text-gray-10" />
      {name}
    </div>
  );
}
