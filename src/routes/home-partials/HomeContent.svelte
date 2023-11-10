<script lang="ts">
	// Components
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	// Filter SVGs
	import { Apollo, BlueNight, Emerald, Noir } from '@skeletonlabs/skeleton';

	// Local
	let showcase = 'components';
</script>

<Apollo />
<BlueNight />
<Emerald />
<Noir />

<div class="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-10 items-start">
	<!-- Info -->
	<div class="col-span-2">
		<div class="space-y-4">
			<h2 class="h2">Welcome to my Revamped Website.</h2>
			<p>
				The majorty of this website has been insipred by Skeleton's UI kit. Being mainly a backend engineer I want to
				focus on a few backend projects and showcase them here. Skeleton's UI takes away the pain of having to design a
				website from scratch and allows me to focus on more important things.
			</p>
		</div>
	</div>
	<div class="col-span-2">
		<div class="space-y-4">
			<h2 class="h2">Projects</h2>
			<ListBox active="variant-filled" hover="hover:variant-soft" rounded="rounded-container-token" padding="!p-3">
				<ListBoxItem bind:group={showcase} name="showcase" value="components">
					<div class="space-y-2">
						<h3 class="h3">Fl4v.com Frontend</h3>
						<p class="!text-sm">
							Check the source code of this website <i class="bi bi-git" />
							<a class="anchor" href="https://github.com/fl4v/fl4v.com" target="_blank" rel="noreferrer"
								>fl4v/fl4v.com</a
							>
						</p>
					</div>
				</ListBoxItem>
				<ListBoxItem bind:group={showcase} name="showcase" value="actions">
					<div class="space-y-2">
						<h3 class="h3">Fl4v.com Backend</h3>
						<p class="!text-sm">Probably coming at some point in the future.</p>
					</div>
				</ListBoxItem>
			</ListBox>
		</div>
	</div>
</div>
