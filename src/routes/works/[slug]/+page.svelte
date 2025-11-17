<script lang="ts">
	import worksObject from '$lib/works.json';
	export let data;
	console.log(data);
	let works: App.Works = worksObject as App.Works;
	let work: App.Work = works[data.slug];
</script>

<section>
	<h1 class="mb-8 bg-nicesea pb-2 pl-4 text-4xl text-nicewhite">Home</h1>
	<article class="m-4 min-h-full max-w-3xl text-xl lg:mr-auto lg:ml-auto">
		<header>
			<h1 class="mb-8 text-3xl md:text-6xl">
				{work.title.toUpperCase()}
			</h1>
			<p>{work.date}</p>
		</header>

		{#each work.article as paragraph}
			<p class="">
				{paragraph}
			</p>
		{/each}
	</article>
</section>
