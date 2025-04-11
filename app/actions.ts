"use server";

import { db } from "@/db/drizzle";
import { tags, tools, toolTags } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function getFeaturedTools() {
  const featuredTools = await db
    .select({
      toolId: tools.toolId,
      name: tools.name,
      description: tools.description,
      websiteUrl: tools.websiteUrl,
      logoUrl: tools.logoUrl,
      bgUrl: tools.bgUrl,
    })
    .from(tools)
    .where(eq(tools.featured, true))
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

export async function getNewlyAddedTools() {
  const newlyAddedTools = await db
    .select({
      toolId: tools.toolId,
      name: tools.name,
      description: tools.description,
      websiteUrl: tools.websiteUrl,
      logoUrl: tools.logoUrl,
    })
    .from(tools)
    .orderBy(desc(tools.createdAt))
    .limit(4);

  return newlyAddedTools;
}

export async function getEditorChoiceTools() {
  const choiceTools = await db
    .select({
      toolId: tools.toolId,
      name: tools.name,
      description: tools.description,
      websiteUrl: tools.websiteUrl,
      logoUrl: tools.logoUrl,
    })
    .from(tools)
    .where(eq(tools.editorChoice, true))
    .limit(4);

  return choiceTools;
}
