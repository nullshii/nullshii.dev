<script setup lang="ts">
import {RawLocation} from "@intlify/vue-router-bridge";

const localePath = useLocalePath()

defineProps({
  titleKey: String,
  route: String
});
</script>

<template>
  <NuxtLink :to="localePath(route as RawLocation)"
      class="rounded hover:bg-background-100 pb-1 pt-1 pl-2 pr-2 text-xl">
    {{ $t(titleKey) }}
  </NuxtLink>
</template>