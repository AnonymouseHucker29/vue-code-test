<script setup lang="ts">
import { RouterView } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>

<template>
  <header class="p-3 flex justify-end items-center gap-x-10">
    <nav>
      <ThemeToggle />
    </nav>
  </header>
  <RouterView />
</template>
