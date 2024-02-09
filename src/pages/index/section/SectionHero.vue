<script setup lang="ts">
import { useCloudinary } from '#root/util.ts';

const cld = useCloudinary();
const logo = cld.image('shalotts-landing/p3kgjrpnqkhfzfgybtg6').toURL()
</script>

<template>
  <section class="flex h-[100vh] bg-[#252830]">
    <div class="container">
      <div class="flex justify-between">
        <div class="flex">
          <img :src="logo" width="300" height="300" alt="logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>