<script setup lang="ts">
import type { IDataRotateCard } from '#root/component/rotate-card/rotate-card.type.ts';
import { cldImageUrl } from '#pages/util.ts';

const props = defineProps<{
  data: IDataRotateCard
}>()
</script>

<template>
  <div class="rotate-card w-full h-full max-w-[313px] max-h-[410px] perspective-[1000px]">
    <div class="rotate-card-inner :uno: relative w-full h-full flex justify-center">
      <div class="rotate-card-front :uno: absolute w-full h-full backface-hidden">
        <figure class="relative">
          <img loading="lazy"
               :src="cldImageUrl(data.imageId)"
               :alt="data.title"
          >
          <figcaption class="absolute bottom-6 left-0 w-full text-2xl font-bold text-center">
            {{ data.title }}
          </figcaption>
        </figure>
      </div>

      <div class="rotate-card-back :uno: absolute w-full h-full backface-hidden min-h-[402px] flex flex-col justify-between bg-gradient-to-b from-[#1D1D1D] to-[#070707] shadow-[inset_0_0_2px_0] rounded-3 p-8">
        <div class="flex flex-col mb-2 gap-5">
          <div class="text-2xl mb-5">
            {{ data.title }}
          </div>
          <pre class="text-sm text-pretty">{{ data.description }}</pre>
        </div>
        <div class="flex">
          <a :href="data.url" class="link">>> [#SEE MORE]...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  figure:after {
    top: 0;
    left: 0;
    position: absolute;
    filter: sepia(100%);
    width: 100%;
    height: 100%;
    display: block;
    content: '';
    background: url('https://res.cloudinary.com/dr5gcup5n/image/upload/v1708592997/shalotts-landing/myj15jx8duxohsq1idoi.gif') left center / contain repeat;
  }

  figcaption {
    background: radial-gradient(ellipse 50% 80%, rgba(52, 52, 52, 100%), rgba(52, 52, 52, 0%));
  }

  .rotate-card:hover .rotate-card-inner {
    transform: rotateY(180deg);
  }

  .rotate-card-inner {
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .rotate-card-back {
    transform: rotateY(180deg);
  }
</style>