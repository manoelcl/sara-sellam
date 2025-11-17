<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import portrait from '$lib/assets/sara.jpeg';
	import ghlogo from '$lib/assets/github.svg';
	import lilogo from '$lib/assets/linkedin.svg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div
	class=" grid h-lvh max-h-lvh grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] overflow-hidden bg-nicewhite font-inter text-nicecoast md:grid-rows-[1fr_max-content]"
>
	<header class="col-span-2 col-start-1 w-full bg-nicesea p-6 text-nicewhite md:col-span-1 md:w-80">
		<img
			class="min-48 mt-8 mr-auto mb-8 ml-auto hidden size-48 rounded-full shadow-xl md:block"
			src={portrait}
			alt="Sara Sellam"
		/>
		<h1 class="text m-auto w-fit text-4xl">Sara Sellam</h1>
		<p class="m-auto mb-4 w-fit text-2xl text-nicesky">Data scientist</p>
		<ul class="m-auto mb-4 flex w-fit flex-row gap-4">
			<li>
				<a
					class="hover:brightness-250 hover:drop-shadow-lg hover:saturate-0"
					href="https://github.com/Sara-Sellam"
				>
					<img src={ghlogo} alt="Github logo" class="size-8" />
				</a>
			</li>
			<li>
				<a
					class="hover:brightness-250 hover:drop-shadow-lg hover:saturate-0"
					href="https://www.linkedin.com/in/sara-sellam-1222621b6/"
				>
					<img src={lilogo} alt="LinkedIn logo" class="size-8" />
				</a>
			</li>
		</ul>
		<nav class="mb-auto text-2xl">
			<ul class="flex-column flex list-inside flex-wrap justify-evenly md:block">
				<li><a class=" w-fit text-nowrap hover:bg-nicesky" href="/">Home</a></li>
				<li><a class="w-fit text-nowrap hover:bg-nicesky" href="/aboutme">About me</a></li>
				<li><a class="w-fit text-nowrap hover:bg-nicesky" href="/experience">Experience</a></li>
				<li><a class="w-fit text-nowrap hover:bg-nicesky" href="/works">Works</a></li>
				<li><a class="w-fit text-nowrap hover:bg-nicesky" href="/contact">Contact</a></li>
			</ul>
		</nav>
	</header>
	<main class="col-span-2 col-start-1 grow md:col-span-1 md:col-start-2">
		{@render children?.()}
	</main>
	<footer
		class="col-span-2 col-start-1 row-start-3 bg-nicecoast pt-2 text-nicewhite md:row-start-3"
	>
		<p class=" mb-4 text-center">© Sara Sellam, 2025</p>
	</footer>
</div>
