import { db, schema } from '../db';
import { Google } from 'arctic';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, BASE_PATH } from '$env/static/private';
import { eq } from 'drizzle-orm';

export const google = new Google(
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	`${BASE_PATH}/login/google/callback`
);

export async function getUserFromGoogleId(googleUserId: string) {
	const result = await db
		.select({ user: schema.user })
		.from(schema.user)
		.where(eq(schema.user.googleId, googleUserId))
		.limit(1);
	if (!result[0]) {
		return null;
	}
	return result[0].user;
}

export async function createUser(googleUserId: string, name: string) {
	const result = await db.insert(schema.user).values({ name, googleId: googleUserId }).returning({
		id: schema.user.id
	});
	return result[0];
}
