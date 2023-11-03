<script lang='ts' setup>
	import { RawLocation } from '@intlify/vue-router-bridge';

	const localePath = useLocalePath();
	const currentRoute = useRoute();

	const props = defineProps<{
		iconKey: String,
		titleKey: String,
		routeKey: String,
		route: String,
	}>();

	const isCurrent = ref(false);

	watch(() => currentRoute.fullPath, _ => {
		if (!currentRoute.name) return;
		isCurrent.value = currentRoute.name.toString().startsWith(props.routeKey as string);
	}, { deep: true, immediate: true });
</script>

<template>
	<NuxtLink
		:to='localePath(route as RawLocation)'
		:class="{'bg-background': isCurrent}"
		class='group rounded-xl hover:bg-background text-xl transition-all duration-200 flex flex-row items-center justify-center gap-2 p-2'>
		<lazy-icon :name='iconKey'
							 size='1.5rem'
							 :class="{'!text-text': isCurrent}"
							 class='icon' />
		<div class='text-accent group-hover:text-text transition-all duration-200'
				 :class="{'text-text': isCurrent}">
			{{ $t(titleKey as string) }}
		</div>
	</NuxtLink>
</template>
