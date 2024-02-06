<script setup lang="ts">
import { inject } from 'vue';
import { contextKey } from 'f3v';
import type { PageContext } from 'vike/types';
const pageContext = inject(contextKey) as PageContext;
</script>

<template>
  <div class="bg-red p-3">
    <h1 class="bg-blue">TESt</h1>
    {{ pageContext.urlOriginal }}
  </div>

</template>

<style scoped>

</style>