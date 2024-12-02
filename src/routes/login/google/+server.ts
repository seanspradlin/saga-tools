import { generateState, generateCodeVerifier } from 'arctic';
import { google } from '$lib/server/auth/google';

import type { RequestEvent } from './$types';

export async function GET(event: RequestEvent) {
	const state = generateState();
	const verifier = generateCodeVerifier();
	const url = google.createAuthorizationURL(state, verifier, ['openid', 'profile']);

	event.cookies.set('google_oauth_state', state, {
		path: '/',
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: 'lax'
	});

	event.cookies.set('google_code_verifier', verifier, {
		path: '/',
		httpOnly: true,
		maxAge: 60 * 10, // 10 minutes
		sameSite: 'lax'
	});

	return new Response(null, {
		status: 302,
		headers: {
			Location: url.toString()
		}
	});
}
