<script lang="ts">
	import { onMount } from 'svelte';
	import { asset } from '$app/paths';
	const locations: Array<String> = ['Santiago de Compostela', 'Constantine'];
	let el: HTMLCanvasElement;
	onMount(async () => {
		const module = await import('$lib/3dscenes/world_scene');
		module.createScene(el, asset('world.glb'));
	});
</script>

<canvas class="h-full w-full" bind:this={el}></canvas>
