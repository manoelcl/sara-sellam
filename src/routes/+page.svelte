<!-- <h1>¡Hola! Soy Sara</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->
<script lang="ts">
	import ThreeMap from '$lib/components/ThreeMap.svelte';
	let city = $state('Ginebra');
	let year = Date.toString();
</script>

<h1>Home</h1>

<!-- <article class="text-8xl">
	<p>Hi!</p>
	<p>My name is <br /> Sara Sellam.</p>
	<p>Feel free to get in touch</p>
</article> -->

<article class="flex flex-row">
	<div class="h-45 w-45 overflow-clip rounded-full">
		<ThreeMap />
	</div>

	<div>
		<h3 class=" text-6xl">{city}</h3>
		<p>{year}</p>
	</div>
</article>
