<script lang="ts">
	import ThreeMap from '$lib/components/ThreeMap.svelte';
	import experiences from '$lib/experience.json';
	import { slide } from 'svelte/transition';
	// import { increment } from 'three/tsl';
	let city: String = $state('Ginebra');
	let year = 2015;
	function setCity(cityName: String) {
		console.log(cityName);
		city = cityName;
	}
</script>

<h1 class=" text-4xl">Experience</h1>
<section class="mr-auto ml-auto">
	<article class="flex flex-row">
		<div class="h-45 w-45 overflow-clip rounded-full border-4 border-nicesea">
			<ThreeMap />
		</div>
		<div>
			<h3 class="text-4xl">{city}</h3>
			<p>{'' + year}</p>
		</div>
	</article>
	<ul class=" flex flex-col gap-8">
		{#each experiences as experience}
			<li transition:slide>
				<article onmouseenter={() => setCity(experience.map)} class=" text-left">
					<h3>{experience.start + ' - ' + experience.institution}</h3>
					<p>{experience.name}</p>
					{#each experience.linked as linked}
						<a href={'/works/' + linked.id}>{linked.name}</a>
					{/each}
				</article>
			</li>
		{/each}
	</ul>
</section>
