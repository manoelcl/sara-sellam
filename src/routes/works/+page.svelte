<script lang="ts">
	import worksObject from '$lib/works.json';
	let works: App.Works = worksObject as App.Works;
	var worksArray = Object.keys(works);
</script>

<section class=" ">
	<h1 class="mb-8 bg-nicesky pt-2 pb-2 pl-4 text-4xl text-nicewhite">Works</h1>
	<section class="m-4 min-h-full max-w-3xl text-xl lg:mr-auto lg:ml-auto">
		<ul class=" mr-auto ml-auto grid w-full grid-cols-2 gap-2">
			{#each worksArray as workId}
				<li>
					<a href={'works/' + workId}>
						<article class="bg bg-nicesky text-left">
							<h3 class="bg-nicesea p-2 text-nicewhite">
								{works[workId].title}
							</h3>
							<p class=" p-2">
								{works[workId].brief ? works[workId].brief : works[workId].article[0]}
							</p>
						</article></a
					>
				</li>
			{/each}
		</ul>
	</section>
</section>
