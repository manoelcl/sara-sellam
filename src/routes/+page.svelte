<!-- <h1>¡Hola! Soy Sara</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->
<script lang="ts">
	import ThreeMap from '$lib/components/ThreeMap.svelte';
	import experiences from '$lib/experience.json';
	// import { increment } from 'three/tsl';
	let city = $state('Ginebra');
	let year = 2015;
	function setCity() {}
</script>

<h1>Home</h1>

<!-- <article class="text-8xl">
	<p>Hi!</p>
	<p>My name is <br /> Sara Sellam.</p>
	<p>Feel free to get in touch</p>
</article> -->
<section class=" mr-auto ml-auto w-1/2 bg-nicesky">
	<article class="flex flex-row">
		<div class="h-45 w-45 overflow-clip rounded-full border-4 border-nicesea">
			<ThreeMap />
		</div>
		<div>
			<h3 class=" text-4xl">{city}</h3>
			<p>{year}</p>
		</div>
	</article>

	{#each experiences as experience}
		<div>
			<button onclick={setCity}>{experience.start + ' - ' + experience.institution}</button>
		</div>
	{/each}
</section>
