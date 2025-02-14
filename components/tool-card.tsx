import Image from "next/image";
import { DiamondsFour, Hash, StarFour } from "@phosphor-icons/react/dist/ssr";
import { getTagsByToolId } from "@/app/actions";
import { cn } from "@/lib/utils";
import Tag from "./ui/tag";

type TToolCardProps = {
  toolId: number;
  logoUrl: string | null;
  name: string;
  description: string | null;
  featured?: boolean;
};

export default async function ToolCard({
  toolId,
  logoUrl,
  name,
  description,
  featured = false,
}: TToolCardProps) {
  const tags = await getTagsByToolId(toolId);

  return (
    <div
      key={toolId}
      className={cn("border-gray-2 relative space-y-3 rounded-2xl border p-4", {
        "p-5 shadow-[inset_0_0_20px_rgb(238,238,238,0.10)]": featured,
      })}
    >
      {featured && (
        <div className="border-gray-3 absolute top-4 right-4 flex h-6 items-center gap-x-0.5 rounded-md border px-1 text-sm">
          <StarFour size={12} weight="fill" />
          <span className="px-0.5">Featured</span>
        </div>
      )}
      {logoUrl ? (
        <Image src={logoUrl} alt={name} width={40} height={40} />
      ) : (
        <div className="text-gray-12 flex h-10 w-10 items-center justify-center">
          <DiamondsFour size={24} />
        </div>
      )}
      <div className="space-y-1.5">
        <div className="text-xl font-medium">{name}</div>
        <div className="text-gray-10 text-[15px]">{description}</div>
      </div>
      <div className="flex items-center gap-x-1">
        <Hash size={18} className="text-gray-6" />
        {tags && tags.length > 0 && (
          <>
            {tags.map((tag) => (
              <Tag key={tag.tagId} name={tag.name} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
