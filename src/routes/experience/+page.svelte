<script lang="ts">
	import ThreeMap from '$lib/components/ThreeMap.svelte';
	import experiences from '$lib/experience.json';
	import { slide } from 'svelte/transition';
	let city: String = $state('Santiago de Compostela');
	let year = 2015;
	function setCity(cityName: String) {
		console.log(cityName);
		city = cityName;
	}
</script>

<section class=" ">
	<h1 class="mb-8 bg-nicesea pt-2 pb-2 pl-4 text-4xl text-nicewhite">Experience</h1>
	<section class="mr-auto ml-auto max-w-3xl text-xl">
		<article class="mb-16 flex w-full flex-row">
			<div class="h-45 w-45 overflow-clip rounded-md border-4 border-nicesky">
				<ThreeMap />
			</div>
			<div class="grow bg-nicesky">
				<h3 class="-ml-6 bg-nicesea pl-6 text-4xl text-nicewhite">{city}</h3>
				<p>{'' + year}</p>
			</div>
		</article>
		<ul class=" mr-auto ml-auto flex w-full flex-col-reverse gap-2">
			{#each experiences as experience}
				<li transition:slide>
					<article onmouseenter={() => setCity(experience.map)} class=" text-left">
						<h3 class="bg-nicesea p-2 text-nicewhite">
							{(experience.start === experience.end
								? experience.start
								: experience.start + '-' + experience.end) +
								' ' +
								experience.institution}
						</h3>
						<p class=" p-2">{experience.name}</p>
						<div class="m-1 flex pb-2">
							{#each experience.linked as linked}
								<a
									class=" mr-2 ml-2 rounded-xl border-2 border-nicecoast bg-none pr-2 pl-2 text-nicecoast hover:bg-nicecoast hover:text-nicewhite"
									href={'/works/' + linked.id}>{linked.name}</a
								>
							{/each}
						</div>
					</article>
				</li>
			{/each}
		</ul>
	</section>
</section>
