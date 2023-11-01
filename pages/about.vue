<script lang='ts' setup>
	const { locale } = useI18n();

	useSeoMeta({
		title: 'nullshii.dev - About',
		description: 'About creator [nullshii]',
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
		<center-container class='gap-8'>
			<div class='text-3xl self-start font-semibold'>
				{{ $t('about.about-me.header') }}
			</div>
			{{ $t('about.about-me.description') }}
		</center-container>
	</div>
</template>