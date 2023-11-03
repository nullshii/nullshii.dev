<script lang='ts' setup>
	import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

	const breakPoints = useBreakpoints(breakpointsTailwind);
	const isDesktop = breakPoints.greater('xl');

	const hamburgerEnabled = ref(false);
</script>

<template>
	<div class='sticky top-0'>
		<div class='flex flex-row justify-around p-4 h-24 bg-secondary'>
			<div class='flex flex-row items-center'>
				<h1 class='bg-background p-2 rounded-xl cursor-default select-none text-5xl'>
					nullshii.dev
				</h1>
				<div class='ml-5 flex flex-row gap-4' v-if='isDesktop'>
					<header-page route='/'
											 route-key='index'
											 title-key='header.route.projects'
											 icon-key='ion:file-tray-full' />
					<header-page route='/blogs'
											 route-key='blogs'
											 title-key='header.route.blogs'
											 icon-key='ion:newspaper' />
					<header-page route='/about'
											 route-key='about'
											 title-key='header.route.about'
											 icon-key='ion:person' />
				</div>
			</div>
			<div v-if='isDesktop' class='flex flex-row items-center gap-4'>
				<FpsMeter />
				<language-switcher />
				<theme-switcher />
			</div>
			<button v-if='!isDesktop'
							class='ml-auto'
							@click='hamburgerEnabled = !hamburgerEnabled'>
				<lazy-icon name='ion:menu'
									 size='2.5rem'
									 :class="{'text-text': hamburgerEnabled, 'icon': !hamburgerEnabled }" />
			</button>
		</div>
		<hamburger-menu v-if='!isDesktop && hamburgerEnabled' />
	</div>
</template>
