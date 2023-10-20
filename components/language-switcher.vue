<script lang='ts' setup>
	const { locale, locales } = useI18n();
	const switchLocalePath = useSwitchLocalePath();

	const isModalOpen = ref(false);
</script>

<template>
	<div>
		<button @click='isModalOpen = true'>
			{{ $t('header.language') }}
		</button>

		<popup v-show='isModalOpen' @close='isModalOpen = false'>
			<div class='flex flex-col gap-5 items-center justify-center'>
				<div v-for='l in locales'>
					<NuxtLink
						:class="{ 'text-accent': l.code === locale }"
						:to='switchLocalePath(l.code)'
						@click='isModalOpen = false'>
						{{ l.name }}
					</NuxtLink>
				</div>
			</div>
		</popup>
	</div>
</template>
