import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import loaded from '$lib/works.json';

export const load: PageLoad = ({ params }) => {
	var works: { [index: string]: any } = loaded;
	var works_slugs = Object.keys(works);
	var is_route_ok = false;
	works_slugs.forEach((work_slug) => {
		if (params.slug === work_slug) {
			is_route_ok = true;
			console.log(works[work_slug]);
			return works[work_slug];
		}
	});
	if (is_route_ok) return;
	else error(404, 'Not found');
};
