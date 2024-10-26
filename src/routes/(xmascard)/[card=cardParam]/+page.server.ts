import { db } from '$lib/server/db';
import { cardTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const res = await db
		.select({ title: cardTable.cardTitle, message: cardTable.cardText })
		.from(cardTable)
		.where(eq(cardTable.viewKey, params.card))
		.limit(1);

	const card = res[0];

	if (!card) {
		return error(404, 'Not Found');
	}

	return { ...card };
};
