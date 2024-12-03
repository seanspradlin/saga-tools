import { eq, and } from 'drizzle-orm';
import { db, retinue, member } from '../db';
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
	const result = await db.select().from(member).where(eq(member.retinueId, retinueId));
	return result;
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
