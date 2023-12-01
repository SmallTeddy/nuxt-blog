

<script setup lang="ts">
import { Pane, Splitpanes } from 'splitpanes'

const ui = useUiState()
const isMounted = useMounted()

function startDragging() {
  ui.isPanelDragging = true
}

function endDraggingVertical(e: { size: number }[]) {
  ui.isPanelDragging = false
  ui.panelDocs = e[0].size
}

const panelInitDocs = computed(() => isMounted.value || {
  width: `${ui.panelDocs}%`,
})

const panelInitRight = computed(() => isMounted.value || {
  width: `${100 - ui.panelDocs}%`,
})
</script>

<template>
  <Splitpanes h-full of-hidden @resize="startDragging" @resized="endDraggingVertical">
    <Pane :size="ui.panelDocs" min-size="15" :style="panelInitDocs" flex="~ col gap-4" p-4>
      <NuxtLink to="/">index</NuxtLink>
      <NuxtLink to="/about">about</NuxtLink>
      <NuxtLink to="/setting">index</NuxtLink>
    </Pane>
    <Pane :size="100 - ui.panelDocs" min-size="30" :style="panelInitRight">
      <div p-4>
        <ContentDoc />
      </div>
    </Pane>
  </Splitpanes>
</template>
