<script setup lang="ts">
import { vOnClickOutside } from "@vueuse/components"

const emit = defineEmits(['close']);

function close() {
  emit('close');
}
</script>

<template>
  <div class="fixed top-0 bottom-0 left-0 right-0 z-99 flex items-center justify-center opacity-90 bg-background">
    <div class="flex bg-secondary p-10 rounded-xl items-center justify-center"
         v-on-click-outside="close">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>