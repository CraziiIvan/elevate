import Image from "next/image";
import { DiamondsFour, Hash } from "@phosphor-icons/react/dist/ssr";
import { getTagsByToolId } from "@/app/actions";
import { cn } from "@/lib/utils";
import Tag from "./ui/tag";

type TToolCardProps = {
  toolId: number;
  logoUrl: string | null;
  name: string;
  description: string | null;
};

export default async function ToolCard({
  toolId,
  logoUrl,
  name,
  description,
}: TToolCardProps) {
  const tags = await getTagsByToolId(toolId);

  return (
    <div
      key={toolId}
      className={cn("border-gray-2 space-y-2.5 rounded-xl border p-4")}
    >
      <div className="flex items-center gap-x-3">
        {logoUrl ? (
          <Image src={logoUrl} alt={name} width={40} height={40} />
        ) : (
          <div className="text-gray-12 flex h-10 w-10 items-center justify-center">
            <DiamondsFour size={24} />
          </div>
        )}
        <div className="text-xl font-medium">{name}</div>
      </div>
      <div className="text-gray-10 text-[15px]">{description}</div>
      <div className="flex items-center gap-x-1">
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
