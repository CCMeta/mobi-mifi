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
  background-color: #2196f3;

  span,
  label {
    font-family: "Nunito-Regular" !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>
