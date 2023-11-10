<script lang="ts">
	const contentBase = 'bg-surface-50 dark:bg-surface-900 border-t border-surface-500/10 text-xs md:text-base';
	const contentRow = 'flex flex-col md:flex-row justify-between items-center md:items-start space-y-5 md:space-y-0';
</script>

<div class="page-footer {contentBase}">
	<div class="w-full max-w-9xl mx-auto p-4 py-5 md:py-10 space-y-10">
		<!-- <section class={contentRow}>
			<div class="grid grid-cols-1 gap-2 place-content-center place-items-center md:place-items-start">
				<p>ⓒ Fl4v.com</p>
			</div>
		</section> -->

		<!-- <hr class="opacity-20" /> -->

		<section class={contentRow}>
			<p>
				ⓒ Fl4v.com <br />
				Powered by <a class="anchor" href="https://skeleton.dev" target="_blank" rel="noreferrer">Skeleton</a>,
				<a class="anchor" href="https://svelte.dev" target="_blank" rel="noreferrer">Svelte</a>
				&
				<a class="anchor" href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind</a>.
			</p>
			<div class="flex space-x-4">
				<a class="btn variant-soft" href="https://github.com/fl4v" target="_blank" rel="noreferrer">
					<i class="bi bi-github" />
					<span class="hidden md:inline-block ml-2">GitHub</span>
				</a>
			</div>
		</section>
	</div>
</div>
