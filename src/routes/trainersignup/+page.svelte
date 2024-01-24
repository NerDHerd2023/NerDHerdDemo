<script>
	import { Stepper, Step, InputChip, LightSwitch } from '@skeletonlabs/skeleton';
	import Footer from '$lib/footer.svelte';
	let step = 1;
	let formData = {
		name: '',
		email: '',
		password: '',
		interests: '',
		teachingLove: 5,
		list: []
	};

	const nextStep = () => {
		if (step < 3) step++;
	};

	const prevStep = () => {
		if (step > 1) step--;
	};
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
<section class="flex flex-col items-center justify-center mt-28">
	<div class="card p-12 w-1/2">
		<div class="flex flex-col items-center justify-center mb-8">
			<img
				src="https://dxpcgmtdvyvcxbaffqmt.supabase.co/storage/v1/object/public/demo/teacher.svg"
				alt="Teacher"
				class="transform transition duration-300 hover:rotate-12 hover:scale-110"
				height={50}
				width={50}
			/>
			<h1 class="text-2xl font-bold">Enlist Yourself as a Trainer🔥</h1>
		</div>
		<Stepper>
			<Step class="space-y-6">
				<svelte:fragment slot="header">Personal Information</svelte:fragment>
				<label class="Name">
					<span>Name*</span>
					<input class="input" type="text" placeholder="Enter Your Name" />
				</label>
				<label class="label">
					<span>Date of Birth*</span>
					<input class="input" title="Input (date)" type="date" placeholder="Enter Your Name" />
				</label>
				<label class="label">
					<span>Address</span>
					<input class="input" type="text" placeholder="Enter Your Current Address" />
				</label>

				<label class="label">
					<span>Gender*</span>
					<div class="space-y-2">
						<label class="flex items-center space-x-2">
							<input class="radio" type="radio" checked name="radio-direct" value="1" />
							<p>Male</p>
						</label>
						<label class="flex items-center space-x-2">
							<input class="radio" type="radio" name="radio-direct" value="2" />
							<p>Female</p>
						</label>
						<label class="flex items-center space-x-2">
							<input class="radio" type="radio" name="radio-direct" value="3" />
							<p>Rather Not Say</p>
						</label>
					</div>
				</label>
				<label class="label">
					<span>Your Image</span>
					<input class="input" type="file" />
				</label>
			</Step>
			<Step>
				<svelte:fragment slot="header">Educational Information</svelte:fragment>
				<label class="label">
					<span>Current Status*</span>
					<select class="select">
						<option value="1">Teaching</option>
						<option value="2">Student</option>
					</select>
				</label>
				<label class="label">
					<span>Current Institution (If any)</span>
					<input class="input" type="text" placeholder="Enter Your Current institution" />
				</label>
				<label class="label">
					<span>Highest Degree*</span>
					<select class="select">
						<option value="1">HSC</option>
						<option value="2">Bachelor of Arts</option>
						<option value="2">Bachelor of Business Administration</option>
						<option value="2">Bachelor of Commerce</option>
						<option value="2">Bachelor of Home Economics</option>
						<option value="2">Bachelor of Science</option>
						<option value="2">Bachelor of Social Science</option>
						<option value="2">Bachelor of Pharmacy</option>
						<option value="2">Bachelor of Law</option>
						<option value="1">Master of Arts</option>
						<option value="1">Master of Business Administration</option>
						<option value="1">Master of Commerce</option>
						<option value="1">Master of Engineering</option>
						<option value="1">Master of Laws</option>
						<option value="1">Master of Science</option>
					</select>
				</label>
				<label class="label">
					<span>Currently persuing Degree (If any)</span>
					<select class="select">
						<option value="1">HSC</option>
						<option value="2">Bachelor of Arts</option>
						<option value="2">Bachelor of Business Administration</option>
						<option value="2">Bachelor of Commerce</option>
						<option value="2">Bachelor of Home Economics</option>
						<option value="2">Bachelor of Science</option>
						<option value="2">Bachelor of Social Science</option>
						<option value="2">Bachelor of Pharmacy</option>
						<option value="2">Bachelor of Law</option>
						<option value="1">Master of Arts</option>
						<option value="1">Master of Business Administration</option>
						<option value="1">Master of Commerce</option>
						<option value="1">Master of Engineering</option>
						<option value="1">Master of Laws</option>
						<option value="1">Master of Science</option>
					</select>
				</label>
			</Step>
			<Step>
				<svelte:fragment slot="header">Contact Information</svelte:fragment>
				<label class="label">
					<span>Contact Number</span>
					<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
						<div class="input-group-shim">+88</div>
						<input class="input" title="Input (number)" type="number" placeholder="01759949778" />
					</div>
				</label>
				<label class="label">
					<span>Email</span>
					<input
						class="input"
						title="Input (email)"
						type="email"
						placeholder="name@example.com"
						autocomplete="email"
					/>
				</label>
			</Step>
			<Step>
				<svelte:fragment slot="header">Teaching Information</svelte:fragment>
				<label class="label">
					<span>Tell us Why do you want to become a trainer?</span>
					<textarea class="textarea" rows="4" placeholder="Your motivation..." />
				</label>
				<label class="label">
					<span>Your Topic of Interest</span>
					<InputChip
						bind:value={formData.list}
						name="chips"
						placeholder="Press Enter After each topic..."
					/>
				</label>
			</Step>
			<Step>
				<svelte:fragment slot="header">Preview for Confirmation</svelte:fragment>
			</Step>
		</Stepper>
	</div>
	<Footer />
</section>

<style>
	.form-container {
		max-width: 500px;
		margin: auto;
		padding: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.white-text {
		color: red;
	}
	.company-name {
		font-size: 2rem; /* Adjust font size as needed */
		margin-top: 1rem; /* Add spacing if necessary */
		font-family: 'CustomFont', sans-serif; /* Use your custom font */
	}
</style>
