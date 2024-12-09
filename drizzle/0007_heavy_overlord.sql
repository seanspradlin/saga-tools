ALTER TABLE "desired_role" DROP CONSTRAINT "desired_role_member_id_member_id_fk";
--> statement-breakpoint
ALTER TABLE "learned_ability" DROP CONSTRAINT "learned_ability_member_id_member_id_fk";
--> statement-breakpoint
ALTER TABLE "member" DROP CONSTRAINT "member_retinue_id_retinue_id_fk";
--> statement-breakpoint
ALTER TABLE "retinue" DROP CONSTRAINT "retinue_owner_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "session" DROP CONSTRAINT "session_user_id_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "desired_role" ADD CONSTRAINT "desired_role_member_id_member_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."member"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "learned_ability" ADD CONSTRAINT "learned_ability_member_id_member_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."member"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "member" ADD CONSTRAINT "member_retinue_id_retinue_id_fk" FOREIGN KEY ("retinue_id") REFERENCES "public"."retinue"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "retinue" ADD CONSTRAINT "retinue_owner_id_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
