import { type InferSelectModel, relations } from 'drizzle-orm';
import { pgTable, serial, text, integer, timestamp, primaryKey, unique } from 'drizzle-orm/pg-core';

const timestamps = {
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	deletedAt: timestamp('deleted_at')
};

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	name: text('name'),
	googleId: text('google_id'),
	...timestamps
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

export const retinue = pgTable(
	'retinue',
	{
		id: serial('id').primaryKey(),
		slug: text('slug').notNull(),
		name: text('name').notNull(),
		protagonist: text('protagonist').notNull(),
		ownerId: integer('owner_id')
			.notNull()
			.references(() => user.id),
		...timestamps
	},
	(table) => [{ ownerSlug: unique('owner_slug').on(table.slug, table.ownerId) }]
);
export const retinueRelations = relations(retinue, ({ many }) => ({ members: many(member) }));

export const member = pgTable('member', {
	id: serial('id').primaryKey(),
	characterId: text('character_id').notNull(),
	retinueId: integer('retinue_id')
		.notNull()
		.references(() => retinue.id),
	...timestamps
});
export const memberRelation = relations(member, ({ one, many }) => ({
	retinue: one(retinue, { fields: [member.retinueId], references: [retinue.id] }),
	learnedAbilities: many(learnedAbility),
	desiredRoles: many(desiredRole)
}));

export const learnedAbility = pgTable(
	'learned_ability',
	{
		abilityId: text('ability_id').notNull(),
		memberId: integer('member_id')
			.notNull()
			.references(() => member.id)
	},
	(table) => ({
		pk: primaryKey({ name: 'member_ability', columns: [table.abilityId, table.memberId] })
	})
);
export const learnedAbilityRelations = relations(learnedAbility, ({ one }) => ({
	member: one(member, { fields: [learnedAbility.memberId], references: [member.id] })
}));

export const desiredRole = pgTable(
	'desired_role',
	{
		roleId: text('role_id').notNull(),
		memberId: integer('member_id')
			.notNull()
			.references(() => member.id)
	},
	(table) => ({
		pk: primaryKey({ name: 'member_role', columns: [table.roleId, table.memberId] })
	})
);
export const desiredRoleRelations = relations(desiredRole, ({ one }) => ({
	member: one(member, { fields: [desiredRole.memberId], references: [member.id] })
}));

export const schema = { user, session, retinue, member, learnedAbility, desiredRole };

export type User = InferSelectModel<typeof user>;
export type Session = InferSelectModel<typeof session>;
export type Retinue = InferSelectModel<typeof retinue>;
export type Member = InferSelectModel<typeof member>;
export type LearnedAbility = InferSelectModel<typeof learnedAbility>;
export type DesiredRole = InferSelectModel<typeof desiredRole>;
