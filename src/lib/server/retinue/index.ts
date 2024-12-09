import { eq, and, notInArray } from 'drizzle-orm';
import { db, retinue, member, learnedAbility, desiredRole } from '../db';
import slugify from 'slugify';

export async function createRetinue(props: { name: string; protagonist: string; ownerId: number }) {
	const slug = slugify(props.name, {
		replacement: '-',
		remove: /[*+~.()'"!:@]/g,
		lower: true,
		strict: true,
		trim: true
	});
	await db.insert(retinue).values({ ...props, slug });
	return slug;
}

export async function getRetinues(ownerId: number) {
	const result = await db.select().from(retinue).where(eq(retinue.ownerId, ownerId));
	return result;
}

export async function getRetinueBySlug(slug: string, ownerId: number) {
	const result = await db
		.select()
		.from(retinue)
		.where(and(eq(retinue.slug, slug), eq(retinue.ownerId, ownerId)));
	if (!result.length) {
		return null;
	}
	return result[0];
}

export async function getRetinueMembers(retinueId: number) {
	const result = await db.query.member.findMany({
		where: eq(member.retinueId, retinueId),
		with: {
			desiredRoles: true,
			learnedAbilities: true
		}
	});
	return result.map((r) => ({
		id: r.id,
		characterId: r.characterId,
		desiredRoles: r.desiredRoles.map((dr) => dr.roleId),
		learnedAbilities: r.learnedAbilities.map((la) => la.abilityId)
	}));
}

export async function getRetinueMember(retinueId: number, characterId: string) {
	const result = await db.query.member.findFirst({
		where: and(eq(member.retinueId, retinueId), eq(member.characterId, characterId)),
		with: {
			desiredRoles: true,
			learnedAbilities: true
		}
	});
	if (!result) {
		return null;
	}
	return {
		id: result.id,
		characterId: result.characterId,
		desiredRoles: result.desiredRoles.map((dr) => dr.roleId),
		learnedAbilities: result.learnedAbilities.map((la) => la.abilityId)
	};
}

export async function addCharacterToRetinue(params: { characterId: string; retinueId: number }) {
	await db.insert(member).values({
		characterId: params.characterId,
		retinueId: params.retinueId
	});
}

export async function removeCharacterFromRetinue(params: {
	characterId: string;
	retinueId: number;
}) {
	await db
		.delete(member)
		.where(and(eq(member.characterId, params.characterId), eq(member.retinueId, params.retinueId)));
}

export async function getMember(retinueId: number, characterId: string) {
	return db.query.member.findFirst({
		where: and(eq(member.retinueId, retinueId), eq(member.characterId, characterId))
	});
}

export async function updateMember(
	memberId: number,
	props: { desiredRoles: string[]; learnedAbilities: string[] }
) {
	const promises = [];
	promises.push(
		db
			.delete(learnedAbility)
			.where(
				and(
					notInArray(learnedAbility.abilityId, props.learnedAbilities),
					eq(learnedAbility.memberId, memberId)
				)
			)
	);
	promises.push(
		db
			.delete(desiredRole)
			.where(
				and(notInArray(desiredRole.roleId, props.desiredRoles), eq(desiredRole.memberId, memberId))
			)
	);
	if (props.learnedAbilities.length) {
		promises.push(
			db
				.insert(learnedAbility)
				.values(props.learnedAbilities.map((a) => ({ memberId, abilityId: a })))
				.onConflictDoNothing()
		);
	}
	if (props.desiredRoles.length) {
		promises.push(
			db
				.insert(desiredRole)
				.values(props.desiredRoles.map((r) => ({ memberId, roleId: r })))
				.onConflictDoNothing()
		);
	}
	await Promise.all(promises);
}
