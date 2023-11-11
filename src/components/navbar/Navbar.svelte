<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a class="flex items-center" href="/" title="Go to Homepage">
			<img src="/favicon.png" alt="Logo" width="32px" />
			<p class="font-semibold text-3xl">Flavius Stroe</p>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<section class="hidden sm:inline-flex space-x-1" />
		<LightSwitch />
	</svelte:fragment>
</AppBar>
