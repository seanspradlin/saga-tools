import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getRetinues } from '$lib/server/retinue';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/login');
	}
	const retinues = await getRetinues(event.locals.user.id);
	return { retinues };
};
