

<script setup lang="ts">
import { Pane, Splitpanes } from 'splitpanes'

const ui = useUiState()
const isMounted = useMounted()

function startDragging() {
  ui.isPanelDragging = true
}

function endDraggingVertical(e: { size: number }[]) {
  ui.isPanelDragging = false
  ui.panelMenu = e[0].size
}

function endDraggingHorizontal(e: { size: number }[]) {
  ui.isPanelDragging = false
  ui.panelTitle = e[0].size
  ui.panelDocs = e[1].size
}

const panelInitMenu = computed(() => isMounted.value || {
  width: `${ui.panelMenu}%`,
})

const panelInitRight = computed(() => isMounted.value || {
  width: `${100 - ui.panelMenu}%`,
})

const panelInitTitle = computed(() => isMounted.value || {
  height: `${ui.panelTitle}%`,
})

const panelInitDocs = computed(() => isMounted.value || {
  height: `${100 - ui.panelTitle}%`,
})
</script>

<template>
  <Splitpanes h-full of-hidden @resize="startDragging" @resized="endDraggingVertical">
    <Pane :size="ui.panelMenu" min-size="15" :style="panelInitMenu" flex="~ col gap-4" p-4>
      <NuxtLink to="/">index</NuxtLink>
      <NuxtLink to="/about">about</NuxtLink>
      <NuxtLink to="/setting">setting</NuxtLink>
    </Pane>
    <Pane :size="100 - ui.panelMenu" min-size="30" :style="panelInitRight">
      <Splitpanes horizontal relative max-h-full w-full of-hidden @resize="startDragging"
        @resized="endDraggingHorizontal">
        <Pane :size="ui.panelTitle" min-size="5" max-size="8" :style="panelInitTitle">
          <ContentTitle />
        </Pane>
        <Pane :size="ui.panelDocs" min-size="15" :style="panelInitDocs" p-4>
          <ContentDoc />
        </Pane>
      </Splitpanes>
    </Pane>
  </Splitpanes>
</template>
