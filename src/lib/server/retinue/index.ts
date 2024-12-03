import { eq } from 'drizzle-orm';
import { db, retinue } from '../db';

export async function createRetinue(props: { name: string; protagonist: string; ownerId: number }) {
	const result = await db.insert(retinue).values(props).returning({ id: retinue.id });
	if (!result.length) {
		throw new Error('Failed to create retinue');
	}
	return result[0].id;
}

export async function getRetinueById(id: number) {
	const result = await db.query.retinue.findFirst({
		where: eq(retinue.id, id),
		with: {
			members: true
		}
	});
	return result;
}
