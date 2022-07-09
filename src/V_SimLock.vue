<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'
import { Dialog } from 'vant';

const router = useRouter()
const simLockCode = ref('')


const onSubmit = async () => {
  const form = {}
  console.log(form)
  const result = await fetching('unlock_simlock=' + simLockCode + '&')
  if (!result || result?.result != 'ok') {
    Dialog({ message: result?.message || "Very Big Exception" });
    return;
  }
  router.push('/')
};
</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true"
      title="MOBI SimLock Page" />
    <br />

    <van-cell-group inset>
      <van-field v-model="simLockCode" type="text" placeholder="Current Account" />
    </van-cell-group>

    <br />
    <van-button block color="#4d68ee" @click="onSubmit">
      Unlock SIM
    </van-button>

  </div>
</template>

<style lang="less">
:root {
  --van-field-placeholder-text-color: rgba(255, 255, 255, 0.3);
}
</style>
