<script setup lang='ts'>
</script>

<template>
	<div class='fixed top-24 p-10 left-0 right-0 bg-secondary flex flex-col gap-10 items-start'>
		<div class='flex flex-col items-start gap-2'>
			<header-page route='/'
									 route-key='index'
									 title-key='header.route.projects'
									 icon-key='ion:file-tray-full' />
			<header-page route='/blogs'
									 route-key='blogs'
									 title-key='header.route.blogs'
									 icon-key='ion:newspaper' />
			<header-page route='/about/'
									 route-key='about'
									 title-key='header.route.about'
									 icon-key='ion:person' />
		</div>
		<div class='flex flex-row items-start gap-4 text-xl'>
			<language-switcher />
			<theme-switcher />
		</div>
	</div>
</template>