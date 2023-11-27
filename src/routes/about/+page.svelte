<script>
	import { onMount } from 'svelte';
	import Footer from '$lib/footer.svelte';
	let isLoading = true;
	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 1500); // Simulating an async load for the image.
	});
</script>

<section class="mt-28">
	{#if isLoading}
		<div class="flex justify-center items-center space-x-2">
			<div class="shape circle mr-1" />
			<div class="shape rectangle mr-1" />
			<div class="shape triangle mr-3" />
			<div>
				<h1 class="text-3xl font-bold">In a Moment...</h1>
			</div>
		</div>
	{:else}
		<h2 class="text-3xl font-semibold ml-8">Meet Our Team</h2>
		<div class="flex flex-wrap mt-4">
			<div class="w-full md:w-1/4 lg:w-1/4 p-4">
				<div class=" rounded-lg shadow-md p-4 hover:shadow-2xl">
					<img
						src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/rrd2.jpg"
						alt="Team Member 1"
						class="h-48 rounded-full mx-auto mb-4"
					/>
					<h3 class=" text-center text-3xl font-bold">Sir Rayhan Rashed</h3>
					<p class="text-center text-2xl font-semibold">Superviser</p>
					<p class="text-center text-xl font-semibold">CSE, BUET</p>
					<div class="flex items-center justify-center space-x-4 mt-5">
						<a href="https://www.facebook.com/r.square.es" target="_blank">
							<img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/facebook-1-svgrepo-com.svg"
								alt="Facebook"
								class="transform transition duration-300 hover:rotate-12 hover:scale-110"
								width={30}
								height={30}
							/>
						</a>
						<a href="mailto:rayhan@cse.buet.ac.bd" target="_blank">
							<img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/GMail%20New%20Icon.svg"
								alt="Gmail"
								class="transform transition duration-300 hover:rotate-12 hover:scale-110"
								width={35}
								height={35}
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="w-full md:w-1/4 lg:w-1/4 p-4">
				<div class=" rounded-lg shadow-md p-4 hover:shadow-2xl">
					<img
						src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/sakib1.jpg"
						alt="Team Member 1"
						class="h-48 rounded-full mx-auto mb-4"
					/>
					<h3 class=" text-center text-3xl font-bold">Nazmus Sakib</h3>
					<p class="text-center text-2xl font-semibold">Founder</p>
					<p class="text-center text-xl font-semibold">CSE, BUET</p>
					<div class="flex items-center justify-center space-x-4 mt-5">
						<a href="https://www.facebook.com/nazmussakib.touhid" target="_blank">
							<img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/facebook-1-svgrepo-com.svg"
								alt="Facebook"
								class="transform transition duration-300 hover:rotate-12 hover:scale-110"
								width={30}
								height={30}
							/>
						</a>
						<img
							src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/github-svgrepo-com.svg"
							alt="Github"
							class="transform transition duration-300 hover:rotate-12 hover:scale-110"
							width={30}
							height={30}
						/>
						<img
							src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/linkedin-svgrepo-com.svg"
							alt="Github"
							class="transform transition duration-300 hover:rotate-12 hover:scale-110"
							width={30}
							height={30}
						/>
						<a href="mailto:sakibbuet2k19@gmail.com" target="_blank">
							<img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/GMail%20New%20Icon.svg"
								alt="Gmail"
								class="transform transition duration-300 hover:rotate-12 hover:scale-110"
								width={35}
								height={35}
							/>
						</a>
					</div>
				</div>
			</div>
			<!-- Add more team members here -->
			<div class="w-full md:w-1/4 lg:w-1/4 p-4">
				<div class=" rounded-lg shadow-md p-4 hover:shadow-2xl">
					<img
						src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/Raihan.jpg"
						alt="Team Member 2"
						class="h-48 rounded-full mx-auto mb-4"
					/>
					<h3 class=" text-center text-3xl font-bold">Md. Raihan Sobhan</h3>
					<p class="text-center text-2xl font-semibold">Founder</p>
					<p class="text-center text-xl font-semibold">CSE, BUET</p>
					<div class="flex items-center justify-center space-x-4 mt-5">
						<a href="https://www.facebook.com/mdraihansobhan.raihan" target="_blank">
							<img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/facebook-1-svgrepo-com.svg"
								alt="Facebook"
								class="transform transition duration-300 hover:rotate-12 hover:scale-110"
								width={30}
								height={30}
							/>
						</a>
						<img
							src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/github-svgrepo-com.svg"
							alt="Github"
							class="transform transition duration-300 hover:rotate-12 hover:scale-110"
							width={30}
							height={30}
						/>
						<img
							src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/linkedin-svgrepo-com.svg"
							alt="Github"
							class="transform transition duration-300 hover:rotate-12 hover:scale-110"
							width={30}
							height={30}
						/>
						<a href="mailto:raihan.cse.buet@gmail.com" target="_blank">
							<img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/GMail%20New%20Icon.svg"
								alt="Gmail"
								class="transform transition duration-300 hover:rotate-12 hover:scale-110"
								width={35}
								height={35}
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="w-full md:w-1/4 lg:w-1/4 p-4">
				<div class=" rounded-lg shadow-md p-4 hover:shadow-2xl">
					<img
						src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/avro.jpg"
						alt="Team Member 3"
						class="h-48 rounded-full mx-auto mb-4"
					/>
					<h3 class=" text-center text-3xl font-bold">Labid Al Nahiyan Avro</h3>
					<p class="text-center text-2xl font-semibold">Founder</p>
					<p class="text-center text-xl font-semibold">CSE, BUET</p>
					<div class="flex items-center justify-center space-x-4 mt-5">
						<a href="https://www.facebook.com/labidal.nahiyan" target="_blank">
							<img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/facebook-1-svgrepo-com.svg"
								alt="Facebook"
								class="transform transition duration-300 hover:rotate-12 hover:scale-110"
								width={30}
								height={30}
							/>
						</a>
						<img
							src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/github-svgrepo-com.svg"
							alt="Github"
							class="transform transition duration-300 hover:rotate-12 hover:scale-110"
							width={30}
							height={30}
						/>
						<img
							src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/linkedin-svgrepo-com.svg"
							alt="Github"
							class="transform transition duration-300 hover:rotate-12 hover:scale-110"
							width={30}
							height={30}
						/>
						<a href="mailto:labid.nahiyan12@gmail.com" target="_blank">
							<img
								src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/GMail%20New%20Icon.svg"
								alt="Gmail"
								class="transform transition duration-300 hover:rotate-12 hover:scale-110"
								width={35}
								height={35}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	{/if}
</section>

<style>
	@keyframes moveUpDown {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}
	.shape {
		display: inline-block;
		animation: moveUpDown 1s ease-in-out infinite;
	}
	.circle {
		width: 20px;
		height: 20px;
		background-color: #4299e1;
		border-radius: 50%;
	}
	.rectangle {
		width: 20px;
		height: 30px;
		background-color: #f56565;
		animation-delay: 0.1s;
	}
	.triangle {
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 20px solid #48bb78;
		animation-delay: 0.2s;
	}
</style>
