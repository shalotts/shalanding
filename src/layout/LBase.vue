<script setup lang="ts">
import LHeader from '#root/layout/LHeader.vue';
import LFooter from '#root/layout/LFooter.vue';
</script>

<template>
  <div class=":uno: h-full flex flex-col justify-between ff-mono">
    <l-header />
    <slot />
    <l-footer />
  </div>
</template>

<style lang="postcss">
html, body, #app {
  display: block;
  height: 100%;
  line-height: 1.8;
}

.ff-mono {
  font-family: 'JetBrains Mono Variable', sans-serif;
}

svg {
  width: 32px;
  height: 32px;
}
</style>