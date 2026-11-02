<template>
  <component :is="currentLayout" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBreakpoints } from '@/composables/useBreakpoints'
import HomeView from '@/pages/HomeView.vue'
import DesktopHome from '@/pages/DesktopHome.vue'

const { isDesktop } = useBreakpoints()

const currentLayout = computed(() => {
  return isDesktop.value ? DesktopHome : HomeView
})
</script>
