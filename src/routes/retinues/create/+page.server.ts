import { createRetinue } from '$lib/server/retinue';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		if (!locals.user) {
			return fail(401);
		}

		const data = await request.formData();
		const name = data.get('name');
		const errors = [];
		if (!name) {
			errors.push({ field: 'name', message: 'Name required' });
		}
		const protagonist = data.get('protagonist');
		if (!protagonist) {
			errors.push({ field: 'protagonist', message: 'Protagonist required' });
		}
		if (errors.length) {
			return fail(400, { errors });
		}
		const retinueId = await createRetinue({
			name: name!.toString(),
			protagonist: protagonist!.toString(),
			ownerId: locals.user.id
		});
		redirect(301, `/retinues/${retinueId}`);
	}
};
