<script lang="ts">
	import IconMatplot from '$lib/assets/IconMatplot.svelte';
	import IconPython from '$lib/assets/IconPython.svelte';
	import IconPandas from '$lib/assets/IconPandas.svelte';
	import IconCPP from '$lib/assets/IconCPP.svelte';
	import IconScikit from '$lib/assets/IconScikit.svelte';
</script>

<section class="min-h-full overflow-auto">
	<h1 class="mb-8 bg-nicesky pt-2 pb-2 pl-4 text-4xl text-nicewhite">About me</h1>
	<article class="scr mr-auto ml-auto min-h-full max-w-3xl text-xl">
		<h1 class="mb-16 text-6xl">
			RELIABLE SOFTWARE <br /> DEVELOPMENT FOR <br /> COMPLEX DATA ANALYSIS
		</h1>
		<p class="mb-1">
			Hi, my name is Sara. I'm a data scientist based in Santiago de Compostela, Spain. I am
			currently working in my physcics PhD from USC for discovering insights on the structure of
			matter from CERN particle collision data.
		</p>
		<p class="mb-1">I love working with data and solving problems.</p>
		<p class="mb-1">
			Interested in working together or having a chat? Feel free to reach out to me.
		</p>
		<ul class="flex flex-row">
			<li class=" w-1/3">
				<h2
					class="m-8 rounded-md border-2 border-nicesea bg-nicesea text-center text-2xl text-nicewhite"
				>
					Programming
				</h2>
				<ul class="flex h-full w-full flex-row flex-wrap content-start justify-evenly gap-2">
					<li class="w-28">
						<IconPython />
						<h3 class="pt-3 text-center">Python</h3>
					</li>
					<li class="w-28">
						<IconCPP />
						<h3 class="pt-3 text-center">C++</h3>
					</li>
					<li class="w-28">
						<IconPandas />
						<h3 class="pt-3 text-center">Pandas</h3>
					</li>
					<li class="w-28">
						<IconScikit />
						<h3 class="pt-3 text-center">scikit learn</h3>
					</li>
					<li class="w-28">
						<IconMatplot />
						<h3 class="pt-3 text-center">matplotlib</h3>
					</li>
				</ul>
			</li>
			<li class=" w-1/3">
				<h2
					class="m-8 rounded-md border-2 border-nicesea bg-nicesea text-center text-2xl text-nicewhite"
				>
					Machine learning
				</h2>
				<ul class="flex h-full w-full flex-row flex-wrap content-start justify-evenly gap-2">
					<li class="w-28">
						<h3 class="pt-3 text-center">Supervised learning</h3>
					</li>
					<li class="w-28">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="m-auto size-18"
							><path
								fill-rule="evenodd"
								d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
								clip-rule="evenodd"
							/></svg
						>
						<h3 class="pt-3 text-center">Classification</h3>
					</li>
					<li class="w-28">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="m-auto size-18"
							><path
								fill-rule="evenodd"
								d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
								clip-rule="evenodd"
							/></svg
						>
						<h3 class="pt-3 text-center">Regression</h3>
					</li>
				</ul>
			</li>
			<li class=" w-1/3">
				<h2
					class="m-8 rounded-md border-2 border-nicesea bg-nicesea text-center text-2xl text-nicewhite"
				>
					Programming
				</h2>
			</li>
		</ul>
	</article>
</section>
