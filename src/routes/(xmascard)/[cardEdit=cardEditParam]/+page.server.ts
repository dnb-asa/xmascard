import { db } from '$lib/server/db';
import { cardTable } from '$lib/server/db/schema';
import { fail, redirect } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';
import type { PageServerLoad, Actions } from './$types';
import { addToCookieStore } from '../../../lib/server/db/cookieutil';

export const load: PageServerLoad = async ({ params: { cardEdit } }) => {
	const [viewKey, editKey] = cardEdit.split('_');

	if (viewKey === 'create') {
		return {
			title: '',
			message: '',
			key: ''
		};
	}

	const res = await db
		.select({
			title: cardTable.cardTitle,
			message: cardTable.cardText,
			key: cardTable.viewKey
		})
		.from(cardTable)
		.where(and(eq(cardTable.viewKey, viewKey), eq(cardTable.editKey, editKey)))
		.limit(1);

	const card = res[0];

	return card;
};

export const actions: Actions = {
	createcard: async ({ request, cookies }) => {
		const data = await request.formData();

		const title: string = data.get('title') as string;
		const message: string = data.get('message') as string;

		if (!title) {
			fail(400, { message: 'Invalid title' });
		}

		const res = await db
			.insert(cardTable)
			.values({
				cardTitle: title,
				cardText: message
			})
			.returning({ view: cardTable.viewKey, edit: cardTable.editKey });

		const { view, edit } = res[0];

		addToCookieStore(cookies, title, view, edit);

		console.log('created', view);

		redirect(301, `/${view}_${edit}`);
	},

	editcard: async ({ request, params }) => {
		const data = await request.formData();

		const title: string = data.get('title') as string;
		const message: string = data.get('message') as string;

		const key = params.cardEdit;
		const [viewKey, editKey] = key.split('_');

		if (!title) {
			fail(400, { message: 'Invalid title' });
		}

		await db
			.update(cardTable)
			.set({
				cardTitle: title,
				cardText: message
			})
			.where(
				and(eq(cardTable.viewKey, viewKey), eq(cardTable.editKey, editKey))
			);
	}
};
