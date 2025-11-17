<script lang="ts">
	import IconMatplot from '$lib/assets/IconMatplot.svelte';
	import IconPython from '$lib/assets/IconPython.svelte';
	import IconPandas from '$lib/assets/IconPandas.svelte';
	import IconCPP from '$lib/assets/IconCPP.svelte';
	import IconScikit from '$lib/assets/IconScikit.svelte';
	import IconVsCode from '$lib/assets/IconVsCode.svelte';
</script>

<section class="min-h-full overflow-auto">
	<h1 class="mb-8 bg-nicesky pt-2 pb-2 pl-4 text-4xl text-nicewhite">About me</h1>
	<article class=" m-4 min-h-full max-w-3xl text-xl lg:mr-auto lg:ml-auto">
		<h1 class="mb-8 text-3xl md:text-6xl">
			RELIABLE SOFTWARE <br /> DEVELOPMENT FOR <br /> COMPLEX DATA ANALYSIS
		</h1>
		<p class="mb-1">
			Hi, my name is Sara. I'm a data scientist based in Santiago de Compostela, Spain. I am
			currently working in my physics PhD from USC for discovering insights on the structure of
			matter from CERN particle collision data.
		</p>
		<p class="mb-1">I love working with data and solving problems.</p>
		<p class="mb-1">
			Interested in working together or having a chat? Feel free to reach out to me.
		</p>
		<ul class="flex flex-row flex-wrap justify-evenly">
			<li class="w-1/3 min-w-60">
				<article>
					<header class=" min-h-30">
						<h2
							class=" m-8 rounded-md border-2 border-nicesea bg-nicesea p-2 text-center text-2xl text-nicewhite"
						>
							Programming
						</h2>
					</header>
					<ul class="flex h-full w-full flex-row flex-wrap content-start justify-evenly gap-2">
						<li class="w-28 hover:brightness-250 hover:drop-shadow-lg hover:saturate-0">
							<IconPython />
							<h3 class="pt-3 text-center">Python</h3>
						</li>
						<li class="w-28 hover:brightness-250 hover:drop-shadow-lg hover:saturate-0">
							<IconCPP />
							<h3 class="pt-3 text-center">C++</h3>
						</li>
						<li class="w-28 hover:brightness-250 hover:drop-shadow-lg hover:saturate-0">
							<IconPandas />
							<h3 class="pt-3 text-center">Pandas</h3>
						</li>
						<li class="w-28 hover:brightness-250 hover:drop-shadow-lg hover:saturate-0">
							<IconScikit />
							<h3 class="pt-3 text-center">scikit learn</h3>
						</li>
						<li class="w-28 hover:brightness-250 hover:drop-shadow-lg hover:saturate-0">
							<IconMatplot />
							<h3 class="pt-3 text-center">matplotlib</h3>
						</li>
					</ul>
				</article>
			</li>
			<li class="w-1/3 min-w-60">
				<article>
					<header class=" min-h-30">
						<h2
							class="m-8 rounded-md border-2 border-nicesea bg-nicesea p-2 text-center text-2xl text-ellipsis text-nicewhite"
						>
							Machine learning
						</h2>
					</header>
					<ul class="flex h-full w-full flex-row flex-wrap content-start justify-evenly gap-2">
						<li class="w-28 hover:brightness-250 hover:drop-shadow-lg hover:saturate-0">
							<IconVsCode />
							<h3 class="pt-3 text-center">Supervised learning</h3>
						</li>
						<li class="w-28 hover:brightness-250 hover:drop-shadow-lg hover:saturate-0">
							<IconVsCode />
							<h3 class="pt-3 text-center">Classification</h3>
						</li>
						<li class="w-28 hover:brightness-250 hover:drop-shadow-lg hover:saturate-0">
							<IconVsCode />
							<h3 class="pt-3 text-center">Regression</h3>
						</li>
					</ul>
				</article>
			</li>
			<li class="w-1/3 min-w-60">
				<article>
					<header class=" min-h-30">
						<h2
							class="m-8 rounded-md border-2 border-nicesea bg-nicesea p-2 text-center text-2xl text-nicewhite"
						>
							Data analysis
						</h2>
					</header>
					<ul class="flex h-full w-full flex-row flex-wrap content-start justify-evenly gap-2">
						<li class="w-28 hover:brightness-250 hover:drop-shadow-lg hover:saturate-0">
							<IconVsCode />
							<h3 class="pt-3 text-center">Power BI</h3>
						</li>
					</ul>
				</article>
			</li>
		</ul>
	</article>
</section>
