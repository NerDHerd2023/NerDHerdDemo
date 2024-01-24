<script>
	import Footer from '$lib/footer.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email;
	let password;
	async function handleSubmit() {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
	}
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
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="max-h-screen text-center flex flex-col items-center">
		<div class="flex card shadow-2xl rounded-xl overflow-hidden max-w-4xl">
			<!-- Photo on the left side of the card -->

			<!-- Previous Card Content -->
			<div class="w-full p-8">
				<div class="flex flex-col space-y-9">
					<div class="company-name">
						<span class="company-name text-xl font-extrabold">NerD</span><span
							class="company-name white-text text-xl font-extrabold">Herd</span
						>
					</div>

					<h2 class="mt-3 text-center text-3xl font-extrabold">Sign in to your account</h2>
				</div>
				<form class="mt-6 space-y-6" on:submit|preventDefault={handleSubmit}>
					<div class="rounded-md shadow-sm space-y-2">
						<div>
							<label for="userID" class="sr-only">User ID</label>
							<input
								required
								bind:value={email}
								class="input"
								title="Input (email)"
								type="email"
								placeholder="name@example.com"
								autocomplete="email"
							/>
						</div>
						<div>
							<label for="password" class="sr-only">Password</label>
							<input
								required
								bind:value={password}
								class="input"
								title="Input (password)"
								type="password"
								placeholder="password"
							/>
						</div>
					</div>

					<div class="flex items-center justify-between">
						<div class="flex items-center">
							<input
								id="remember_me"
								name="remember_me"
								type="checkbox"
								class="h-4 w-4 border-gray-300 rounded"
							/>
							<label for="remember_me" class="ml-2 block text-sm"> Remember me </label>
						</div>
						<div class="text-sm">
							<a href="#/usersignup" class="font-medium"> Forgot Password? </a>
						</div>
					</div>

					<div>
						<button type="submit" class="btn variant-filled-primary text-xl font-semibold">
							Sign In
						</button>
					</div>
				</form>
				<div class="flex flex-col">
					<button type="button" class="btn variant-filled mt-4">
						<span
							><img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/google-svgrepo-com.svg"
								class="transform transition duration-300 hover:rotate-45 hover:scale-110"
								alt="title"
								width={25}
								height={25}
							/>
						</span>
						<span class="text-xl font-semibold">Sign in with Google</span>
					</button>
					<button type="button" class="btn variant-filled mt-4">
						<span
							><img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/discord-icon-svgrepo-com.svg"
								class="transform transition duration-300 hover:rotate-45 hover:scale-110"
								alt="title"
								width={25}
								height={25}
							/>
						</span>
						<span class="text-xl font-semibold">Sign in with Discord</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
<Footer />

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
