<script>
	import { onMount } from 'svelte';
import { each } from 'svelte/internal';

	let todos = [];
	let todoText = '';

	onMount(() => {
		const existingTodos = localStorage.getItem('todos');
		todos = JSON.parse(existingTodos) || [];
	});

	function addTodos() {
		todos = [...todos, todoText];
		localStorage.setItem('todos', JSON.stringify(todos));
	}
</script>

<main>
	<ul>
		{#each todos as todo}
			<li>{todo}</li>
		{/each}
	</ul>

	<form on:submit|preventDefault={addTodos}>
		<input bind:value={todoText} placeholder="What needs to be done?">
		<input type="submit" value="Add todo">
	</form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>