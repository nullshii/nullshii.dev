<template>
  <div class="hidden sm:flex flex-row items-center p-4 w-screen h-0 sm:h-24 bg-secondary">
    <header-title/>
    <div class="ml-5">
      <header-page route="/" title-key="header.route.home"/>
      <header-page route="/about/" title-key="header.route.about"/>
    </div>
    <div class="ml-auto flex flex-row gap-3">
      <language-switcher/>
      <theme-switcher/>
    </div>
  </div>
</template>
