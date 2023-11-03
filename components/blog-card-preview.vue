<script setup lang='ts'>
	import { RawLocation } from '@intlify/vue-router-bridge';

	const localePath = useLocalePath();

	defineProps<{
		route: String,
		localeKey: String
	}>();
</script>

<template>
	<center-container class='gap-4 !items-start border-0'>
		<NuxtLink :to='localePath(route as RawLocation)'
							class='text-xl'>
			{{ $t(`blog.${localeKey}.header`) }}
		</NuxtLink>
		<div class='bg-secondary p-2 rounded'>
			{{ $t(`blog.${localeKey}.description`) }}
		</div>
	</center-container>
</template>

<style scoped>

</style>