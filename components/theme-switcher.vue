<script lang='ts' setup>
	import { useDark, useToggle } from '@vueuse/core';

	const isDark = useDark();
	const toggleDark = useToggle(isDark);
</script>

<template>
	<button @click='toggleDark()'>
		{{ isDark ? $t('theme.dark') : $t('theme.light') }}
	</button>
</template>
