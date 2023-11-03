<script lang='ts' setup>
	import ('~/assets/css/Header.css');

	const { locale, locales } = useI18n();
	const switchLocalePath = useSwitchLocalePath();

	const selectedLanguage = ref(locale.value);

	watch(selectedLanguage, () => {
		navigateTo(switchLocalePath(selectedLanguage.value));
	});
</script>

<template>
	<div>
		<select v-model='selectedLanguage'
						class='rounded-xl bg-background text-text text-xl gap-2 p-2 appearance-none text-center select-none outline-none'>
			<option v-for='l in locales'
							:value='l.code'
							class='focus:bg-accent bg-background'>
				{{ l.name }}
			</option>
		</select>
	</div>
</template>