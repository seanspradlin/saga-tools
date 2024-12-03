import { eq, and } from 'drizzle-orm';
import { db, retinue } from '../db';
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
	const result = await db.query.retinue.findFirst({
		where: and(eq(retinue.ownerId, ownerId), eq(retinue.slug, slug)),
		with: {
			members: true
		}
	});
	return result;
}
