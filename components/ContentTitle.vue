<script setup lang="ts">
import { useRoute } from '#vue-router';

const route = useRoute()

const docTitle = computed(() => {
  const title = route.path == '/' ? 'index' : route.path.slice(1)
  return title[0].toUpperCase() + title.slice(1)
})  
</script>

<template>
  <div h-full flex="~ row items-center" pl-4>
    {{ docTitle }}
  </div>
</template>
