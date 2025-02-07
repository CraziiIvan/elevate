CREATE TABLE "categories" (
	"category_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"slug" varchar(50) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "categories_name_unique" UNIQUE("name"),
	CONSTRAINT "categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "submissions" (
	"submission_id" serial PRIMARY KEY NOT NULL,
	"submitted_by_email" varchar(100) NOT NULL,
	"website_url" varchar(255) NOT NULL,
	"submitted_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "subscribers" (
	"subscriber_id" serial PRIMARY KEY NOT NULL,
	"email" varchar(100) NOT NULL,
	"subscribed_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "subscribers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"tag_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"slug" varchar(50) NOT NULL,
	CONSTRAINT "tags_name_unique" UNIQUE("name"),
	CONSTRAINT "tags_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "tool_categories" (
	"tool_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	CONSTRAINT "tool_categories_tool_id_category_id_pk" PRIMARY KEY("tool_id","category_id")
);
--> statement-breakpoint
CREATE TABLE "tool_tags" (
	"tool_id" integer NOT NULL,
	"tag_id" integer NOT NULL,
	CONSTRAINT "tool_tags_tool_id_tag_id_pk" PRIMARY KEY("tool_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE "tools" (
	"tool_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"description" varchar(500),
	"website_url" varchar(255) NOT NULL,
	"logo_url" varchar(255),
	"pricing" varchar(50) DEFAULT 'Free',
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "tools_website_url_unique" UNIQUE("website_url")
);
--> statement-breakpoint
ALTER TABLE "tool_categories" ADD CONSTRAINT "tool_categories_tool_id_tools_tool_id_fk" FOREIGN KEY ("tool_id") REFERENCES "public"."tools"("tool_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tool_categories" ADD CONSTRAINT "tool_categories_category_id_categories_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("category_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tool_tags" ADD CONSTRAINT "tool_tags_tool_id_tools_tool_id_fk" FOREIGN KEY ("tool_id") REFERENCES "public"."tools"("tool_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tool_tags" ADD CONSTRAINT "tool_tags_tag_id_tags_tag_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("tag_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "category_slug_idx" ON "categories" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "submitter_email_idx" ON "submissions" USING btree ("submitted_by_email");--> statement-breakpoint
CREATE INDEX "submitted_url_idx" ON "submissions" USING btree ("website_url");--> statement-breakpoint
CREATE INDEX "email_idx" ON "subscribers" USING btree ("email");--> statement-breakpoint
CREATE INDEX "tag_slug_idx" ON "tags" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "tool_category_idx" ON "tool_categories" USING btree ("tool_id","category_id");--> statement-breakpoint
CREATE INDEX "tool_tag_idx" ON "tool_tags" USING btree ("tool_id","tag_id");--> statement-breakpoint
CREATE INDEX "name_url_idx" ON "tools" USING btree ("name","website_url");