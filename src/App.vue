<script setup>
</script>

<template>
  <suspense>
    <router-view v-slot="{ Component }">
      <transition name="van-fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </suspense>
</template>

<style lang="less">
body {
  background-color: #383850;

  span,
  label {
    font-family: "Nunito-Regular" !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  i.van-icon {
    font: normal normal normal 20px 'vant-icon';
  }

}
</style>
