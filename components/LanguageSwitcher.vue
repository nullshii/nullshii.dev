<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const isModalOpen = ref(false);
</script>

<template>
  <div>
    <button @click="isModalOpen = true">
      {{ $t('header.language') }}
    </button>

    <Popup @close="isModalOpen = false" v-show="isModalOpen">
      <div class="flex flex-col gap-5 items-center justify-center">
        <div v-for="l in locales">
          <NuxtLink :to="switchLocalePath(l.code)" @click="isModalOpen = false" :class="{ 'text-accent': l.code === locale }">
            {{ l.name }}
          </NuxtLink>
        </div>
      </div>
    </Popup>
  </div>
</template>