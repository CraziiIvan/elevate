"use server";

import { db } from "@/db/drizzle";
import { tags, tools, toolTags } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getFeaturedTools() {
  const featuredTools = await db
    .select({
      toolId: tools.toolId,
      name: tools.name,
      description: tools.description,
      websiteUrl: tools.websiteUrl,
      logoUrl: tools.logoUrl,
    })
    .from(tools)
    .limit(4);

  return featuredTools;
}

export async function getTagsByToolId(toolId: number) {
  const tagsByToolId = await db
    .select({
      tagId: toolTags.tagId,
      name: tags.name,
      slug: tags.slug,
    })
    .from(tags)
    .leftJoin(toolTags, eq(toolTags.tagId, tags.tagId))
    .where(eq(toolTags.toolId, toolId));

  return tagsByToolId;
}
