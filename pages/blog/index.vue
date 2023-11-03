<script setup lang='ts'>
	import BlogCardPreview from '~/components/blog-card-preview.vue';

	const { locale } = useI18n();

	useSeoMeta({
		title: 'nullshii.dev - blog',
		description: 'nullshii\'s blog',
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
		<blog-card-preview route='/blog/github-ssh-config'
											 locale-key='github-ssh-config' />
	</div>
</template>