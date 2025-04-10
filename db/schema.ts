import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
  index,
  primaryKey,
  boolean,
} from "drizzle-orm/pg-core";

export const subscribers = pgTable(
  "subscribers",
  {
    subscriberId: serial("subscriber_id").primaryKey(),
    email: varchar("email", { length: 100 }).notNull().unique(),
    subscribedAt: timestamp("subscribed_at", {
      withTimezone: true,
    }).defaultNow(),
  },
  (table) => ({
    emailIdx: index("email_idx").on(table.email),
  }),
);

export const tools = pgTable(
  "tools",
  {
    toolId: serial("tool_id").primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    description: varchar("description", { length: 500 }),
    websiteUrl: varchar("website_url", { length: 255 }).notNull().unique(),
    logoUrl: varchar("logo_url", { length: 255 }),
    bgUrl: varchar("bg_url", { length: 255 }),
    featured: boolean("featured").default(false),
    editorChoice: boolean("editor_choice").default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => ({
    nameUrlIdx: index("name_url_idx").on(table.name, table.websiteUrl),
  }),
);

export const submissions = pgTable(
  "submissions",
  {
    submissionId: serial("submission_id").primaryKey(),
    submittedByEmail: varchar("submitted_by_email", { length: 100 }).notNull(),
    websiteUrl: varchar("website_url", { length: 255 }).notNull(), // Allow duplicates
    submittedAt: timestamp("submitted_at", { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    emailIdx: index("submitter_email_idx").on(table.submittedByEmail),
    urlIdx: index("submitted_url_idx").on(table.websiteUrl),
  }),
);

export const categories = pgTable(
  "categories",
  {
    categoryId: serial("category_id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull().unique(),
    slug: varchar("slug", { length: 50 }).notNull().unique(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    slugIdx: index("category_slug_idx").on(table.slug),
  }),
);

export const tags = pgTable(
  "tags",
  {
    tagId: serial("tag_id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull().unique(),
    slug: varchar("slug", { length: 50 }).notNull().unique(),
  },
  (table) => ({
    slugIdx: index("tag_slug_idx").on(table.slug),
  }),
);

export const toolCategories = pgTable(
  "tool_categories",
  {
    toolId: integer("tool_id")
      .notNull()
      .references(() => tools.toolId, { onDelete: "cascade" }),
    categoryId: integer("category_id")
      .notNull()
      .references(() => categories.categoryId, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.toolId, table.categoryId] }),
    toolCategoryIdx: index("tool_category_idx").on(
      table.toolId,
      table.categoryId,
    ),
  }),
);

export const toolTags = pgTable(
  "tool_tags",
  {
    toolId: integer("tool_id")
      .notNull()
      .references(() => tools.toolId, { onDelete: "cascade" }),
    tagId: integer("tag_id")
      .notNull()
      .references(() => tags.tagId, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.toolId, table.tagId] }),
    toolTagIdx: index("tool_tag_idx").on(table.toolId, table.tagId),
  }),
);

export const toolsRelations = relations(tools, ({ many }) => ({
  categories: many(toolCategories),
  tags: many(toolTags),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  tools: many(toolCategories),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  tools: many(toolTags),
}));
