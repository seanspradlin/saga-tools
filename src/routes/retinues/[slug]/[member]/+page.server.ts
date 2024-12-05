import { error, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { getRetinueBySlug, getRetinueMember, getMember, updateMember } from '$lib/server/retinue';

export const load: PageServerLoad = async ({ params, locals }) => {
	if (!locals.user) {
		error(401);
	}
	const retinue = await getRetinueBySlug(params.slug, locals.user.id);
	if (!retinue) {
		error(404);
	}
	const member = await getRetinueMember(retinue.id, params.member);
	if (!member) {
		error(404);
	}
	return { retinue, member };
};

export const actions: Actions = {
	async default({ locals, request, params }) {
		if (!locals.user) {
			return fail(401);
		}
		const retinue = await getRetinueBySlug(params.slug, locals.user.id);
		if (!retinue) {
			return fail(404);
		}
		const member = await getMember(retinue.id, params.member);
		if (!member) {
			return fail(404);
		}
		const data = await request.formData();
		const desiredRoles = data.getAll('desiredRoles') as string[];
		const learnedAbilities = data.getAll('learnedAbilities') as string[];
		await updateMember(member.id, {
			desiredRoles,
			learnedAbilities
		});
	}
};
