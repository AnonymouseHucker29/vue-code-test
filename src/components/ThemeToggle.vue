<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'

const mode = useColorMode()
</script>
<template>
  <div>
    <Button
      @click="mode = mode === 'dark' ? 'light' : 'dark'"
      variant="ghost"
      class="rounded-full px-3"
    >
      <Icon
        icon="radix-icons:moon"
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
      />
      <Icon
        icon="radix-icons:sun"
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </div>
</template>
