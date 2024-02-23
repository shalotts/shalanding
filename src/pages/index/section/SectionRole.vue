<script setup lang="ts">
import RotateCard from '#root/component/rotate-card/RotateCard.vue';
import { useData } from '#pages/util.ts';
const { cards } = useData();
</script>

<template>
  <section class="flex min-h-[100vh] bg-[#30252C] text-content">
    <div class="container">
      <div class="w-full flex flex-col gap-5 py-8">
        <div class="text-2xl font-bold text-center mb-5">
          ## Control under any role
        </div>

        <div class="grid grid-cols-3 grid-rows-[410px_410px] gap-x-2 gap-y-8">
          <rotate-card v-for="(card, index) in cards"
                       :key="index"
                       :data="card"
                       class="mx-a"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>