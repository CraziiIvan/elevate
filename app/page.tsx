import Hero from "@/components/hero";
import ToolCard from "@/components/tool-card";
import { getFeaturedTools } from "./actions";

export default async function Home() {
  const featuredTools = await getFeaturedTools();

  return (
    <main className="flex grow flex-col">
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
    </main>
  );
}
