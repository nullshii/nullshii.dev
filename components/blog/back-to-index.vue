<script setup lang='ts'>
	const localePath = useLocalePath();
</script>

<template>
	<NuxtLink :to="localePath('/blog')"
						class='flex flex-row gap-2 items-center justify-center text-text border-accent border-2 p-2 rounded-xl text-xl'>
		<lazy-icon name='ion:caret-back'
							 size='1.5rem'
							 class='icon' />
		{{ $t('blog.back') }}
	</NuxtLink>
</template>
