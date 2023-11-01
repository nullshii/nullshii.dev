<script lang='ts' setup>
	const { locale } = useI18n();

	useSeoMeta({
		title: 'nullshii.dev - nullshii\'s house',
		description: 'Personal page of nullshii',
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
				{{ $t('projects.header') }}
			</div>
			<div v-for='index in 7'
					 class='self-start'>
				<NuxtLink :to='$t(`projects.projects.${index - 1}.link`)'
									class='text-blue-500 text-xl'>
					{{ $t(`projects.projects.${index - 1}.header`) }}
				</NuxtLink>
				<p>
					{{ $t(`projects.projects.${index - 1}.description`) }}
				</p>
			</div>
		</center-container>
	</div>
</template>