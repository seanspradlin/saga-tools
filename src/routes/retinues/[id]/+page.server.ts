import type { PageServerLoad } from './$types';
import { getRetinueById } from '$lib/server/retinue';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	if (!locals.user) {
		error(401);
	}
	const id = Number.parseInt(params.id);
	if (Number.isNaN(id)) {
		error(404);
	}
	const retinue = await getRetinueById(id);
	if (!retinue) {
		error(404);
	}
	if (retinue.ownerId !== locals.user.id) {
		error(401);
	}
	return {
		retinue
	};
};
