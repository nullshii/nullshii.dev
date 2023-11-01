<script lang='ts' setup>
	import { vOnClickOutside } from '@vueuse/components';

	const emit = defineEmits(['close']);

	function close() {
		emit('close');
	}
</script>

<template>
	<Teleport to='body'>
		<div
			class='fixed top-0 bottom-0 left-0 right-0 z-99 flex items-center justify-center bg-white dark:bg-black bg-opacity-[85%] dark:bg-opacity-[85%] modal-container'>
			<div
				v-on-click-outside='close'
				class='flex bg-secondary p-10 rounded-xl z-100 items-center justify-center'>
				<slot />
			</div>
		</div>
	</Teleport>
</template>