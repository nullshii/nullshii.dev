<script setup lang='ts'>
	import { RawLocation } from '@intlify/vue-router-bridge';

	const localePath = useLocalePath();

	defineProps<{
		route: String,
		localeKey: String
	}>();
</script>

<template>
	<NuxtLink :to='localePath(route as RawLocation)'
						class=''>
		<center-container class='gap-4 !items-start border-0'>
			<p class='text-xl'>
				{{ $t(`blog.${localeKey}.header`) }}
			</p>
			<div class='bg-secondary p-2 rounded flex flex-col gap-6'>
				<p>
					{{ $t(`blog.${localeKey}.description`).split('\n')[0] }}
				</p>
				{{ $t(`blog.read-more`) }}
			</div>
		</center-container>
	</NuxtLink>
</template>