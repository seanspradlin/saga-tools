import type { PageServerLoad } from './$types';
import { getRetinueBySlug } from '$lib/server/retinue';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	if (!locals.user) {
		error(401);
	}
	const retinue = await getRetinueBySlug(params.slug, locals.user.id);
	if (!retinue) {
		error(404);
	}
	return {
		retinue
	};
};
