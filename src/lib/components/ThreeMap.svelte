<script lang="ts">
	import { asset } from '$app/paths';
	import { onMount } from 'svelte';
	let { location } = $props();
	import { setCity, createScene } from '$lib/3dscenes/world_scene';
	let el: HTMLCanvasElement;

	$effect(() => setCity(location));
	onMount(async () => {
		createScene(el, asset('world.glb'));
	});
</script>

<canvas class="h-full w-full" bind:this={el}></canvas>
