<script setup lang="ts">
const ui = useUiState()
</script>

<template>
  <nav px4 py3 text-lg border="b base" flex="~ gap-1 items-center">
    <NuxtLink to="/" title="Nuxt">
      Nuxt
    </NuxtLink>
    <div flex-auto />
    <ColorSchemeToggle />
    <NuxtLink
      rounded p2
      title="GitHub"
      hover="bg-active"
      href="https://github.com/SmallTeddy/nuxt-blog"
      target="_blank"
    >
      <div i-carbon-logo-github text-2xl />
    </NuxtLink>
  </nav>
</template>
