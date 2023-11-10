<script>
	import HeroComponents from './HeroComponents.svelte';
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 items-center">
	<!-- Info -->
	<div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4">
		<h1 class="h1 !text-5xl md:!text-6xl max-w-[600px]">Software Engineer</h1>
		<p class="!text-xl max-w-[475px]">
			Portofolio website built with <a class="anchor" href="https://www.skeleton.dev/" target="_blank" rel="noreferrer"
				>Skeleton UI</a
			>
			and <a class="anchor" href="https://svelte.dev/" target="_blank" rel="noreferrer">Svelte</a>.
		</p>
		<div class="flex gap-4">
			<a href="https://github.com/Fl4v/fl4v.com#readme" target="_blank" class="btn variant-filled-primary">
				<span>Documentation</span>
				<i class="fa-solid fa-arrow-right-long" />
			</a>
		</div>
	</div>

	<!-- Components -->
	<div class="hidden md:inline-block w-full max-w-[650px] mx-auto mt-20">
		<HeroComponents />
	</div>
</div>
