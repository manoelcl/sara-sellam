<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	var page: Data = data as Data;
	interface Data {
		title: string;
		date: number;
		article: string;
	}
	console.log(data);
</script>

<h1 class=" text-4xl">{page.title}</h1>
