export const useUiState = defineStore('ui', () => {
  const isPanelDragging = ref(false)

  const persistState = reactive(getLayoutDefaults())

  function getLayoutDefaults() {
    return {
      panelMenu: 15,
      panelTitle: 3,
      panelDocs: 97
    }
  }

  function resetLayout() {
    Object.assign(persistState, getLayoutDefaults())
  }

  const stateCookie = useCookie<Partial<typeof persistState>>(
    'nuxt-playground-ui-state',
    { default: () => ({}), watch: true },
  )

  Object.assign(persistState, stateCookie.value)
  watch(persistState, () => {
    stateCookie.value = { ...persistState }
  })

  return {
    isPanelDragging,
    resetLayout,
    ...toRefs(persistState),
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUiState, import.meta.hot))
