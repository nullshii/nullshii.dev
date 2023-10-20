<script lang='ts' setup>
	import Header from '~/components/header.vue';
</script>

<template>
	<Header />
	<NuxtPage />
</template>

<style>
	html.dark {
		color-scheme: dark;
	}

	body {
		@apply bg-background text-text font-sans;
	}
</style>
