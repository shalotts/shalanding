<script setup lang="ts">
import type { PropsCbTag } from '#root/component/console-breads/console-breads.type.ts';

const props = defineProps<PropsCbTag>();
</script>

<template>
  <div class="flex">
    <div :class="tagClass"
         class=":uno: flex items-center border-0 text-content text-shadow-[0_2px_2px_black] transition-colors gap-1"
    >
      <slot/>
    </div>
    <div :class="arrowClass"></div>
  </div>
</template>

<style scoped lang="postcss">
</style>