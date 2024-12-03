ALTER TABLE "retinue" ADD COLUMN "owner_id" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "retinue" ADD CONSTRAINT "retinue_owner_id_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
