<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="pageHeader">
		<!-- App Bar -->

		<nav class="fixed top-0 z-50 w-full py-6 backdrop-blur-md">
			<div class="flex justify-between mx-6">
				<div>
					<span class="company-name text-2xl font-extrabold">NerD</span><span
						class="company-name white-text text-2xl font-extrabold">Herd</span
					>
				</div>

				<div class="flex space-x-3">
					<LightSwitch />
					<a
						class="btn btn-sm variant-ghost-surface"
						href="/about"
						target="_blank"
						rel="noreferrer"
					>
						About us
					</a>
				</div>
			</div>
		</nav>
	</svelte:fragment>
	<slot />
</AppShell>

<style>
	.company-name {
		font-size: 2rem; /* Adjust font size as needed */
		margin-top: 1rem; /* Add spacing if necessary */
		font-family: 'CustomFont', sans-serif; /* Use your custom font */
	}

	/* Style "Herd" in red */
	.white-text {
		color: red;
	}
</style>
