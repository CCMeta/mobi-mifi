<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'

const router = useRouter()

const onClickLeft = () => router.push('/') 
</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true" title="Sim Setting"
      left-arrow @click-left="onClickLeft" />

    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />

    </van-cell-group>
  </div>
</template>

<style lang="less">
</style>
