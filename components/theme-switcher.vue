<script lang='ts' setup>
	import ('~/assets/css/Header.css');

	import { useDark, useToggle } from '@vueuse/core';

	const isDark = useDark();
	const toggleDark = useToggle(isDark);
</script>

<template>
	<div @click='toggleDark()'
			 class='iconButton'>
		<button>
			<lazy-icon name='ion:invert-mode' size='1.5rem' class='icon' />
		</button>
		<p>
			{{ $t('header.theme') }}
		</p>
	</div>
</template>
