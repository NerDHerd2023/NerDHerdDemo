<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import Footer from '$lib/footer.svelte';
	let isLoading = true;
	let id;
	let password;
	function handleSignInUser() {
		window.open('/userlogin', '_blank');
	}
	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 1500); // Simulating an async load for the image.
	});
</script>

<nav class="fixed top-0 z-50 w-full py-6 backdrop-blur-md">
	<div class="flex justify-between mx-6">
		<div class="flex">
			<img
				src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/GeekGlasses.png"
				class="transform transition duration-300 hover:rotate-12"
				alt="title"
				width={60}
			/>
			<span class="company-name text-2xl font-extrabold">NerD</span><span
				class="company-name white-text text-2xl font-extrabold">Herd</span
			>
		</div>

		<div class="flex space-x-3">
			<LightSwitch />
			<a class="btn btn-sm variant-ghost-surface" href="/about" target="_blank" rel="noreferrer">
				About us
			</a>
		</div>
	</div>
</nav>
<section class="mt-28">
	{#if isLoading}
		<div class="flex space-x-2 justify-center items-center h-screen dark:invert">
			<div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
			<div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
			<div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
		</div>
	{:else}
		<div class="min-h-screen mx-auto flex items-center justify-between space-x-14 mb-6">
			<div class="flex flex-col space-y-6 w-1/2 items-center justify-center">
				<div class="min-h-screen text-center flex flex-col items-center">
					<div class="flex card shadow-2xl rounded-xl overflow-hidden max-w-4xl">
						<!-- Photo on the left side of the card -->

						<!-- Previous Card Content -->
						<div class="w-full p-8 flex flex-col items-center">
							<img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/teacher-removebg-preview.png"
								alt="Trainer"
								class="object-contain object-center mb-6"
							/>
							<div class="flex flex-col space-y-9">
								<div class="text-4xl text-center font-bold mb-6">As a Trainer</div>
							</div>
							<div>
								<p class="text-xl text-center font-semibold">
									Create your own class to teach enthusiast individuals.
									<br />
									Set the goals. Maintain the resources. Take Video classroom.
									<br />Create Question for Community purpose.
								</p>
							</div>

							<div>
								<button type="submit" class="btn variant-filled-primary mt-8 text-xl font-semibold">
									Sign In
								</button>
							</div>

							<div class="flex flex-col items-center justify-between mt-3">
								<a href="/trainersignup" target="_blank" class="font-medium">
									Don't have account? Sign up
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col space-y-6 w-1/2 items-center justify-center">
				<div class="min-h-screen text-center flex flex-col items-center">
					<div class="flex card shadow-2xl rounded-xl overflow-hidden max-w-4xl">
						<!-- Photo on the left side of the card -->

						<!-- Previous Card Content -->
						<div class="w-full p-8 flex flex-col items-center">
							<img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/student.png"
								alt="Learner"
								class="object-contain object-center mb-6"
							/>
							<div class="flex flex-col space-y-9">
								<div class="text-4xl text-center font-bold mb-6">As a Learner</div>
							</div>
							<div>
								<p class="text-xl text-center font-semibold">
									Join the community of the Nerds🔥. Keep up-to-date.
									<br />
									Communicate & collaborate. Avail Contents. Help from AI.
									<br />⚡Storm your Brain with mind-boggling questions🧠
								</p>
							</div>

							<div>
								<button
									type="submit"
									class="btn variant-filled-error mt-8 text-xl font-semibold"
									on:click={handleSignInUser}
								>
									Sign In
								</button>
							</div>

							<div class="flex flex-col items-center justify-between mt-3">
								<a href="/learnersignup" target="_blank" class="font-medium">
									Don't have account? Sign up
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	{/if}
</section>

<style>
	.white-text {
		color: red;
	}
	.company-name {
		font-size: 2rem; /* Adjust font size as needed */
		margin-top: 1rem; /* Add spacing if necessary */
		font-family: 'CustomFont', sans-serif; /* Use your custom font */
	}
</style>
