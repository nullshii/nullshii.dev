<script lang="ts" setup>
import {RawLocation} from "@intlify/vue-router-bridge";

const localePath = useLocalePath();

defineProps({
  titleKey: String,
  route: String
});
</script>

<template>
  <NuxtLink
      :to="localePath(route as RawLocation)"
      class="rounded hover:bg-background pb-1 pt-1 pl-2 pr-2 text-xl transition-all duration-200"
  >
    {{ $t(titleKey) }}
  </NuxtLink>
</template>
