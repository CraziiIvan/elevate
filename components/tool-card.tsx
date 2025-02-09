import Image from "next/image";
import { DiamondsFour } from "@phosphor-icons/react/dist/ssr";
import { getTagsByToolId } from "@/app/actions";
import { cn } from "@/lib/utils";

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
      className={cn("border-gray-3 relative space-y-3 rounded-2xl border p-4", {
        "p-5 shadow-[inset_0_0_20px_rgb(238,238,238,0.10)]": featured,
      })}
    >
      {featured && (
        <div className="bg-gray-1 border-gray-3 absolute -top-2.5 right-4 flex h-6 items-center rounded-md border px-1.5 text-sm">
          Featured
        </div>
      )}
      {logoUrl ? (
        <Image src={logoUrl} alt={name} width={40} height={40} />
      ) : (
        <div className="text-gray-12 flex h-10 w-10 items-center justify-center">
          <DiamondsFour size={24} />
        </div>
      )}
      <div className="space-y-2">
        <div className="text-xl font-medium">{name}</div>
        <div className="text-gray-10 text-[15px]">{description}</div>
      </div>
      {tags && tags.length > 0 && (
        <div className="flex gap-x-1.5">
          {tags.map((tag) => (
            <div
              key={tag.tagId}
              className="bg-gray-2 text-gray-11 flex h-6 items-center rounded-md px-1.5 text-sm"
            >
              {tag.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
