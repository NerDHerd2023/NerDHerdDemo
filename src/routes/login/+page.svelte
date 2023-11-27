<script>
	import Footer from '$lib/footer.svelte';

	let id;
	let password;
	function handleSubmit() {}
</script>

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
								bind:value={id}
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
						<button type="submit" class="btn variant-filled-primary"> Sign In </button>
					</div>
				</form>
				<div class="flex flex-col items-center justify-between mt-3">
					<a href="#/usersignup" class="font-medium"> Don't have account? Sign up </a>
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
