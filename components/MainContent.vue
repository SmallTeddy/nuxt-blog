

<script setup lang="ts">
import { Pane, Splitpanes } from 'splitpanes'
</script>

<template>
  <Splitpanes>
    <Pane size="15" flex="~ col gap-4" p-4>
      <NuxtLink to="/">index</NuxtLink>
      <NuxtLink to="/about">about</NuxtLink>
      <NuxtLink to="/setting">index</NuxtLink>
    </Pane>
    <Pane>
      <div p-4>
        <ContentDoc />
      </div>
    </Pane>
  </Splitpanes>
</template>
