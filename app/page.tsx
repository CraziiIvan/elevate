import Hero from "@/components/hero";
import ToolCard from "@/components/tool-card";
import {
  getEditorChoiceTools,
  getFeaturedTools,
  getNewlyAddedTools,
} from "./actions";
import Image from "next/image";

export default async function Home() {
  const featuredTools = await getFeaturedTools();

  const newlyAddedTools = await getNewlyAddedTools();

  const editorChoiceTools = await getEditorChoiceTools();

  return (
    <main className="flex h-full grow flex-col">
      <Hero />
      <div className="xs:grid-cols-2 grid grid-cols-1 p-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {featuredTools &&
          featuredTools.map((tool) => (
            <ToolCard
              key={tool.toolId}
              toolId={tool.toolId}
              logoUrl={tool.logoUrl}
              name={tool.name}
              description={tool.description}
              featured={true}
            />
          ))}
      </div>
      <div className="space-y-4 p-5">
        <h2 className="text-xl font-medium">Newly Added</h2>
        <div className="xs:grid-cols-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {newlyAddedTools.map((tool) => (
            <ToolCard
              key={tool.toolId}
              toolId={tool.toolId}
              logoUrl={tool.logoUrl}
              name={tool.name}
              description={tool.description}
            />
          ))}
        </div>
      </div>
      <div className="space-y-4 p-5">
        <h2 className="text-xl font-medium">Choices</h2>
        <div className="xs:grid-cols-2 grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {editorChoiceTools.map((tool) => (
            <div key={tool.toolId} className="flex items-center gap-x-3">
              <div className="border-gray-3 flex h-14 w-14 items-center justify-center rounded-xl border-1">
                <Image
                  src={tool.logoUrl ?? ""}
                  alt={tool.name}
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <div className="text-gray-12 text-lg font-medium">
                  {tool.name}
                </div>
                <div className="text-gray-10 text-[15px]">
                  {tool.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
