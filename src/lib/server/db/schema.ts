import type { InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: integer('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', {
		withTimezone: true,
		mode: 'date'
	}).notNull()
});

export const schema = { user, session };

export type User = InferSelectModel<typeof user>;
export type Session = InferSelectModel<typeof session>;
