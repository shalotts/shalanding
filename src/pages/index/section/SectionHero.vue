<script setup lang="ts">
import { cldImageUrl } from '#pages/util.ts';
import TlTextLink from '#root/component/text-link/TlTextLink.vue';

const logo = cldImageUrl('p3kgjrpnqkhfzfgybtg6')
</script>

<template>
  <section class="flex min-h-[100vh] bg-[#252830] text-content py-8">
    <div class="container">
        <div class="h-full flex flex-col items-center gap-7">
        <div class="w-full max-w-2xl flex flex-col gap-5">
          <h1 class="text-4xl font-bold">
            #Shalotts.site
          </h1>
          <h2 class="text-2xl">
            ## Boilerplates, configs and docs. Ecosystems for app develop, design, deployment and maintenance.
          </h2>
        </div>

        <picture class="flex">
          <img :src="logo" width="300" height="300" alt="logo" />
        </picture>

        <div class="w-full max-w-2xl flex flex-col gap-5">
          <p>
            Use <tl-text-link href="#">[#customizer]</tl-text-link> to create your own boilerplate; <br>
            Watch <tl-text-link href="#">[#docs]</tl-text-link> and comment it;
          </p>

          <ul class="font-bold">
            <li>
              > <span class="text-second-light">MAKE</span> easy transfer between development stages;
            </li>
            <li>
              > <span class="text-second-light">PREFER</span> open-source and self-hosted products;
            </li>
            <li>
              > <span class="text-second-light">ORIENT</span> on commercial projects;
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>