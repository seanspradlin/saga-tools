import type { PageServerLoad, Actions } from './$types';
import {
	getRetinueBySlug,
	getRetinueMembers,
	addCharacterToRetinue,
	removeCharacterFromRetinue
} from '$lib/server/retinue';
import { error, fail } from '@sveltejs/kit';
import { characters } from '$lib/data/characters';

export const load: PageServerLoad = async ({ params, locals }) => {
	if (!locals.user) {
		error(401);
	}
	const retinue = await getRetinueBySlug(params.slug, locals.user.id);
	if (!retinue) {
		error(404);
	}
	const members = await getRetinueMembers(retinue.id);
	const memberData = members.map((m) => {
		const charData = characters.find((c) => m.characterId === c.id);
		if (!charData) {
			throw new Error(`No character found for ${m.characterId}`);
		}
		return charData;
	});
	const possibleCharacters = characters.reduce<{ label: string; value: string }[]>((acc, el) => {
		if (!members.some((e) => e.characterId === el.id)) {
			acc.push({ label: el.name, value: el.id });
		}
		return acc;
	}, []);
	return {
		retinue,
		members: memberData,
		possibleCharacters
	};
};

export const actions: Actions = {
	async addMember({ locals, request, params }) {
		if (!locals.user) {
			return fail(401);
		}
		const data = await request.formData();
		const characterId = data.get('characterId');
		if (!characterId) {
			return fail(400);
		}
		const retinue = await getRetinueBySlug(params.slug, locals.user.id);
		if (!retinue) {
			return fail(401);
		}
		await addCharacterToRetinue({
			characterId: characterId.toString(),
			retinueId: retinue.id
		});
	},
	async removeMember({ locals, request, params }) {
		if (!locals.user) {
			return fail(401);
		}
		const data = await request.formData();
		const characterId = data.get('characterId');
		if (!characterId) {
			return fail(400);
		}
		const retinue = await getRetinueBySlug(params.slug, locals.user.id);
		if (!retinue) {
			return fail(401);
		}
		await removeCharacterFromRetinue({
			characterId: characterId.toString(),
			retinueId: retinue.id
		});
	}
};
