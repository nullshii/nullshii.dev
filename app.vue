<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <Header/>
  <NuxtPage/>
</template>


<style>
  html.dark {
    color-scheme: dark;
  }
  
  body {
    @apply bg-background text-text font-sans;
  }
</style>
