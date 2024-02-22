<script setup lang="ts">
import CbConsoleBreads from '#root/component/console-breads/CbConsoleBreads.vue';
import type { Bread } from '#root/component/console-breads/console-breads.type.ts';
import { usePageContext } from '#pages/util.ts';

const pageContext = usePageContext();
const breadcrumbs = () => {
  const urlParsed = pageContext.urlOriginal.split('/');

  return urlParsed.map((value, index) => {
    const root: Bread = {
      href: '/',
      name: '#shalotts.site'
    };

    return (index === 1) ? root : {
      href: pageContext.urlParsed.pathname.replace(`${ value }.+`, value),
      name: value
    };
  });
};
</script>

<template>
  <header class=":uno: flex sticky top-0 bg-dark z-10">
    <div class="container">
      <cb-console-breads :data="breadcrumbs()"/>
    </div>
  </header>
</template>

<style scoped lang="postcss">

</style>