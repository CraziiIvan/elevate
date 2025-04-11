import Image from "next/image";
import { DiamondsFour, StarFour } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type TToolCardProps = {
  toolId: number;
  logoUrl: string | null;
  bgUrl: string | null;
  name: string;
  description: string | null;
  featured: boolean;
};

export default async function ToolCard({
  toolId,
  logoUrl,
  bgUrl,
  name,
  description,
  featured,
}: TToolCardProps) {
  console.log(bgUrl);

  return (
    <div className="group cursor-pointer -space-y-4">
      <div className="relative mx-1 aspect-video overflow-hidden rounded duration-150 ease-out group-hover:mx-0">
        {bgUrl ? <Image src={bgUrl} alt={name} fill={true} /> : null}
      </div>
      <div
        key={toolId}
        className={cn(
          "border-gray-3 bg-background relative z-10 flex items-center gap-x-3 rounded-xl border p-4 duration-150 ease-out group-hover:bg-[#080808]",
        )}
      >
        {featured && (
          <div className="text-foreground bg-gray-2 border-gray-3 absolute -top-3 right-4 flex items-center gap-x-1 rounded-lg border py-px pr-1.5 pl-1 text-sm">
            <StarFour size={12} weight="fill" />
            Featured
          </div>
        )}
        <div className="flex aspect-square h-12 w-12 items-center justify-center">
          {logoUrl ? (
            <Image src={logoUrl} alt={name} width={40} height={40} />
          ) : (
            <div className="text-gray-12 flex h-10 w-10 items-center justify-center">
              <DiamondsFour size={24} />
            </div>
          )}
        </div>
        <div className="space-y-1">
          <div className="text-foreground font-medium">{name}</div>
          <div className="text-muted-foreground text-sm">{description}</div>
        </div>
      </div>
    </div>
  );
}
