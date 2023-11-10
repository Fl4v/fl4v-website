<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<h3 class="h3"><a href="/">Flavius Stroe</a></h3>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<section class="hidden sm:inline-flex space-x-1" />
		<LightSwitch />
	</svelte:fragment>
</AppBar>
