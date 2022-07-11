<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { fetching } from './utils'
import { Dialog } from 'vant';

const router = useRouter()
const pinLockCode = ref('')
const get_pin_setting = ref(await fetching('get_pin_setting=1&'))
const remain = ref(get_pin_setting.value.pinRemain)


const onSubmit = async () => {
  const form = {
    "pinCode": pinLockCode.value,
  }
  console.log(form)
  const result = await fetching('operate_pin=' + JSON.stringify(form) + '&')
  if (!result || result?.result != 'ok') {
    Dialog({ message: result?.message || "Very Big Exception" });
    get_pin_setting.value = await fetching('get_pin_setting=1&')
    remain.value = get_pin_setting.value.pinRemain
    pinLockCode.value = ''
    return;
  }
  router.push('/')
};
</script>

<template>
  <div>
    <van-nav-bar :border="false" :fixed="true" :placeholder="true" :safe-area-inset-top="true"
      title="MOBI PIN Lock Page" />
    <br />

    <van-cell-group inset>
      <van-field label="PIN Code" :error-message="`Trial Times Remain: ${remain}`" v-model="pinLockCode" type="text"
        placeholder="Enter PIN Code" />
    </van-cell-group>

    <br />
    <van-button block color="#4d68ee" @click="onSubmit">
      Unlock SIM PIN
    </van-button>

  </div>
</template>

<style lang="less">
:root {
  --van-field-placeholder-text-color: rgba(255, 255, 255, 0.3);
}
</style>
