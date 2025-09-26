// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Work {
			article: string[];
			date: number;
			title: string;
			brief?: string;
		}

		interface Works {
			[slug: string]: Work;
		}
	}
}

export { Work, Work };
