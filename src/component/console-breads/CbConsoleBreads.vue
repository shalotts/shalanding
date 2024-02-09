<script setup lang="ts">
import type { PropsConsoleBreads } from '#root/component/console-breads/console-breads.type.ts';
import CbTag from '#root/component/console-breads/CbTag.vue';
import { CicsSystemGroup } from '@vicons/carbon';

const props = defineProps<PropsConsoleBreads>();
</script>

<template>
  <div class="flex items-center py-2">
    <cb-tag v-for="(i, index) in data"
            class="relative h-[45px]"
            :key="index"
            :tag-class="[ index % 2 === 0 ? 'bg-main hover:bg-main/50' : 'bg-second hover:bg-second/50']"
    >
      <CicsSystemGroup v-if="index === 0" class="mx-2"/>
      <a v-if="i.name"
         :href="i.href"
         class="flex items-center h-full px-2"
      >
        {{ i.name }}
      </a>
    </cb-tag>
  </div>
</template>

<style scoped>

</style>