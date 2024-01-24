<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Footer from '$lib/footer.svelte';
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);
	const handleSubmit = async () => {
		await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});
	};
	let email;
	let password;
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

					<h2 class="mt-3 text-center text-3xl font-extrabold">🔥Ready to join the Nerds?🔥</h2>
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

					<div>
						<button type="submit" class="btn variant-filled-primary text-xl font-semibold">
							⚡Sign Up⚡
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
						<span class="text-xl font-semibold">Sign up with Google</span>
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
						<span class="text-xl font-semibold">Sign up with Discord</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
<Footer />

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
