import {
	getCookieStore,
	removeFromCookieStore
} from '$lib/server/db/cookieutil';
import { type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { cardTable } from '$lib/server/db/schema';

export const load: PageServerLoad = async ({ cookies }) => {
	const knownCards = getCookieStore(cookies);

	const viewKeys = knownCards?.map(({ key }) => {
		return key.split('_')[0];
	});

	if (!viewKeys?.length) {
		return { cards: [] };
	}

	const dbItems = await db
		.select({
			title: cardTable.cardTitle,
			views: cardTable.cardViews
		})
		.from(cardTable);

	const updatedCards = knownCards?.map((card) => {
		const dbItem = dbItems.find((item) => item.title === card.title);
		return dbItem ? { ...card, views: dbItem.views } : card;
	});

	return {
		cards: updatedCards
	};
};

export const actions: Actions = {
	forgetcard: async ({ request, cookies }) => {
		const fd = await request.formData();
		const key = fd.get('key') as string;
		removeFromCookieStore(cookies, key);
	}
};
