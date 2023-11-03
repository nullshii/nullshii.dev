<script setup lang='ts'>
	import '~/assets/css/blogs.css';

	const localePath = useLocalePath();
</script>

<template>
	<div class='w-fill flex flex-col gap-2 items-center'>
		<center-container class='gap-4 !items-start'>
			<h1 class='header-1'>
				{{ $t('blogs.github-ssh-config.header') }}
			</h1>
			<div>
				{{ $t('blogs.github-ssh-config.description') }}
			</div>
			<div class='disclaimer-container'>
				{{ $t('blogs.github-ssh-config.disclaimer.os') }}
			</div>
		</center-container>
		<NuxtLink :to="localePath('/blogs')"
							class='text-blue-500 text-xl'>
			{{ $t('blogs.back') }}
		</NuxtLink>
	</div>
</template>