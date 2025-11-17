<script lang="ts">
	import ghlogo from '$lib/assets/github.svg';
	import lilogo from '$lib/assets/linkedin.svg';
</script>

<section class="min-h-full overflow-auto">
	<h1 class="mb-8 bg-nicesky pt-2 pb-2 pl-4 text-4xl text-nicewhite">Contact</h1>
	<article class="m-4 min-h-full max-w-3xl text-xl lg:mr-auto lg:ml-auto">
		<h1 class="mb-8 text-3xl md:text-6xl">DO YOU WANT<br /> TO TALK?</h1>
		<p class="mb-6">Get in touch in my social media:</p>
		<ul class=" ml-6 flex flex-col gap-4">
			<li>
				<a
					class="flex flex-row items-center gap-4 drop-shadow-lg hover:text-nicesky"
					href="https://github.com/Sara-Sellam"
					><img src={ghlogo} alt="Github logo" class="size-8" />
					<div>Github</div></a
				>
			</li>
			<li>
				<a
					class="flex flex-row items-center gap-4 drop-shadow-lg hover:text-nicesky"
					href="https://www.linkedin.com/in/sara-sellam-1222621b6/"
					><img src={lilogo} alt="LinkedIn logo" class="size-8" />
					<div>Linkedin</div></a
				>
			</li>
		</ul>
	</article>
</section>
