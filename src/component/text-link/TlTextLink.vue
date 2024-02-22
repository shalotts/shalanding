<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <a :href="href"
     class="link">
    <span class="z-2">
      <slot />
    </span>
  </a>
</template>

<style scoped lang="postcss">
</style>