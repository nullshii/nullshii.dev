<script lang='ts' setup>
	import ('~/assets/css/Header.css');

	const { locale, locales } = useI18n();
	const switchLocalePath = useSwitchLocalePath();

	const isModalOpen = ref(false);
</script>

<template>
	<div>
		<div @click='isModalOpen = true'
				 class='iconButton'>
			<button>
				<lazy-icon name='ion:language' size='1.5rem' class='icon' />
			</button>
			<p>
				{{ $t('header.language') }}
			</p>
		</div>

		<popup v-if='isModalOpen' @close='isModalOpen = false'>
			<div class='flex flex-col gap-10 place-items-center'>
				<div v-for='l in locales'>
					<NuxtLink
						class='text-xl bg-secondary hover:bg-background p-4 rounded-xl transition-all duration-200'
						:class="{ 'text-accent': l.code !== locale, '!bg-background': l.code === locale }"
						:to='switchLocalePath(l.code)'
						@click='isModalOpen = false'>
						{{ l.name }}
					</NuxtLink>
				</div>
			</div>
		</popup>
	</div>
</template>
