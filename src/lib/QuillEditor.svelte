<script>
	import { onMount } from 'svelte';
	import 'quill/dist/quill.snow.css';

	let quill;
	let editor;

	onMount(async () => {
		const Quill = await import('quill');
		quill = new Quill.default(editor, {
			theme: 'snow', // You can choose 'bubble' for a different style
			modules: {
				toolbar: [
					[{ header: [1, 2, false] }],
					['bold', 'italic', 'underline'],
					['image', 'code-block']
				]
			},
			placeholder: 'Compose an epic...'
		});
	});

	async function savePost() {
		const contentHTML = quill.root.innerHTML;
		// or for Delta format: const contentDelta = quill.getContents();

		// TODO: Send contentHTML or contentDelta to your backend service
		console.log(contentHTML); // For testing purposes
		// You can use fetch() to send data to your backend
	}
</script>

<div bind:this={editor} class="editor"></div>
<button on:click={savePost}>Save Post</button>

<style>
	.editor {
		height: 400px;
	}
</style>
