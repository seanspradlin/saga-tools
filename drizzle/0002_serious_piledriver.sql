CREATE TABLE IF NOT EXISTS "desired_role" (
	"role_id" text NOT NULL,
	"member_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "learned_ability" (
	"ability_id" text NOT NULL,
	"member_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "member" (
	"id" serial PRIMARY KEY NOT NULL,
	"character_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "retinue" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"protagonist" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "desired_role" ADD CONSTRAINT "desired_role_member_id_member_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."member"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "learned_ability" ADD CONSTRAINT "learned_ability_member_id_member_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."member"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
