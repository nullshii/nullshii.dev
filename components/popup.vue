<script lang='ts' setup>
	import { vOnClickOutside } from '@vueuse/components';

	const emit = defineEmits(['close']);

	function close() {
		emit('close');
	}
</script>

<template>
	<div
		class='fixed top-0 bottom-0 left-0 right-0 z-99 flex items-center justify-center opacity-90 bg-background'>
		<div
			v-on-click-outside='close'
			class='flex bg-secondary p-10 rounded-xl items-center justify-center'>
			<slot />
		</div>
	</div>
</template>
