<script lang="ts">
	import { Avatar, ProgressRadial, RadioGroup, RadioItem, SlideToggle, LightSwitch } from '@skeletonlabs/skeleton';

	let value = 0;
</script>

<div class="aspect-video relative">
	<div class="anim-float-avatar absolute z-[1] top-[32%] left-[40%]">
		<Avatar src="assets/avatar.jpg" width="w-32" shadow="shadow-xl" />
	</div>
	<div class="anim-float-progress anim-delay-200 absolute z-[1] top-[0%] left-[10%]">
		<div class="card variant-glass p-4">
			<ProgressRadial width="w-20" stroke={150} meter="stroke-primary-500" track="stroke-primary-500/30" />
		</div>
	</div>
	<div class="anim-float-radio absolute z-[1] top-[-12%] left-[35%]">
		<RadioGroup active="variant-filled-primary">
			<RadioItem bind:group={value} name="justify" value={0}>Typescript</RadioItem>
			<RadioItem bind:group={value} name="justify" value={1}>Python</RadioItem>
			<RadioItem bind:group={value} name="justify" value={2}>Golang</RadioItem>
		</RadioGroup>
	</div>
	<div class="anim-float-card absolute z-[1] top-[80%] left-[50%]">
		<a class="block card card-hover p-4 space-y-2" href="https://github.com/fl4v" target="_blank" rel="noreferrer">
			<div class="flex items-center gap-4">
				<div>
					<p class="font-bold">Flavius Stroe</p>
					<small class="opacity-50">Software Engineer</small>
				</div>
			</div>
			<p class="whitespace-nowrap">
				Seasoned coder, fueled by passion<br />for innovative and efficiency-driven<br />solutions.
			</p>
		</a>
	</div>
	<div class="anim-float-light-switch anim-delay-200 absolute z-[1] top-[60%] left-[15%]">
		<LightSwitch />
	</div>
	<div class="anim-float-badge absolute z-[1] top-[45%] left-[25%]">
		<span class="badge-icon variant-filled">
			<i class="fa-solid fa-skull" />
		</span>
	</div>
	<div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0">
		<div
			class="w-96 aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"
		>
			<div
				class="w-[240px] aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	.anim-float-avatar {
		animation: float-up 13s ease-in-out infinite;
	}
	.anim-float-progress {
		animation: float-down 15s ease-in-out infinite;
	}
	.anim-float-radio {
		animation: float-down 17s ease-in-out infinite;
	}
	.anim-float-card {
		animation: float-up 12s ease-in-out infinite;
	}
	.anim-float-light-switch {
		animation: float-down 18s ease-in-out infinite;
		animation-delay: 2s;
	}
	.anim-float-badge {
		animation: float-up 15s ease-in-out infinite;
	}
	/* prettier-ignore */
	@keyframes float-up {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
		100% { transform: translateY(0px); }
	}
	/* prettier-ignore */
	@keyframes float-down {
		0% { transform: translateY(0px); }
		50% { transform: translateY(20px); }
		100% { transform: translateY(0px); }
	}
</style>
