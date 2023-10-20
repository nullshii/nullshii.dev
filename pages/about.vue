<script setup lang="ts">
const { locale } = useI18n()

useSeoMeta({
  title: 'nullshii.dev - About',
  description: 'About creator [nullshii]',
})

useHead({
  htmlAttrs: {
    lang: locale
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
</template>