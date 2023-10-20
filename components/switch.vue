<script lang='ts' setup>
	const emit = defineEmits(['toggle']);

	let state: boolean = false;

	function toggleButton() {
		state = !state;
		emit('toggle', state);
	}
</script>

<template>
	<div class='flex'>
		<button @click='toggleButton'>Switch</button>
	</div>
</template>
