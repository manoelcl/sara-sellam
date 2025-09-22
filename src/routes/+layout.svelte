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
<div class="grid h-screen grid-cols-5 gap-2 bg-nicewhite text-nicecoast">
	<header class="w-ful col-span-1 col-start-1 bg-nicesky bg-gradient-to-b pt-24 pr-12">
		<img class="mb-8 ml-auto size-48 rounded-full shadow-xl" src={portrait} alt="Sara Sellam" />
		<h1 class="mb-2 ml-auto w-fit text-4xl">Sara Sellam</h1>
		<p class="mb-4 ml-auto w-fit text-2xl">Data scientist</p>
		<ul class="mb-4 ml-auto flex w-fit flex-row gap-4">
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
		<nav class="ml-auto w-fit text-2xl">
			<ul class="list-inside text-right">
				<li><a href="/">Home</a></li>
				<li><a href="/aboutme">About me</a></li>
				<li><a href="/studies">Studies</a></li>
			</ul>
		</nav>
	</header>
	<main class="col-span-4 col-start-2">
		{@render children?.()}
	</main>
</div>
