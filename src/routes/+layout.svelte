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
	class="grid h-screen gap-2 bg-nicewhite font-inter text-nicecoast lg:grid-cols-4 xl:grid-cols-6"
>
	<header class="w-ful col-span-1 col-start-1 bg-nicesea bg-gradient-to-b p-6 text-nicewhite">
		<img
			class="min-48 m-auto mb-16 size-48 rounded-full shadow-xl"
			src={portrait}
			alt="Sara Sellam"
		/>
		<h1 class="text m-auto w-fit text-4xl">Sara Sellam</h1>
		<p class="m-auto mb-4 w-fit text-2xl text-nicesky">Data scientist</p>
		<ul class="m-auto mb-4 flex w-fit flex-row gap-4">
			<li>
				<a href="https://github.com/Sara-Sellam">
					<img src={ghlogo} alt="Github logo" class="size-8" />
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/sara-sellam-1222621b6/">
					<img src={lilogo} alt="LinkedIn logo" class="size-8" />
				</a>
			</li>
		</ul>
		<nav class="text-2xl">
			<ul class="list-inside">
				<li><a class=" hover:bg-nicesky" href="/">Home</a></li>
				<li><a class=" hover:bg-nicesky" href="/aboutme">About me</a></li>
				<li><a class=" hover:bg-nicesky" href="/experience">Studies</a></li>
			</ul>
		</nav>
	</header>
	<main class="col-span-4 col-start-2">
		{@render children?.()}
	</main>
</div>
