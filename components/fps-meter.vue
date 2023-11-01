<script setup lang='ts'>
	import ('~/assets/css/Header.css');

	const fps = ref('');
	let startTime = Date.now();
	let frame = 0;
	let stopped = false;

	const showText = ref(true);

	function tick() {
		if (stopped) return;

		const time = Date.now();
		frame++;

		if (time - startTime > 100) {
			fps.value = (frame / ((time - startTime) / 1000)).toFixed(0);
			startTime = time;
			frame = 0;
		}

		window.requestAnimationFrame(tick);
	}

	onMounted(() => {
		tick();
	});

	onUnmounted(() => {
		stopped = true;
	});

	function toggleText() {
		showText.value = !showText.value;
	}
</script>

<template>
	<div class='iconButton'
			 @click='toggleText'>
		<lazy-icon name='ion:ios-speedometer'
							 size='1.5rem'
							 class='icon' />
		<p>
			{{ fps }}
		</p>
		<p v-if='showText'>
			{{ $t('header.fps') }}
		</p>
	</div>
</template>

