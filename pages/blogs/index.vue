<script setup lang='ts'>
	import BlogCardPreview from '~/components/blog-card-preview.vue';

	const { locale } = useI18n();
	const localePath = useLocalePath();

	useSeoMeta({
		title: 'nullshii.dev - blogs',
		description: 'nullshii\'s blogs',
	});

	useHead({
		htmlAttrs: {
			lang: locale,
		},
		link: [
			{
				rel: 'icon',
				type: 'image/png',
				href: '/favicon.png',
			},
		],
	});
</script>

<template>
	<div class='w-fill flex flex-col gap-10 items-center'>
		<blog-card-preview route='/blogs/github-ssh-config'
											 locale-key='github-ssh-config' />
	</div>
</template>

<style scoped>
	.blogLink {
		@apply text-blue-500 text-xl;
	}
</style>