<script>
	import Hero from './home-partials/Hero.svelte';
	import HomeContent from './home-partials/HomeContent.svelte';
</script>

<div>
	<header id="hero" class="bg-surface-100-800-token hero-gradient">
		<div class="section-container"><Hero /></div>
	</header>

	<section id="fl4v" class="bg-surface-100-800-token sveltekit-gradient">
		<div class="section-container"><HomeContent /></div>
	</section>
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}
	/* Hero Gradient */
	/* prettier-ignore */
	.hero-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
</style>
