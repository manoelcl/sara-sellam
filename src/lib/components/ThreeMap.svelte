<script lang="ts">
	import { asset } from '$app/paths';
	import { onMount } from 'svelte';
	let { location } = $props();
	// let module = import('$lib/3dscenes/world_scene');
	import { setCity, createScene } from '$lib/3dscenes/world_scene';

	const locations: Array<String> = ['Santiago de Compostela', 'Constantine'];
	let el: HTMLCanvasElement;

	$effect(() => setCity(location));
	onMount(async () => {
		createScene(el, asset('world.glb'));
	});
	// onMount(async () => {
	// 	module = await import('$lib/3dscenes/world_scene');
	// 	module.createScene(el, asset('world.glb'));
	// });
</script>

<canvas class="h-full w-full" bind:this={el}></canvas>
