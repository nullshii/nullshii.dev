<template>
  <div class="hidden sm:flex flex-row items-center p-4 w-screen h-0 sm:h-24 bg-secondary">
    <div class="bg-background p-2 rounded-xl">
      <NeonTitle />
    </div>
    <div class="ml-5">
      <HeaderPage title-key="header.route.home" route="/" />
      <HeaderPage title-key="header.route.about" route="/about/" />
    </div>
    <div class="ml-auto flex flex-row gap-3">
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  </div>
</template>